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

#### Basic formats

* CSS Named Colors
* Hex (3, 6, and 8)
* RGB
* HSL
* HSV

#### Tentatively

* CIELAB
* CIELCH
* CubeHelix

## API

### Top-level

#### `culori(color)`

Accepts a color in any supported format.

### `Color` API

#### `color.to(format)`

Returns the color in the format specified, with all values normalized to `[0, 1]`.

#### `color.nice(format)`

Returns the color in the format specified, with values expanded to a format amenable for use. For example, `color.nice('rgb')` will return integers `[0, 255]` for the R, G, and B values.

#### `color.css(format?)`

Returns a CSS representation of the color, in the (optionally-specified) format, or otherwise in a format most suitable. Accepted formats: `hex`, `hex8`, `rgb`, `hsl`.  It follows [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value).

### `color.toString()` 

Alias of `color.css()`.

## Prior art

* [chroma.js](https://github.com/gka/chroma.js)
* [d3-color](https://github.com/d3/d3-color)
* [TinyColor](https://github.com/bgrins/TinyColor)
