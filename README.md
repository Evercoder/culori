# Culori

<figure style='text-align: center'>
	<img src='./.github/man-rainbow.jpg' width='400'/>
	<figcaption style='font-size: 0.8em'>“Man before a rainbow” (ca. 1700) — <a href='https://www.rijksmuseum.nl/en/collection/RP-P-1896-A-19368-1803'>Rijksmuseum</a>, via <a href='https://publicdomainreview.org'>The Public Domain Review</a>.</figcaption>
</figure>

⚠ _Until __v1.0.0__ the API is a work-in-progress and will be changing quite a bit._

Culori is a general-purpose color library for JavaScript. It incorporates, and extends, ideas from Mike Bostock's [D3.js](https://github.com/d3) and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js).

__Color Spaces__. Culori supports all the formats defined in the [CSS Colors Level 4][css4-colors]: [Named colors][css4-named-colors], [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (3 to 8 digits), [RGB](https://drafts.csswg.org/css-color/#rgb-functions), [HSL](https://drafts.csswg.org/css-color/#the-hsl-notation), [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation), [Lab and LCh](https://drafts.csswg.org/css-color/#lab-colors), and [Grays](https://drafts.csswg.org/css-color/#grays). Additionally, the [Linear RGB](https://en.wikipedia.org/wiki/SRGB#The_sRGB_transfer_function_(%22gamma%22)), [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (also known as HSB), [HSI](https://en.wikipedia.org/wiki/HSL_and_HSV), and [Cubehelix](https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/) color spaces are supported.

__Color Differences__. Culori can compute [color differences](https://en.wikipedia.org/wiki/Color_difference) with either a simple Euclidean distance or the CIELAB Delta E* metric as formulated by CIE76, CIE94, CIEDE2000 and CMC l:c (1984). They're also available [as a D3 plugin](https://github.com/danburzo/d3-color-difference). It can also find the closest N colors from a set of colors based on any of these differences.

## Foreword

If you're thinking _Do we really need another JavaScript color library?_, I hear you. Reader, for the most part, we don't. Mike Bostock's [d3-color](https://github.com/d3/d3-color), and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js) are two robust libraries that provide most of what you need for working with colors on the web<sup>1</sup>. I'll admit Culori<sup>2</sup> is foremost a reflection of my own curiousity in understanding color spaces at a deeper level. But it also ended up a fairly fast, and fairly comprehensive, toolkit for manipulating colors — and with an implementation that has certain advantages.

The _alpha_ channel which governs a color's opacity is treated differently than in other libaries, in that we don't equate an _undefined_ alpha with an alpha of 1. The hex string <kbd>#ff0000</kbd> _should_ eventually be interpreted as a fully-opaque red color, but at the color-manipulation level we want to draw the distinction between <kbd>#ff0000</kbd> and <kbd>#ff0000ff</kbd>, which has an explicit alpha channel. 

When developing the API, I tried to balance brevity, convenience and flexibility. It ended up a more-or-less functional API, i.e. a collection of functions you can pipe data through. It's not as readable as a fluent API where you chain methods, but it's much more flexible, I think.

---

<sup>1</sup> Other popular libraries you may want to look at are [TinyColor](https://github.com/bgrins/TinyColor) by [Brian Grinstead](http://briangrinstead.com), [color](https://github.com/Qix-/color) by Heather Arthur, [color.js](https://github.com/brehaut/color-js) by Andrew Brehaut et al, and [chromatist](https://github.com/jrus/chromatist) by [Jacob Rus](http://www.hcs.harvard.edu/~jrus/).
<sup>2</sup> from the Romanian word for ‘colors’.

## Documentation

* [Getting Started with Culori](./docs/tutorial.md)
* [API Reference](./docs/api.md)
* [Culori Recipes](./docs/recipes.md)
* [Extending Culori](./docs/extending.md)
* [Benchmarks](./docs/benchmarks.md)
* [Further Reading](./docs/readings.md)

## About this project


Colophon | 
---- | -----
Author | [Dan Burzo](http://danburzo.ro)
License | [MIT](./LICENSE)
Inspired by | [d3-color](https://github.com/d3/d3-color), [d3-interpolate](https://github.com/d3/d3-interpolate), [chroma.js](https://github.com/gka/chroma.js)
Dependencies | none
Bundled with | [rollup](https://github.com/rollup/rollup), [buble](https://github.com/Rich-Harris/buble)
Tested with | [tape](https://github.com/substack/tape)


[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors