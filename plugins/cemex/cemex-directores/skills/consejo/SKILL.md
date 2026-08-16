---
name: consejo
description: Indice en espanol del consejo ejecutivo. Enruta una peticion escrita en espanol al asesor C-level correcto. Usar cuando alguien pida en espanol una opinion de finanzas, operaciones, tecnologia, producto, marketing, ventas, seguridad, datos, inteligencia artificial, legal, talento o clientes; cuando pida armar un consejo, preparar una sesion de board, analizar escenarios, tomar una decision ejecutiva o hacer un post mortem; o cuando no sepa a quien preguntar. Frases tipicas: necesito la opinion del CFO, que opina el CTO, arma un consejo, prepara el board, revisa el riesgo legal, analiza el escenario, ayudame a decidir, a quien le pregunto, que asesor uso, no se por donde empezar.
---

# Consejo Ejecutivo: guia en espanol

Esta skill no da la asesoria. Identifica cual de los 56 asesores del catalogo responde la
pregunta y lo invoca. Existe porque el bundle `c-level-skills` esta en ingles y los
directores escriben en espanol.

## Como usarla

1. Lee la peticion del usuario y ubicala en la tabla de abajo.
2. Invoca la skill destino. No repitas su trabajo ni resumas su metodo.
3. Si encajan dos o mas, dilo en una linea y pregunta cual antes de seguir.
4. Si no encaja ninguna, di que no hay asesor para eso y ofrece el mas cercano.

Responde siempre en el idioma en que escribio el usuario. Las skills destino producen
su salida en ingles: traduce los encabezados y las conclusiones al espanol, deja los
terminos financieros estandar (EBITDA, runway, NRR, churn) como estan.

## Asesores por area

| La persona pregunta por | Invoca |
| --- | --- |
| Finanzas, presupuesto, flujo, unit economics, inversion | `/c-level-skills:cfo-advisor` |
| Estrategia general, vision, prioridades de la empresa | `/c-level-skills:ceo-advisor` |
| Arquitectura, stack, deuda tecnica, build vs buy | `/c-level-skills:cto-advisor` |
| Operacion, cadencia, OKR, procesos, escalamiento | `/c-level-skills:coo-advisor` |
| Producto, roadmap, priorizacion, ajuste al mercado | `/c-level-skills:cpo-advisor` |
| Marca, posicionamiento, mensaje, canales | `/c-level-skills:cmo-advisor` |
| Ventas, pipeline, pronostico, cuotas | `/c-level-skills:cro-advisor` |
| Seguridad, amenazas, cumplimiento, incidentes | `/c-level-skills:ciso-advisor` |
| Personas, contratacion, bandas salariales, retencion | `/c-level-skills:chro-advisor` |
| Legal, contratos, propiedad intelectual, regulacion | `/c-level-skills:general-counsel-advisor` |
| Datos, gobierno de datos, producto de datos | `/c-level-skills:chief-data-officer-advisor` |
| Inteligencia artificial, modelos, riesgo de IA | `/c-level-skills:chief-ai-officer-advisor` |
| Clientes, retencion, exito del cliente, NRR | `/c-level-skills:chief-customer-officer-advisor` |
| Entrega de ingenieria, DORA, estructura de equipos | `/c-level-skills:vpe-advisor` |

## Sesiones y procesos

| La persona pide | Invoca |
| --- | --- |
| Armar un consejo, sesion de board, varias opiniones | `/c-level-skills:board-meeting` |
| Preparar el material del consejo | `/c-level-skills:board-deck-builder` |
| Analizar escenarios, que pasa si, plan de crisis | `/c-level-skills:scenario-war-room` |
| Fusiones, adquisiciones, due diligence | `/c-level-skills:ma-playbook` |
| Inteligencia competitiva, analisis de rivales | `/c-level-skills:competitive-intel` |
| Diagnostico de salud organizacional | `/c-level-skills:org-health-diagnostic` |
| Cultura, valores, rituales de equipo | `/c-level-skills:culture-architect` |
| Gestion del cambio, adopcion interna | `/c-level-skills:change-management` |
| Alineacion estrategica entre areas | `/c-level-skills:strategic-alignment` |
| Expansion internacional, nuevos mercados | `/c-level-skills:intl-expansion` |
| Narrativa interna, comunicacion al equipo | `/c-level-skills:internal-narrative` |
| Registrar una decision y su razon | `/c-level-skills:decision-logger` |
| Enrutar entre varios asesores, agenda ejecutiva | `/c-level-skills:chief-of-staff` |

## Capa de agentes

La capa `c-level-agents` corre revisiones y sesiones con varios agentes a la vez. Es mas
cara y mas lenta que un asesor suelto: usala cuando la decision lo amerite.

| La persona pide | Invoca |
| --- | --- |
| Sesion de consejo con varios agentes a la vez | `/c-level-agents:boardroom` |
| Resumen ejecutivo de una situacion | `/c-level-agents:brief` |
| Tomar una decision con contraste entre areas | `/c-level-agents:decide` |
| Plan de ejecucion de una decision tomada | `/c-level-agents:execute` |
| Post mortem de algo que salio mal | `/c-level-agents:post-mortem` |
| Revision desde un area concreta | `/c-level-agents:cfo-review` y sus pares `cto-`, `cmo-`, `cro-`, `ciso-`, `cpo-`, `cdo-`, `caio-`, `cco-`, `gc-`, `vpe-` |

## Limites que hay que decir en voz alta

- El contenido es asesoria generica de terceros, auditada pero **no** especifica de CEMEX.
  No sustituye a finanzas, legal ni auditoria interna.
- `general-counsel-advisor` no da asesoria legal. Levanta preguntas para el abogado.
- Ninguna de estas skills tiene acceso a datos de CEMEX. Trabajan con lo que se les
  escriba en el chat.
