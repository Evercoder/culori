# Culori

![Man before a rainbow, in Christoph Weigel’s Ethica Naturalis seu Documenta Moralia e Variis rerum Naturalium proprietatibus Virtutum Vitiorumq symbolicis imaginibus collecta (ca. 1700)](./.github/man-rainbow.png)

<small>“Man before a rainbow”, in Christoph Weigel’s _Ethica Naturalis seu Documenta Moralia e Variis rerum Naturalium proprietatibus Virtutum Vitiorumq symbolicis imaginibus collecta_ (ca. 1700). [Rijksmuseum](https://www.rijksmuseum.nl/en/collection/RP-P-1896-A-19368-1803), via [The Public Domain Review](publicdomainreview.org).</small>

Culori is a general-purpose color library for JavaScript. It incorporates, and extends, ideas from Mike Bostock's [D3.js](https://github.com/d3) and Gregor Aisch's [chroma.js](https://github.com/gka/chroma.js).

_(⚠ Until I realease __v1.0.0__ you can assume the API will be changing quite a bit, until I find an adequate expression.)_

### Color Spaces

Culori supports all the formats defined in the [CSS Colors Level 4][css4-colors]: [Named colors][css4-named-colors], [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (3 to 8 digits), [RGB](https://drafts.csswg.org/css-color/#rgb-functions), [HSL](https://drafts.csswg.org/css-color/#the-hsl-notation), [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation), [Lab and LCh](https://drafts.csswg.org/css-color/#lab-colors), and [Grays](https://drafts.csswg.org/css-color/#grays). Additionally, the [Linear RGB](https://en.wikipedia.org/wiki/SRGB#The_sRGB_transfer_function_(%22gamma%22)), [HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) (also known as HSB), [HSI](https://en.wikipedia.org/wiki/HSL_and_HSV), and [Cubehelix](https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/) color spaces are supported.

### Color Differences

Culori can compute [color differences](https://en.wikipedia.org/wiki/Color_difference) with either a simple Euclidean distance or the CIELAB Delta E* metric as formulated by CIE76, CIE94, CIEDE2000 and CMC l:c (1984). They're also available [as a D3 plugin](https://github.com/danburzo/d3-color-difference).

It can also find the closest N colors from a set of colors based on any of these differences.

## Documentation

* [Getting Started with Culori](./docs/tutorial.md)
* [Culori Recipes](./docs/recipes.md)
* [Extending Culori](./docs/extending.md)
* [API Reference](./docs/api.md)
* [Benchmarks](./docs/benchmarks.md)
* [Further Reading](./docs/readings.md)

## About the project

Culori is written by [Dan Burzo](http://danburzo.ro) and is released under the [MIT License](./LICENSE).

It builds upon the ideas of two thoroughly documented and time-tested projects: [d3-color](https://github.com/d3/d3-color) and [d3-interpolate](https://github.com/d3/d3-interpolate) by [Mike Bostock](https://bost.ocks.org/mike/), and [chroma.js](https://github.com/gka/chroma.js) by [Gregor Aisch](https://driven-by-data.net/). 

You may also want to look at [TinyColor](https://github.com/bgrins/TinyColor) by [Brian Grinstead](http://briangrinstead.com), [color](https://github.com/Qix-/color) by [Heather Arthur](https://github.com/Qix-/), and [color.js](https://github.com/brehaut/color-js) by Andrew Brehaut et al.


[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors