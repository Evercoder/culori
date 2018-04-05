# Culori

Culori is a general-purpose color library for JavaScript.

## Why I built this

There are already [several excellent libraries](#about-the-project) out there for manipulating colors in JavaScript.

This library aims to provide a simple API to:

__Convert between a variety of color formats__.

__Build a color picker for a particular format__. Let's take the ubiquitous HSV color picker; the library should allow me to:

* map the user interface for the `h`, `s`, `v` values to a color that I can then convert to any other format
* for a color in any format the user can input (these will usually be the [CSS Colors Level 4][css4-colors]), obtain the representation in __HSV__ space, so the interface can be updated accordingly

Of particular interest is deciding when to apply the _alpha_ channel to the interface (i.e. to an opacity slider). If the interface contains color swatches, I should decide whether to use the _alpha_ channel or not:

* if the user inputs `#ffffff` I might only use the `h`, `s` and `v` value;
* if the user inputs `#ffffff00` I might also want to apply the `a: 0` value.

__Create color schemes based on a base color__.

__Obtain color scales to use in data visualization__.

## Supported formats

The library supports all the color formats defined in the [CSS Colors Level 4][css4-colors]:

* [Named colors][css4-named-colors]
* [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (with 3, 4, 6, or 8 digits)
* [RGB and RGBA](https://drafts.csswg.org/css-color/#rgb-functions)
* [HSL and HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation)
* [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation)
* [LAB and LCH](https://drafts.csswg.org/css-color/#lab-colors)
* [Grays](https://drafts.csswg.org/css-color/#grays)

Additionally, it supports:

* HSV (also called HSB)
* HSI
* CubeHelix (soon)

## Documentation

* [Getting Started with Culori](./docs/tutorial.md)
* [Culori Recipes](./docs/recipes.md)
* [Extending Culori](./docs/extending.md)
* [API Reference](./docs/api.md)
* [Benchmarks](./docs/benchmarks.md)
* [Further Reading](./docs/readings.md)

## About the project

Culori is written by [Dan Burzo](http://danburzo.ro) and is released under the [MIT License](./LICENSE).

It builds upon the ideas of two thoroughly documented and time-tested projects: [chroma.js](https://github.com/gka/chroma.js) by [Gregor Aisch](https://driven-by-data.net/) and [d3-color](https://github.com/d3/d3-color) by [Mike Bostock](https://bost.ocks.org/mike/). 

You may also want to look at [TinyColor](https://github.com/bgrins/TinyColor) by [Brian Grinstead](http://briangrinstead.com), [color](https://github.com/Qix-/color) by [Heather Arthur](https://github.com/Qix-/), and [color.js](https://github.com/brehaut/color-js) by Andrew Brehaut et al.


[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors