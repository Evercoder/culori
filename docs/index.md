---
layout: layouts/default
---

Culori is a color library for JavaScript that works across many color spaces to offer conversion, interpolation, color difference formulas, and blending functions.

## What can it do?

Culori supports most color spaces and formats defined in the [CSS Colors Level 4][css4-colors] spec: [Named colors][css4-named-colors], [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (with 3 to 8 digits), [RGB](https://drafts.csswg.org/css-color/#rgb-functions), [HSL](https://drafts.csswg.org/css-color/#the-hsl-notation), [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation), [Lab and LCh](https://drafts.csswg.org/css-color/#lab-colors). On top of that, it handles [Linear RGB](<https://en.wikipedia.org/wiki/SRGB#The_sRGB_transfer_function_(%22gamma%22)>), [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (also known as HSB), [HSI](https://en.wikipedia.org/wiki/HSL_and_HSV), [Cubehelix](https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/), [DIN99o][din99o], and [YIQ][yiq].

You can compute [color differences](https://en.wikipedia.org/wiki/Color_difference) based on a variety of formulas: simple Euclidean distance, CIELAB Delta E\*, and Kotsarenko/Ramos distance.

It also handles interpolation, gradients, blend modes [and more](./api).

## Raison d’être

If you're thinking _Do we really need another JavaScript color library?_, I hear you. Reader, for the most part, we don't.

Mike Bostock's [d3-color](https://github.com/d3/d3-color), and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js) are two excellent, robust libraries that provide most of what you need for working with colors on the web. See the [Other Projects](./resources) section for even more libraries you can try.

Culori — from the Romanian word for ‘colors’ — started with a curiosity in understanding color spaces at a deeper level, maths and all; by the time I ascended back from the rabbit-hole, I had what I thought is a fairly fast, comprehensive, set of tools for working with color, and an implementation that has certain advantages.

The API tries to balance brevity, convenience and flexibility. It's in a functional style, with colors as plain objects you pipe through a series of functions. A [fluent API](https://en.wikipedia.org/wiki/Fluent_interface) may be aesthetically pleasing, but plain objects instead of classes makes the library nimble and extensible.

**Burried lede.** On the `alpha` channel, the library doesn't equate an `undefined` value with an opaque color, but rather with a color for which we don't care about the opacity. This gives you the opportunity to interpret `undefined` as you see fit. The hex string <kbd>#ff0000</kbd> _should_ probably be rendered as fully opaque red, but for running functions on colors it's useful to discern <kbd>#ff0000</kbd> from <kbd>#ff0000ff</kbd> — the former has an implicit alpha of 1, while for the latter it's explicit.

## Colophon

-   _Author_ [Dan Burzo](http://danburzo.ro)
-   _License_ [MIT](./LICENSE)
-   _Dependencies_ none
-   _Bundled with_ [rollup](https://github.com/rollup/rollup), [buble](https://github.com/Rich-Harris/buble), [terser](https://github.com/terser-js/terser)
-   _Tested with_ [tape](https://github.com/substack/tape)
-   _Formatted with_ [prettier](https://prettier.io)

Culori is inspired by Mike Bostock's [D3.js](https://github.com/d3) and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js). D3, in particular, is a treasure-trove of ideas and academic references.

[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors
[din99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
[yiq]: https://en.wikipedia.org/wiki/YIQ
