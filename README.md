# Culori

⚠ _Until the first stable release (1.0.0) the API is considered unstable and will be changing quite a bit. Use cautiously!_

Culori is a general-purpose color library for JavaScript. It incorporates, and extends, ideas from Mike Bostock's [D3.js](https://github.com/d3) and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js).

__Color Spaces__. Culori supports all the formats defined in the [CSS Colors Level 4][css4-colors]: [Named colors][css4-named-colors], [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (3 to 8 digits), [RGB](https://drafts.csswg.org/css-color/#rgb-functions), [HSL](https://drafts.csswg.org/css-color/#the-hsl-notation), [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation), [Lab and LCh](https://drafts.csswg.org/css-color/#lab-colors), and [Grays](https://drafts.csswg.org/css-color/#grays). Additionally, the [Linear RGB](https://en.wikipedia.org/wiki/SRGB#The_sRGB_transfer_function_(%22gamma%22)), [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (also known as HSB), [HSI](https://en.wikipedia.org/wiki/HSL_and_HSV), and [Cubehelix](https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/) color spaces are supported.

__Color Differences__. Culori can compute [color differences](https://en.wikipedia.org/wiki/Color_difference) with either a simple Euclidean distance or the CIELAB Delta E* metric as formulated by CIE76, CIE94, CIEDE2000 and CMC l:c (1984). They're also available [as a D3 plugin](https://github.com/evercoder/d3-color-difference). It can also find the closest N colors from a set of colors based on any of these differences.

## Foreword

If you're thinking _Do we really need another JavaScript color library?_, I hear you. Reader, for the most part, we don't. Mike Bostock's [d3-color](https://github.com/d3/d3-color), and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js) are two robust libraries that provide most of what you need for working with colors on the web<sup>1</sup>. I'll admit culori<sup>2</sup> is foremost a reflection of my own curiousity in understanding color spaces at a deeper level. But it also ended up a fairly fast, and fairly comprehensive, toolkit for manipulating colors — and with an implementation that has certain advantages.

The _alpha_ channel which governs a color's opacity is treated differently than in other libaries, in that we don't equate an _undefined_ alpha with an alpha of 1. The hex string <kbd>#ff0000</kbd> _should_ eventually be interpreted as a fully-opaque red color, but at the color-manipulation level we want to draw the distinction between <kbd>#ff0000</kbd> and <kbd>#ff0000ff</kbd>, which has an explicit alpha channel. 

When developing the API, I tried to balance brevity, convenience and flexibility. It ended up a more-or-less functional API, i.e. a collection of functions you can pipe data through. It's not as readable as a fluent API where you chain methods, but it's much more flexible, I think.

---

<sup>1</sup> Other popular libraries you may want to look at are [TinyColor](https://github.com/bgrins/TinyColor) by [Brian Grinstead](http://briangrinstead.com), [color](https://github.com/Qix-/color) by Heather Arthur, [color.js](https://github.com/brehaut/color-js) by Andrew Brehaut et al, and [chromatist](https://github.com/jrus/chromatist) by [Jacob Rus](http://www.hcs.harvard.edu/~jrus/).

<sup>2</sup> from the Romanian word for ‘colors’.

## Getting Started

### Try it online

You can use [npm.runkit.com/culori](https://npm.runkit.com/culori) as a playground to test various methods in from the API without installing culori in your project.


### Install as NPM package

```bash
npm install culori
```

You can either `require` or `import` culori in your project:

```js
// either
var culori = require('culori');

// or
import { rgb } from 'culori';
```

### Add culori via the `<script>` tag

To import culori as a `<script>` tag to use in a web page, load it from [unpkg](https://unpkg.com):

* https://unpkg.com/culori/build/culori.js
* https://unpkg.com/culori/build/culori.min.js

If you prefer not to use a Content Delivery Network such as unpkg, just save the one of the JS files linked above to your project.

## See also

These libraries add more functionality to culori:

* [culori-scales](https://github.com/evercoder/culori-scales) — color scales (ColorBrewer, matplotlib, etc.)
* [culori-names](https://github.com/evercoder/culori-names) — more color names

## Further reading

* [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) on Wikipedia
* [CSS Color Module Level 4][css4-colors]
* [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value)

## Colophon

* _Author_ [Dan Burzo](http://danburzo.ro)
* _License_ [MIT](./LICENSE)
* _Inspired by_ [d3-color](https://github.com/d3/d3-color), [d3-interpolate](https://github.com/d3/d3-interpolate), [chroma.js](https://github.com/gka/chroma.js)
* _Dependencies_ none
* _Bundled with_ [rollup](https://github.com/rollup/rollup), [buble](https://github.com/Rich-Harris/buble)
* _Tested with_ [tape](https://github.com/substack/tape)


[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors

[CIE76]: https://en.wikipedia.org/wiki/Color_difference#CIE76
[CIE94]: https://en.wikipedia.org/wiki/Color_difference#CIE94
[CIEDE2000]: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
[CMC]: https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
[DIN99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
[DIN99oDE]: https://de.wikipedia.org/wiki/DIN99-Farbraum#Farbabstandsformel