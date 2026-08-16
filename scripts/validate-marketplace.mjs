#!/usr/bin/env node
/**
 * Validate .claude-plugin/marketplace.json against the plugin folders
 * shipped in this mirror, and check that every declared version still
 * matches the plugin's own manifest.
 *
 * This is the publish gate for the mirror: a broken manifest here does
 * not raise an error for the user, it just makes the plugin silently
 * fail to appear after `/plugin marketplace add`.
 */
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const marketplacePath = join(root, '.claude-plugin', 'marketplace.json');

function fail(msg) {
  console.error(`validate-marketplace: ${msg}`);
  process.exit(1);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    fail(`cannot parse ${path}: ${err.message}`);
  }
}

const market = readJson(marketplacePath);
if (typeof market.name !== 'string' || !market.name) fail('marketplace.name required');
if (!market.owner || typeof market.owner.name !== 'string') fail('marketplace.owner.name required');
if (!Array.isArray(market.plugins) || market.plugins.length === 0) {
  fail('marketplace.plugins must be a non-empty array');
}

// pluginRoot is PREPENDED to relative sources. Setting both it and a source that
// already carries the prefix resolves to ./plugins/plugins/... The Claude Code CLI
// tolerates it; stricter surfaces (the claude.ai and Cowork plugin dialog) do not,
// and the marketplace fails to load there with no useful error.
const pluginRoot = market.metadata?.pluginRoot;
if (pluginRoot) {
  const prefix = pluginRoot.replace(/^\.\//, '').replace(/\/$/, '');
  for (const plugin of market.plugins) {
    if (typeof plugin.source === 'string' && plugin.source.replace(/^\.\//, '').startsWith(`${prefix}/`)) {
      fail(
        `${plugin.name}: source "${plugin.source}" already contains pluginRoot "${pluginRoot}". ` +
          'Drop metadata.pluginRoot or shorten the source, never both.',
      );
    }
  }
}

// Governance metadata lives in the canonical GitLab repo, never in the mirror.
const reserved = new Set([
  'cemex',
  'authorizedSha',
  'auditDate',
  'auditResult',
  'ownerArea',
  'upstream',
]);

for (const plugin of market.plugins) {
  if (!plugin.name || !plugin.source) fail('each plugin needs name and source');
  if (typeof plugin.source !== 'string') {
    fail(`${plugin.name}: the mirror only ships relative string sources`);
  }
  const extra = Object.keys(plugin).filter((k) => reserved.has(k));
  if (extra.length) {
    fail(`${plugin.name}: governance fields ${extra.join(', ')} belong in the canonical repo`);
  }

  const folder = resolve(root, plugin.source);
  if (!existsSync(folder)) fail(`${plugin.name}: missing folder ${plugin.source}`);

  const manifestPath = join(folder, '.claude-plugin', 'plugin.json');
  if (!existsSync(manifestPath)) fail(`${plugin.name}: missing .claude-plugin/plugin.json`);

  const manifest = readJson(manifestPath);
  if (manifest.name !== plugin.name) {
    fail(`${plugin.name}: plugin.json declares name "${manifest.name}"`);
  }
  // Catches a stale mirror: catalog says one version, vendored bundle is another.
  if (plugin.version && manifest.version && plugin.version !== manifest.version) {
    fail(
      `${plugin.name}: catalog version ${plugin.version} does not match ` +
        `plugin.json version ${manifest.version}`,
    );
  }
}

console.log(`validate-marketplace: ok (${market.plugins.length} plugins)`);
