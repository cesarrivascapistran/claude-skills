# CEMEX Skills

> **Beta.** Este catálogo está en evaluación. El contenido está auditado, pero no es material corporativo aprobado ni sustituye a las áreas de finanzas, legal o auditoría.
>
> **Beta.** This catalog is under evaluation. Its content is audited, but it is not approved corporate material and does not replace finance, legal or audit functions.

[Español](#español) · [English](#english)

---

## Español

Catálogo de plugins de asesoría ejecutiva para Claude Code y Claude Cowork.

Este repositorio es el espejo público de distribución del catálogo. Es el canal de instalación recomendado: funciona en cualquier versión de Claude Code y de Claude Cowork.

El sitio [skills.cx-landing.com](https://skills.cx-landing.com) lista el estado de auditoría y la versión de cada plugin. Está protegido con contraseña, así que pídela al equipo del catálogo antes de abrirlo.

### Instalación en Claude Code

```
/plugin marketplace add https://github.com/cesarrivascapistran/claude-skills.git
/plugin install cemex-directores@cemex-skills
/plugin install c-level-skills@cemex-skills
```

Instala **los dos**. `cemex-directores` es la guía en español: te dice cuál de los 56 asesores responde tu pregunta. `c-level-skills` es el contenido.

Usa la URL HTTPS completa. La forma corta `cesarrivascapistran/claude-skills` también funciona, pero Claude Code sondea SSH primero, así que en una máquina que ya tiene llaves SSH de otro host puede fallar con `Permission denied (publickey)`.

### Instalación en Claude Cowork

1. Abre **Customize** y luego **Plugins**.
2. Haz click en **+** y después en **Add marketplace**.
3. Pega `cesarrivascapistran/claude-skills` y sincroniza. Si lo rechaza, pega la URL completa `https://github.com/cesarrivascapistran/claude-skills.git`.
4. Instala **cemex-directores** y **c-level-skills**. En una tarea, escribe `/` o haz click en `+` para usarlos.

### Cómo saber que quedó

Corre `/plugin` y confirma que los dos aparecen como enabled. Después escribe `/` en una tarea: la guía en español sale como `/cemex-directores:consejo` y los asesores como `/c-level-skills:...` y `/c-level-agents:...`.

Para empezar, escribe `/cemex-directores:consejo` y describe tu situación en español.

### Si algo falla

| Mensaje | Qué hacer |
| --- | --- |
| `Permission denied (publickey)` | Usaste la forma corta. Repite con la URL HTTPS completa. |
| `Plugin ... not found in marketplace` | El marketplace se agregó pero el catálogo está viejo. Corre `/plugin marketplace update cemex-skills`. |
| `This plugin uses a source type your Claude Code version does not support` | Agregaste la URL del sitio en vez de este repositorio. Usa la URL de arriba, o actualiza Claude Code a v2.1.224 o superior. |
| No aparece nada después de agregar el marketplace | El manifiesto no cargó. Repórtalo al equipo del catálogo, no reintentes. |

### Plugins incluidos

| Plugin | Versión | Auditoría | Descripción |
| --- | --- | --- | --- |
| `cemex-directores` | 1.0.0 | PASS | Capa de entrada en español. Enruta una petición escrita en español al asesor correcto. Una sola skill, sin scripts, sin hooks, sin servidores MCP. |
| `c-level-skills` | 2.9.0 | WARN (contenido de terceros, sin localizar) | Consejo ejecutivo completo: asesores de CEO, CTO, CFO, COO, CPO, CMO, CRO, CISO y CHRO, más General Counsel, datos, IA, clientes, ingeniería, mentor ejecutivo, sesiones de consejo, análisis de escenarios, manual de fusiones y la capa de agentes founder-mode. |

### Notas

- Lo autorizado es un commit específico y auditado, nunca una rama móvil. Las actualizaciones llegan por una publicación controlada, no siguiendo upstream.
- `c-level-skills` viene de [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (`c-level-advisor`, MIT), commit `aa8d778`, auditado el 2026-08-14. Superficie de privilegio: sin hooks, sin servidores MCP, los scripts de Python usan solo librería estándar; 14 definiciones de agente otorgan `Write` y `Bash`.
- `cemex-directores` es contenido propio del catálogo. Es aditivo: nunca modifica el bundle vendorizado.
- El contenido vendorizado conserva su licencia MIT: ver [LICENSE](LICENSE) y `plugins/baseline/c-level-skills/LICENSE`.
- **Este repositorio se genera.** Se publica desde el repositorio canónico con `scripts/publish-mirror.mjs`. Los commits hechos aquí directamente se sobreescriben en la siguiente publicación. Manda los cambios al canónico.
- Cada push corre `scripts/validate-marketplace.mjs`, que falla si una entrada del catálogo deja de coincidir con la versión del manifiesto del plugin.

Dudas, peticiones de skills nuevos o problemas con un plugin instalado: contacta al equipo del catálogo por el canal de siempre.

---

## English

Executive advisory plugin catalog for Claude Code and Claude Cowork.

This repository is the public distribution mirror of the catalog. It is the recommended install channel: it works on every version of Claude Code and Claude Cowork.

The site [skills.cx-landing.com](https://skills.cx-landing.com) lists each plugin's audit status and version. It is password protected, so ask the catalog team for access before opening it.

### Install in Claude Code

```
/plugin marketplace add https://github.com/cesarrivascapistran/claude-skills.git
/plugin install cemex-directores@cemex-skills
/plugin install c-level-skills@cemex-skills
```

Install **both**. `cemex-directores` is the Spanish guide: it tells you which of the 56 advisors answers your question. `c-level-skills` is the content.

Use the full HTTPS URL. The short form `cesarrivascapistran/claude-skills` also works, but Claude Code probes SSH first, so on a machine that already has SSH keys for another host it can fail with `Permission denied (publickey)`.

### Install in Claude Cowork

1. Open **Customize**, then **Plugins**.
2. Click **+**, then **Add marketplace**.
3. Paste `cesarrivascapistran/claude-skills` and sync. If that is rejected, paste the full URL `https://github.com/cesarrivascapistran/claude-skills.git` instead.
4. Install **cemex-directores** and **c-level-skills**. In a task, type `/` or click `+` to use their skills.

### Check it worked

Run `/plugin` and confirm both plugins show status enabled. Then type `/` in a task: the Spanish guide appears as `/cemex-directores:consejo` and the advisors as `/c-level-skills:...` and `/c-level-agents:...`.

### If something fails

| Message | What to do |
| --- | --- |
| `Permission denied (publickey)` | You used the short form. Re-run with the full HTTPS URL above. |
| `Plugin ... not found in marketplace` | The marketplace was added but the catalog is stale. Run `/plugin marketplace update cemex-skills`. |
| `This plugin uses a source type your Claude Code version does not support` | You added the catalog site URL instead of this repository. Use the HTTPS URL above, or update Claude Code to v2.1.224 or later. |
| Nothing appears after adding the marketplace | The manifest failed to load. Report it to the catalog team, do not retry. |

### Included plugins

| Plugin | Version | Audit | Description |
| --- | --- | --- | --- |
| `cemex-directores` | 1.0.0 | PASS | Spanish entry layer. Routes a request written in Spanish to the right advisor. One skill, no scripts, no hooks, no MCP servers. |
| `c-level-skills` | 2.9.0 | WARN (third-party content, not localized) | Complete virtual board: CEO, CTO, CFO, COO, CPO, CMO, CRO, CISO and CHRO advisors, plus General Counsel, data, AI, customer, engineering, executive mentor, board meetings, scenario war room, M&A playbook and the founder-mode agent layer. |

### Notes

- What is authorized is a specific, audited commit, never a moving branch. Updates land here through a controlled publish, not by tracking upstream.
- `c-level-skills` is vendored from [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) (`c-level-advisor`, MIT), upstream commit `aa8d778`, audited 2026-08-14. Privilege surface: no hooks, no MCP servers, Python scripts are standard-library only; 14 agent definitions grant `Write` and `Bash`.
- `cemex-directores` is first-party catalog content. It is additive: it never modifies the vendored bundle.
- The vendored content keeps its MIT license: see [LICENSE](LICENSE) and `plugins/baseline/c-level-skills/LICENSE`.
- **This repository is generated.** It is published from the canonical repository by `scripts/publish-mirror.mjs`. Commits made directly here are overwritten by the next publish. Send changes upstream.
- Every push runs `scripts/validate-marketplace.mjs`, which fails if a catalog entry stops matching the version in the plugin's own manifest.

Questions, requests for new skills, or issues with an installed plugin: contact the catalog team through the usual channel.
