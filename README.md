# culori

Culori is a general-purpose color library for JavaScript.

## Use cases

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

* ✓ [Named colors][css4-named-colors]
* ✓ [Hex colors](https://drafts.csswg.org/css-color/#hex-notation) (with 3, 4, 6, or 8 digits)
* ✓ [RGB and RGBA](https://drafts.csswg.org/css-color/#rgb-functions)
* ✓ [HSL and HSLA](https://drafts.csswg.org/css-color/#the-hsl-notation)
* [HWB](https://drafts.csswg.org/css-color/#the-hwb-notation)
* [LAB and LCH](https://drafts.csswg.org/css-color/#lab-colors)

Additionally, it supports:

* ✓ HSV (also called HSB)
* ✓ HSI
* (Hopefully) CubeHelix

The implementations I've already finished ar denoted by checkmarks (✓).

## API

§ __culori__( _Color_ or _RGB_ )

Just a convenience for _culori_.__parse__().

§ culori.__parse__( _Color_ ) → _RGB_

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __RGB__ object. 

__Note:__ If the color does not specify an explicit _alpha_ value, the `a` property of the __RGB__ object is marked as _undefined_. Other color libraries will put a default `a: 1` for these colors, but I found this assumption to be limiting. As such, we leave it to the user to place `a: 1` instead of `undefined` when appropriate for their needs.

The individual parsers are exposed in the _culori_.__parse__ namespace:

* culori.parse.__number__( _Color_ )
* culori.parse.__named__( _Color_ )
* culori.parse.__hex__( _Color_ )
* culori.parse.__rgb__( _Color_ )
* culori.parse.__hsl__( _Color_ )

### HSL

§ culori.__hsl__( _Color_ or _RGB_ ) → _HSL_

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __HSL__ object. 

§ culori.__to_hsl__( _RGB_ ) → _HSL_

Converts a __RGB__ object to a __HSL__ object.

§ culori.__from_hsl__( _HSL_ ) → _RGB_

Converts a __HSL__ object to a __RGB__ object.

### HSV 

§ culori.__hsv__( _Color_ or _RGB_ ) → _HSV_

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __HSV__ object. 

§ culori.__to_hsv__( _RGB_ ) → _HSV_

Converts a __RGB__ object to a __HSV__ object.

§ culori.__from_hsv__( _HSV_ ) → _RGB_

Converts a __HSV__ object to a __RGB__ object.

### HSI

§ culori.__hsi__( _Color_ or _RGB_) → _HSI_

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __HSI__ object. 

§ culori.__to_hsi__( _RGB_ ) → _HSI_

Converts a __RGB__ object to a __HSI__ object.

§ culori.__from_hsi__( _HSI_ ) → _RGB_

Converts a __HSI__ object to a __RGB__ object.

### Color sets

§ culori.__colors__ 

Is the namespace for the various color sets included in the library:

* culori.colors.__named__ contains the set of [CSS Named Colors][css4-named-colors]
* culori.colors.__brewer__ (soon)

### Miscellaneous

§ culori.__isRGBObject__( _object_ ) → _true_ / _false_

Checks whether an object is a __RGB__ object.

§ culori.__round__( _value_ | _object_ [, _precision_ = 4 ] )

Rounds the value, or each property in an object, to a certain number of decimal places. This is useful in a couple of situations:

* When creating the CSS representation of the value;
* To deal with floating-point errors that occur when converting between color formats.

### Definitions

__Color__ is a color in any parsable format. It is normally a string, but numbers (e.g. `0xFFF`) are also accepted.

__RGB__ is any plain object containing the `r`, `g`, `b`, and optionally `a`, properties with all values normalized to the interval `[0..1]`.

__HSL__ is any plain object containing the `h`, `s`, `l`, and optionally `a`, properties with the values for `s`, `l`, and `a`, normalized to the interval `[0..1]`.

__HSV__ is any plain object containing the `h`, `s`, `v`, and optionally `a`, properties with the values for `s`, `v`, and `a`, normalized to the interval `[0..1]`.

__HSI__ is any plain object containing the `h`, `s`, `i`, and optionally `a`, properties with the values for `s`, `i`, and `a`, normalized to the interval `[0..1]`.

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


[css4-colors]: https://drafts.csswg.org/css-color/
[css4-named-colors]: https://drafts.csswg.org/css-color/#named-colors