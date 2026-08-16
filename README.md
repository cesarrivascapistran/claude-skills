# CEMEX Skills

Official CEMEX marketplace of authorized plugins and skills for Claude Cowork and Claude Code.

This repository is the public distribution mirror of the CEMEX Skills catalog, curated by the CEMEX Digital catalog team. It is the recommended install channel: it works on every version of Claude Code and Claude Cowork.

The catalog site [skills.cx-landing.com](https://skills.cx-landing.com) lists each plugin's audit status and version. It is password protected, so ask the catalog team for access before opening it.

## Install in Claude Cowork

1. Open **Customize**, then **Plugins**.
2. Click **+**, then **Add marketplace**.
3. Paste `cesarrivascapistran/claude-skills` and sync. If that is rejected, paste the full URL `https://github.com/cesarrivascapistran/claude-skills.git` instead.
4. Install **c-level-skills**. In a task, type `/` or click `+` to use its skills.

## Install in Claude Code

```
/plugin marketplace add https://github.com/cesarrivascapistran/claude-skills.git
/plugin install c-level-skills@cemex-skills
```

Use the full HTTPS URL. The short form `cesarrivascapistran/claude-skills` also works, but Claude Code probes SSH first, so on a machine that already has SSH keys for another host it can fail with `Permission denied (publickey)`.

## Check it worked

Run `/plugin` and confirm `c-level-skills` shows version 2.9.0 and status enabled. Then type `/` in a task: the C-suite commands appear as `/cs:...`.

## If something fails

| Message | What to do |
| --- | --- |
| `Permission denied (publickey)` | You used the short form. Re-run with the full HTTPS URL above. |
| `Plugin "c-level-skills" not found in marketplace` | The marketplace was added but the catalog is stale. Run `/plugin marketplace update cemex-skills`. |
| `This plugin uses a source type your Claude Code version does not support` | You added the catalog site URL instead of this repository. Use the HTTPS URL above, or update Claude Code to v2.1.224 or later. |
| Nothing appears after adding the marketplace | The manifest failed to load. Report it to the catalog team, do not retry. |

## Authorized plugins

| Plugin | Version | Audit | Description |
| --- | --- | --- | --- |
| `c-level-skills` | 2.9.0 | WARN (third-party content, not localized) | Complete virtual board of directors: CEO, CTO, CFO, COO, CPO, CMO, CRO, CISO, CHRO advisors plus General Counsel, Chief Data Officer, Chief AI Officer, Chief Customer Officer, VP of Engineering, executive mentor, board meetings, scenario war room, M&A playbook, and the founder-mode agent layer. |

## Governance

- What is authorized is a specific, audited commit, never a moving branch. Updates land here through a controlled publish, not by tracking upstream.
- `c-level-skills` is vendored from [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (`c-level-advisor`, MIT), upstream commit `aa8d778`, audited 2026-08-14.
- The vendored content keeps its MIT license: see [LICENSE](LICENSE) and `plugins/baseline/c-level-skills/LICENSE`.
- This mirror is published from the CEMEX Digital canonical repository, which holds the audit trail and the catalog site. Do not commit plugin changes here directly: they belong upstream and would be overwritten by the next publish.
- Every push runs `scripts/validate-marketplace.mjs`, which fails if a catalog entry stops matching the version in the vendored plugin's own manifest.

## For CEMEX users

Questions, requests for new skills, or issues with an installed plugin: contact the CEMEX Digital catalog team through the usual channel. The catalog site lists each plugin's audit status and version.
