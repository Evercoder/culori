# culori

Culori is a general-purpose color library for JavaScript.

## Use cases

* Converting from, and to, a variety of formats
* Recreating classic color schemes
* Working with color schemes (interpolation between colors)

## Goals

* Make it useful as a basis for color pickers.

__The problem of alpha__. Internally we should keep alpha as undefined whenever possible (avoid making alpha 1 by default). 

## Supported formats

The library supports all the color formats defined in the [CSS Colors Level 4](https://drafts.csswg.org/css-color/):

* [Named colors](https://drafts.csswg.org/css-color/#named-colors)
* [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (with 3, 4, 6, or 8 digits)
* [RGB and RGBA](https://drafts.csswg.org/css-color/#rgb-functions)
* [HSL and HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation)
* [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation)
* [LAB and LCH](https://drafts.csswg.org/css-color/#lab-colors)

Additionally, it supports:

* HSV
* (Hopefully) CubeHelix


## API

### Top-level

#### `culori(color)`

Accepts a color in any supported format and returns a `Color` instance.

#### `culori.scale([ colors ])`

Accepts an array of colors and returns a `Scale` instance.

### `Color` API

#### `color.to(format)`

Returns the color in the format specified, with all values normalized to `[0, 1]`.

#### `color.nice(format)`

Returns the color in the format specified, with values expanded to a format amenable for use. For example, `color.nice('rgb')` will return integers `[0, 255]` for the R, G, and B values.

#### `color.css(format?)`

Returns a CSS representation of the color, in the (optionally-specified) format, or otherwise in a format most suitable. Accepted formats: `hex`, `hex8`, `rgb`, `hsl`.  It follows [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value).

#### `color.toString()` 

### `Scale` API

TODO

Alias of `color.css()`.

## Prior art

* [chroma.js](https://github.com/gka/chroma.js)
* [d3-color](https://github.com/d3/d3-color)
* [TinyColor](https://github.com/bgrins/TinyColor)

## Benchmarks

`colori` stacks well against its peers: [benchmarks](./test/benchmarks/README.md).