# CEMEX Skills

Official CEMEX marketplace of authorized plugins and skills for Claude Cowork and Claude Code.

This repository is the public distribution mirror of the CEMEX Skills catalog, curated by the CEMEX Digital catalog team. It is the recommended install channel: it works on every version of Claude Code and Claude Cowork.

The catalog site [skills.cx-landing.com](https://skills.cx-landing.com) lists each plugin's audit status and version. It is password protected, so ask the catalog team for access before opening it.

## Instalacion rapida (Claude Code)

```
/plugin marketplace add https://github.com/cesarrivascapistran/claude-skills.git
/plugin install cemex-directores@cemex-skills
/plugin install c-level-skills@cemex-skills
```

Instala **los dos**. `cemex-directores` es la guia en espanol: te dice cual de los 56 asesores responde tu pregunta. `c-level-skills` es el contenido.

Despues, escribe `/cemex-directores:consejo` y describe tu situacion en espanol.

## Install in Claude Cowork

1. Open **Customize**, then **Plugins**.
2. Click **+**, then **Add marketplace**.
3. Paste `cesarrivascapistran/claude-skills` and sync. If that is rejected, paste the full URL `https://github.com/cesarrivascapistran/claude-skills.git` instead.
4. Install **cemex-directores** and **c-level-skills**. In a task, type `/` or click `+` to use their skills.

## Install in Claude Code

```
/plugin marketplace add https://github.com/cesarrivascapistran/claude-skills.git
/plugin install cemex-directores@cemex-skills
/plugin install c-level-skills@cemex-skills
```

Use the full HTTPS URL. The short form `cesarrivascapistran/claude-skills` also works, but Claude Code probes SSH first, so on a machine that already has SSH keys for another host it can fail with `Permission denied (publickey)`.

## Check it worked

Run `/plugin` and confirm both plugins show status enabled. Then type `/` in a task: the Spanish guide appears as `/cemex-directores:consejo` and the C-suite commands as `/c-level-skills:...` and `/c-level-agents:...`.

## If something fails

| Message | What to do |
| --- | --- |
| `Permission denied (publickey)` | You used the short form. Re-run with the full HTTPS URL above. |
| `Plugin ... not found in marketplace` | The marketplace was added but the catalog is stale. Run `/plugin marketplace update cemex-skills`. |
| `This plugin uses a source type your Claude Code version does not support` | You added the catalog site URL instead of this repository. Use the HTTPS URL above, or update Claude Code to v2.1.224 or later. |
| Nothing appears after adding the marketplace | The manifest failed to load. Report it to the catalog team, do not retry. |

## Authorized plugins

| Plugin | Version | Audit | Description |
| --- | --- | --- | --- |
| `cemex-directores` | 1.0.0 | PASS | Spanish entry layer. Routes a request written in Spanish to the right C-level advisor. One routing skill, no scripts, no hooks, no MCP servers. |
| `c-level-skills` | 2.9.0 | WARN (third-party content, not localized) | Complete virtual board of directors: CEO, CTO, CFO, COO, CPO, CMO, CRO, CISO, CHRO advisors plus General Counsel, Chief Data Officer, Chief AI Officer, Chief Customer Officer, VP of Engineering, executive mentor, board meetings, scenario war room, M&A playbook, and the founder-mode agent layer. |

## Governance

- What is authorized is a specific, audited commit, never a moving branch. Updates land here through a controlled publish, not by tracking upstream.
- `c-level-skills` is vendored from [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (`c-level-advisor`, MIT), upstream commit `aa8d778`, audited 2026-08-14. Privilege surface: no hooks, no MCP servers, Python scripts are standard-library only; 14 agent definitions grant `Write` and `Bash`.
- `cemex-directores` is first-party CEMEX Digital content. It is additive: it never modifies the vendored bundle.
- The vendored content keeps its MIT license: see [LICENSE](LICENSE) and `plugins/baseline/c-level-skills/LICENSE`.
- **This repository is generated.** It is published from the CEMEX Digital canonical repository by `scripts/publish-mirror.mjs`. Commits made directly here are overwritten by the next publish. Send changes upstream.
- Every push runs `scripts/validate-marketplace.mjs`, which fails if a catalog entry stops matching the version in the plugin's own manifest.

## For CEMEX users

Questions, requests for new skills, or issues with an installed plugin: contact the CEMEX Digital catalog team through the usual channel. The catalog site lists each plugin's audit status and version.
