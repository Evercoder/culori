---
layout: default.njk
title: Resources
---

## Culori extras

These projects add more functionality to Culori, but they're separate as to keep the core bundle small:

-   [culori-scales](https://github.com/evercoder/culori-scales) — color scales (ColorBrewer, matplotlib, etc).
-   [culori-names](https://github.com/evercoder/culori-names) — More named colors, from a variety of sources.
-   [d3-color-difference](https://github.com/evercoder/d3-color-difference) — a separate D3.js plugin to compute color differences

## Products using Culori

-   [Moqups](https://moqups.com) — all our color-manipulation functions are handled by Culori.
-   [Schemist](https://github.com/felixgirault/schemist) — color schemes builder backed by Culori.
-   [Color Name API](https://github.com/meodai/color-name-api) — a REST API for color names that makes use Culori's [differenceCiede2000](https://culorijs.org/api/#differenceCiede2000) to return a fitting name for every color.
-   [Atmos](https://atmos.style) - a toolbox based on (OK)LCH color space for creating professional color palettes. Utilizing Culori for color manipulation allowed us to concentrate on our product's essence rather than getting bogged down in implementation details.
-   [huetiful-js](https://github.com/prjctimg/huetiful) - Open source Typescript library for manipulating color and generating custom color scales based on Culori. With utilities for sorting, filtering and querying collections of colors, this library opens new ways of working with color programmatically.
-   [oklch.com/](https://oklch.com/) - OKLCH picker with pretty plotting

_Does your product/project use Culori? Create a PR and add yourself to this list._

## Similar projects

-   [d3-color](https://github.com/d3/d3-color) by [Mike Bostock](https://bost.ocks.org/mike/) (JavaScript)
-   [chroma.js](https://github.com/gka/chroma.js) by [Gregor Aisch](https://driven-by-data.net/) (JavaScript)
-   [colorjs.io](https://github.com/LeaVerou/color.js) by [Lea Verou](http://lea.verou.me/) and [Chris Lilley](https://svgees.us/) (JavaScript)
-   [@texel/color](https://github.com/texel-org/color/) by [Matt DesLauriers](https://www.mattdesl.com/) (JavaScript)
-   [Colour](https://www.colour-science.org/) (Python)
- [ColorAide](https://github.com/facelessuser/coloraide) by Isaac Muse (Python)
-   [colorio](https://github.com/nschloe/colorio) by Nico Schlömer (Python)
-   [`colorspace` package](http://colorspace.r-forge.r-project.org/) (R)
-   [`Colors` package](https://github.com/JuliaGraphics/Colors.jl) (Julia)
- [`linebender/color`](https://github.com/linebender/color) by Raph Levien & collaborators (Rust)

## Further reading

### Specifications

- [CSS Color Module Level 4](https://drafts.csswg.org/css-color-4/) [[changelog](https://github.com/w3c/csswg-drafts/commits/main/css-color-4), [issues](https://github.com/w3c/csswg-drafts/issues?q=is%3Aissue+is%3Aopen+label%3Acss-color-4)]
- [CSS Color Module Level 5](https://drafts.csswg.org/css-color-5/) [[changelog](https://github.com/w3c/csswg-drafts/commits/main/css-color-5), [issues](https://github.com/w3c/csswg-drafts/issues?q=is%3Aissue+is%3Aopen+label%3Acss-color-5)]
- [CSS Color HDR Module Level 1](https://drafts.csswg.org/css-color-hdr/) [[changelog](https://github.com/w3c/csswg-drafts/commits/main/css-color-hdr), [issues](https://github.com/w3c/csswg-drafts/issues?q=is%3Aissue+is%3Aopen+label%3Acss-color-hdr)]

### Websites

-   David Briggs’s [The Dimensions of Color](http://www.huevaluechroma.com/)
-   Bruce Lindbloom’s [Useful Color Math](http://www.brucelindbloom.com/index.html?Math.html)
-   Rune Madsen’s [Programming Design Systems](https://programmingdesignsystems.com/)

### Articles

-   [Color: From Hexcodes to Eyeballs](http://jamie-wong.com/post/color/) by Jamie Wong
-   [Okay, color spaces](https://ericportis.com/posts/2024/okay-color-spaces/) by Eric Portis
-   [How to generate color palettes for design systems](https://matthewstrom.com/writing/generating-color-palettes/) by Matthew Ström

### Books

-   [Fairchild, Mark D.](http://markfairchild.org/) — [_Color Appearance Models_](https://www.wiley.com/en-us/Color+Appearance+Models%2C+3rd+Edition-p-9781119967033), 3rd Edition, Wiley, 2013.
- Green, Phil (ed.) — [_Fundamentals and Applications of Colour Engineering_](https://onlinelibrary.wiley.com/doi/book/10.1002/9781119827214), Wiley, 2023.
- Morovič, Ján — [_Color Gamut Mapping_](https://www.wiley.com/en-ie/Color+Gamut+Mapping-p-9780470030325), Wiley, 2008.
-   [Poynton, Charles](http://poynton.ca/) — [_Digital Video and HD Algorithms and Interfaces_](https://www.elsevier.com/books/digital-video-and-hd/poynton/978-0-12-391926-7), 2nd Edition, Morgan Kaufmann, 2012.
