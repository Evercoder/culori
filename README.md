# Culori

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

## API Introduction

## API Reference

<a name='culori' href='#culori'>§</a> __culori__( _Specifier_ or _Color_ ) [<>](./src/culori.js "Source")

Just a convenience for [_culori_.__rgb__()](#culori-rgb).

```js
culori('tomato');
culori('rgb(255, 0, 0)');
culori({ r: 0.5, g: 0.1, b: 0.2 });
```

<a name='culori-parse' href='#culori-parse'>§</a> culori.__parse__( _Specifier_ ) → _Color_ [<>](./src/api/parse.js "Source")

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __RGB__ or __HSL__ object. 

If you'd like to always get a RGB representation regardless of the CSS format, use [__culori()__](#culori) instead.

__Note:__ If the color does not specify an explicit _alpha_ value, the `a` property of the __RGB__ object is marked as _undefined_. Other color libraries will put a default `a: 1` for these colors, but I found this assumption to be limiting. As such, we leave it to the user to place `a: 1` instead of `undefined` when appropriate for their needs.

The individual parsers are exposed in the _culori_.__parse__ namespace:

* culori.parse.__number__( _Specifier_ ) [<>](./src/parsers/number.js "Source")
* culori.parse.__named__( _Specifier_ ) [<>](./src/parsers/named.js "Source")
* culori.parse.__hex__( _Specifier_ ) [<>](./src/parsers/hex.js "Source")
* culori.parse.__rgb__( _Specifier_ ) [<>](./src/parsers/rgb.js "Source")
* culori.parse.__hsl__( _Specifier_ ) [<>](./src/parsers/hsl.js "Source")

<a name='culori-convert' href='#culori-convert'>§</a> culori.__convert__( _Specifier_ or _Color_ ) [<>](./src/api/convert.js "Source")

### HSL

<a name='culori-hsl' href='#culori-hsl'>§</a> culori.__hsl__( _Specifier_ or _HSL_ or _RGB_ or _Object_) → _HSL_ [<>](./src/api/hsl.js "Source")

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __HSL__ object.

When passed a culori object:

* if it's a __HSL__ object, it just returns it back
* it it's a __RGB__ object, it converts it to a __HSL__ object.

When passed a plain object, it assumes it's a normalized __HSL__ object.

### HSV

<a name='culori-hsv' href='#culori-hsv'>§</a> culori.__hsv__( _Specifier_ or _HSL_ or _RGB_ or _Object_) → _HSV_ [<>](./src/api/hsv.js "Source")

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __HSV__ object. 

When passed a culori object:

* if it's a __HSV__ object, it just returns it back
* it it's a __RGB__ object, it converts it to a __HSV__ object.

When passed a plain object, it assumes it's a normalized __HSV__ object.

### HSI

<a name='culori-hsi' href='#culori-hsi'>§</a> culori.__hsi__( _Specifier_ or _HSI_ or _RGB_ or _Object_) → _HSI_ [<>](./src/api/hsi.js "Source")

Accepts a color in any [CSS Colors Level 4][css4-colors] format and returns the corresponding __HSI__ object. 

When passed a culori object:

* if it's a __HSI__ object, it just returns it back
* it it's a __RGB__ object, it converts it to a __HSI__ object.

When passed a plain object, it assumes it's a normalized __HSI__ object.

### Color sets

<a name='culori-named' href='#culori-named'>§</a> culori.__named__ [<>](./src/colors/named.js "Source")

Contains the set of [CSS Named Colors][css4-named-colors].

<a name='culori-brewer' href='#culori-brewer'>§</a> culori.__brewer__

ColorBrewer (coming soon).

### Utilities

<a name='culori-round' href='#culori-round'>§</a> culori.__round__( _value_ | _object_ [, _precision_ = 4 ] ) [<>](./src/api/round.js "Source")

Rounds the value, or each property in an object, to a certain number of decimal places. This is useful in a couple of situations:

* When creating the CSS representation of the value;
* To deal with floating-point errors that occur when converting between color formats.

<a name='culori-prepare' href='#culori-prepare'>§</a> culori.__prepare__( _Specifier_ or _Color_ ) [<>](./src/api/prepare.js "Source")

### Definitions

_Specifier_. is a color in any parsable format. It is normally a string, but numbers (e.g. `0xFFF`) are also accepted.

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