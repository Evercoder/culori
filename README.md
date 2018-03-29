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

* ✓ [Named colors](https://drafts.csswg.org/css-color/#named-colors)
* ✓ [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (with 3, 4, 6, or 8 digits)
* ✓ [RGB and RGBA](https://drafts.csswg.org/css-color/#rgb-functions)
* ✓ [HSL and HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation)
* [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation)
* [LAB and LCH](https://drafts.csswg.org/css-color/#lab-colors)

Additionally, it supports:

* ✓ HSV
* ✓ HSI
* (Hopefully) CubeHelix

The implementations I've already finished ar denoted by checkmarks (✓).

## API

§ __culori__( _RGBA_ or _Color_ )

Shortcut to _culori_.__rgb__().

§ culori.__parse__( _Color_ )

§ culori.__rgb__( _RGBA_ or _Color_ )

### HSL

§ culori.__hsl__( _RGBA_ or _Color_ ) → _HSLA_

Takes a color in any format

§ culori.__to_hsl__( _RGBA_ ) → _HSLA_

§ culori.__from_hsl__( _HSLA_ ) → _RGBA_

### HSV 

§ culori.__hsv__( _RGBA_ or _Color_ ) → _HSVA_

§ culori.__to_hsv__( _RGBA_ ) → _HSVA_

§ culori.__from_hsv__( _HSVA_ ) → _RGBA_

### HSI

§ culori.__hsi__( _RGBA_ or _Color_ ) → _HSIA_

§ culori.__to_hsi__( _RGBA_ or _Color_ ) → _HSIA_

§ culori.__from_hsi__( _HSIA_ ) → _RGBA_

### Miscellaneous

§ culori.__isRGBObject__( _object_ ) → _true_ / _false_

§ culori.__round__( _value_ | _object_ )

### Definitions

__Color__ is a color in any parsable format. It is normally a string, but numbers (e.g. `0xFFF`) are also accepted.

__RGBA__ is any plain object containing the `r`, `g`, `b`, and optionally `a`, properties with all values normalized to the interval `[0..1]`.

__HSLA__ is any plain object containing the `h`, `s`, `l`, and optionally `a`, properties with the values for `s`, `l`, and `a`, normalized to the interval `[0..1]`.

__HSVA__ is any plain object containing the `h`, `s`, `v`, and optionally `a`, properties with the values for `s`, `v`, and `a`, normalized to the interval `[0..1]`.

__HSIA__ is any plain object containing the `h`, `s`, `i`, and optionally `a`, properties with the values for `s`, `i`, and `a`, normalized to the interval `[0..1]`.

## Prior art

This library is indebted to these projects:

* [chroma.js](https://github.com/gka/chroma.js)
* [d3-color](https://github.com/d3/d3-color)
* [TinyColor](https://github.com/bgrins/TinyColor)

## Benchmarks

`colori` stacks well against its peers: [benchmarks](./test/benchmarks/README.md).

## Further reading

* [HSL and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) on Wikipedia
* [CSS Color Module Level 4](https://drafts.csswg.org/css-color/)
* [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value)