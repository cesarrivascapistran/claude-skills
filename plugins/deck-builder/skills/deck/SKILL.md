---
name: deck
description: Genera presentaciones de PowerPoint desde una especificacion JSON, sobre la plantilla .pptx corporativa que se le indique. Usar cuando alguien pida armar una presentacion, un deck, unas laminas, un PPTX, un resumen ejecutivo en diapositivas, un reporte trimestral o una revision de proyecto en formato presentacion. Frases tipicas: arma una presentacion, hazme un deck, genera las laminas, necesito un PPTX, prepara la presentacion del comite, exporta esto a PowerPoint. Also triggers in English: build a deck, create a presentation, generate slides, make a PPTX, executive summary deck, quarterly review slides.
---

# Deck Builder

Genera un `.pptx` a partir de una especificacion JSON. Las diapositivas heredan
fondos, logos, pie de pagina y tema directamente de la plantilla que se le pase,
asi que el resultado sale con la identidad de esa plantilla sin formatear nada a mano.

Este skill **no trae plantillas ni paletas de ninguna organizacion**. La plantilla
la aporta quien lo usa.

## Requisitos

```bash
pip install python-pptx
```

Y una plantilla `.pptx`. El script la resuelve en este orden:

1. El argumento `--template`
2. La variable de entorno `DECK_TEMPLATE_PATH`
3. La variable `CEMEX_TEMPLATE_PATH`, por compatibilidad con instalaciones previas
4. `template.pptx` junto al spec

```bash
export DECK_TEMPLATE_PATH="/ruta/a/plantilla.pptx"     # Linux, macOS
$env:DECK_TEMPLATE_PATH = "C:\ruta\a\plantilla.pptx"   # Windows PowerShell
```

## Procedimiento

1. **Reune el contenido.** Tema, audiencia, mensajes clave, datos duros. Si faltan
   datos, preguntalos antes de inventar cifras. Nunca rellenes numeros.
2. **Estructura el deck.** Portada, agenda, secciones con encabezado, laminas de
   contenido, cierre. Una idea por lamina.
3. **Escribe el spec JSON.** Ver `references/sample_spec.json` para la forma completa.
4. **Genera.**

```bash
python scripts/build_deck.py --spec deck_spec.json --template /ruta/plantilla.pptx
```

Con paleta propia:

```bash
python scripts/build_deck.py --spec deck_spec.json --template /ruta/plantilla.pptx --tokens mis_colores.json
```

5. **Revisa.** Abre el archivo y verifica que no haya texto desbordado, laminas
   vacias ni cifras sin fuente.

## Layouts

El builder no depende de indices fijos de layout. Para cada tipo logico mantiene
una lista de nombres candidatos y usa el primero que exista en la plantilla, de modo
que funciona con plantillas distintas. Tipos disponibles:

| Clave | Para que sirve |
| --- | --- |
| `cover` | Portada con titulo, descripcion, presentador y fecha |
| `agenda` | Lista de temas |
| `section_header` | Separador de seccion, numero mas titulo |
| `title_and_text` | Titulo, subtitulo y cuerpo |
| `two_column` | Dos columnas de texto |
| `content` | Lamina libre para tablas, graficas o imagenes |
| `closing` | Cierre |

Si la plantilla no trae ninguno de los nombres candidatos, el builder cae al layout
mas cercano en vez de fallar.

## Colores

Los valores por defecto son neutrales a proposito. Solo afectan series de graficas
y texto de enfasis: el resto de la identidad viene de la plantilla. Para usar la
paleta propia, copia `references/brand_tokens.example.json`, cambia los hex y pasalo
con `--tokens`. Las claves que omitas conservan su valor por defecto.

## Estilo al redactar las laminas

- **Titulos que afirman**, no que etiquetan. "Margen cae 3 pp por costo de flete"
  en vez de "Analisis de margen".
- **Maximo 6 bullets por lamina**, una linea cada uno.
- **Cifras con unidad y periodo.** "MXN 4.2 M, Q3 2026", nunca "4.2".
- **Toda cifra lleva fuente.** Si no la tienes, pidela; no la inventes.
- **Sin em dash ni en dash.** Usa coma, dos puntos o parentesis.

## Tablas y graficas

`scripts/build_deck.py` expone helpers para tablas, graficas de barras y lineas,
laminas de KPI e imagenes. Antes de dibujar una tabla, calcula el area util a
partir del tamano de diapositiva de la plantilla y reserva margen para encabezado
y pie: una tabla que se sale del area util es el error mas comun.

Si el numero de filas excede la capacidad de una lamina, divide en varias en vez
de reducir el tamano de fuente por debajo de lo legible.
