# CEMEX Skills

Official CEMEX marketplace of authorized plugins and skills for Claude Cowork and Claude Code.

This repository is the public distribution mirror of the CEMEX Skills catalog, curated by the CEMEX Digital catalog team. Browse the catalog at [skills.cx-landing.com](https://skills.cx-landing.com).

## Install in Claude Cowork

1. Open **Customize**, then **Plugins**.
2. Click **+**, then **Add marketplace**.
3. Paste `cesarrivascapistran/claude-skills` and sync.
4. Install **c-level-skills**. In a task, type `/` or click `+` to use its skills.

## Install in Claude Code

```
/plugin marketplace add cesarrivascapistran/claude-skills
/plugin install c-level-skills@cemex-skills
```

## Authorized plugins

| Plugin | Version | Audit | Description |
| --- | --- | --- | --- |
| `c-level-skills` | 2.9.0 | WARN (third-party content, not localized) | Complete virtual board of directors: CEO, CTO, CFO, COO, CPO, CMO, CRO, CISO, CHRO advisors plus General Counsel, Chief Data Officer, Chief AI Officer, Chief Customer Officer, VP of Engineering, executive mentor, board meetings, scenario war room, M&A playbook, and the founder-mode agent layer. |

## Governance

- What is authorized is a specific, audited commit, never a moving branch. Updates land here through a controlled publish, not by tracking upstream.
- `c-level-skills` is vendored from [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (`c-level-advisor`, MIT), upstream commit `aa8d778`, audited 2026-08-14.
- The vendored content keeps its MIT license: see [LICENSE](LICENSE) and `plugins/baseline/c-level-skills/LICENSE`.

## For CEMEX users

Questions, requests for new skills, or issues with an installed plugin: contact the CEMEX Digital catalog team through the usual channel. The catalog site lists each plugin's audit status and version.
