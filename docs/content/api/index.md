---
title: API Reference
---

* [Color representation](#color-representation)
* [A note on the API](#a-note-on-the-api)
* [Basics methods](#basic-methods)
* [Interpolation](#interpolation)
* [Difference](#difference)

## Color representation

Culori does not have a _Color_ class. Instead, it uses plain objects to represent colors:

```js
// A color in the RGB space
{
  mode: 'rgb',
  r: 0.1,
  g: 0.2,
  b: 1,
  alpha: 1
}
```

The object needs to have a `mode` property that identifies the color space, and values for each channel in that particular color space. See the [Color Spaces](#color-spaces) section for the channels expected of each color space. Optionally, the `alpha` property is used for the color's alpha channel.

## Basic methods

<a name="culoriParse" href="#culoriParse">#</a> culori.__parse__(_string_) → _color_ or _undefined_ [<>](https://github.com/evercoder/culori/blob/master/src/parse.js "Source")

Parses a string and returns the corresponding _color_. The color will be in the matching color space, e.g. RGB for hex strings, HSL for `hsl(…, …, …)` strings, et cetera. If no built-in parsers can match the string, the function will return _undefined_.

```js
// named colors
culori.parse('red'); // ⇒ { r: 1, g: 0, b: 0, mode: 'rgb' }

// hex strings
culori.parse('#ff0000'); // ⇒ { r: 1, g: 0, b: 0, mode: 'rgb' }

// HSL color
culori.parse('hsl(60 50% 10% / 100%)'); // ⇒ { h: 60, s: 0.5, b: 0.1, alpha: 1, mode: 'hsl' }

// Lab color
culori.parse('lab(100 -50 50)'); // ⇒ { l: 100, a: -50, b: 50, mode: 'lab' }
```

<a name="culoriConverter" href="#culoriConverter">#</a> culori.__converter__(_mode = "rgb"_) → _function (color or String)_ [<>](https://github.com/evercoder/culori/blob/master/src/converter.js "Source")

Returns a function that can then convert any color to the _mode_ color space:

```js
var rgb = culori.converter('rgb');

rgb('#f0f0f0'); // ⇒ { "mode": "rgb", "r": 0.4980392156862745, "g": 0.4980392156862745, "b": 0.4980392156862745 }
```

Converters accept either strings (which will be parsed with `culori.parse`) or color objects. If the `mode` key is absent from the color, it's assumed to be in the converter's color space.

The available modes (color spaces) are listed below. Each color space has a convenience method for converting to that color space.

Mode | For | Shortcut
---- | --- | --------
`rgb` | RGB color space | __culori__( _color_ )  and culori.__rgb__( _color_ )
`hsl` | HSL color space | culori.__hsl__(_color_) 
`hsv` | HSV color space | culori.__hsv__(_color_)
`hsi` | HSI color space | culori.__hsi__(_color_)
`hwb` | HWB color space | culori.__hwb__(_color_)
`lab` | Lab color space | culori.__lab__(_color_) 
`lch` | LCh color space | culori.__lch__(_color_)
`lrgb`| Linearized RGB color space | culori.__lrgb__(_color_)
`cubehelix` | Cubehelix color space | culori.__cubehelix__(_color_)
`dlab` | DIN99o Lab color space | culori.__dlab__(_color_)
`dlch` | DIN99o LCh color space | culori.__dlch__(_color_)

<a name="culoriFormatter" href="#culoriFormatter">#</a> culori.__formatter__(_format = 'rgb'_) → _function (color)_ [<>](https://github.com/evercoder/culori/blob/master/src/formatter.js "Source")

Returns a formatter function that can transform colors to useful string representations. 

```js
let hex = culori.formatter('hex');

hex('red'); // ⇒ "#ff0000"
```

Available formats:

Format | Description
------ | -----------
`hex` | Returns the hex string for a color
`rgb` | Returns the `rgb(…)` / `rgba(…)` string for a color

<a name="culoriDisplayable" href="#culoriDisplayable">#</a> culori.__displayable__(_color_ or _String_) [<>](https://github.com/evercoder/culori/blob/master/src/displayable.js "Source")

For some color spaces — particularly Lab and LCh — not all colors that can be expressed can be displayed on-screen. This function lets you check whether a particular color fits inside the sRGB gamut, i.e. that its `r`, `g`, and `b` channels are in the interval `[0, 1]`.

```js
culori.displayable('red'); // ⇒ true
culori.displayable('rgb(300 255 255)'); // ⇒ false
```

<a name="culoriClamp" href="#culoriClamp">#</a> culori.__clamp__(_method = 'rgb'_) → _function (color)_ [<>](https://github.com/evercoder/culori/blob/master/src/clamp.js "Source")

Returns a function which you can then use to retreive a representation of any color that's displayable on the screen, i.e. fits within the sRGB gamut. There are two available methods:

* `method = 'rgb'` clamps the `r`, `g`, `b` channel values of the color's RGB representation to the interval `[0, 1]`;
* `method = 'lch'` converts the color to the LCh space and finds the largest Chroma channel value that's displayable for the given Lightness and Hue; if not even the achromatic version (Chroma = 0) of the LCh color is displayable, it falls back to the `rgb` method.

```js
culori.clamp('lch')('lch(50 120 5)'); // ⇒ { mode: 'lch', l: 50, c: 77.48291015625, h: 5 }
```

<a name="culoriRound" href="#culoriRound">#</a> culori.__round__(_n = 8_) [<>](https://github.com/evercoder/culori/blob/master/src/round.js "Source")

A (rather miscellaneous) utility that returns a function with which to round numbers to at most _n_ digits of precision.

```js
let approximate = culori.round(4);

approximate(0.38393993); // => 0.3839
```

## Interpolation

<a name="culoriInterpolate" href="#culoriInterpolate">#</a> culori.__interpolate__(_colors_, _mode = "rgb"_) [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolate.js "Source")

Returns an interpolator between an array of colors in the _mode_ color space.

<a name="culoriSamples" href="#culoriSamples">#</a> culori.__samples__(_n = 2_, _γ = 1_) [<>](https://github.com/evercoder/culori/blob/master/src/samples.js "Source")

Returns an array of _n_ equally-spaced samples from the `[0, 1]` range, with `0` and `1` at the ends. The function also accepts a _γ_ (gamma) parameter which will map each value _t_ to _t_<sup>γ</sup>.

```js
culori.samples(3); // => [0, 0.5, 1]
culori.samples(5); // => [0, 0.25, 0.5, 0.75, 1]
```

The samples are useful for [culori.interpolate()](#culoriInterpolate) to generate color scales:

```js
let grays = culori.interpolate(['#fff', '#000']);
samples(5).map(grays);
```

### Interpolation functions

<a name="culoriInterpolateFunctionLinear" href="#culoriInterpolateFunctionLinear">#</a> culori.__interpolateFunctionLinear__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateFunctionLinear.js "Source")

<a name="culoriInterpolateFunctionSpline" href="#culoriInterpolateFunctionSpline">#</a> culori.__interpolateFunctionSpline__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateFunctionSpline.js "Source")

<a name="culoriInterpolateFunctionMonotone" href="#culoriInterpolateFunctionMonotone">#</a> culori.__interpolateFunctionMonotone__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateFunctionMonotone.js "Source")

<a name="culoriInterpolateFunctionCosine" href="#culoriInterpolateFunctionCosine">#</a> culori.__interpolateFunctionCosine__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateFunctionCosine.js "Source")

### Interpolation modes

<a name="culoriInterpolateNumber" href="#culoriInterpolateNumber">#</a> culori.__interpolateNumber__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateNumber.js "Source")

<a name="culoriInterpolateHue" href="#culoriInterpolateHue">#</a> culori.__interpolateHue__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateHue.js "Source")

<a name="culoriInterpolateNumber" href="#culoriInterpolateNumber">#</a> culori.__interpolateAlpha__ [<>](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolateNumber.js "Source")

## Difference

These methods are concerned to finding the [distance between two colors](https://en.wikipedia.org/wiki/Color_difference) based on various formulas. Each of these formulas will return a _function (colorA, colorB)_ that lets you measure the distance between two colors. Also available as a separate [d3 plugin](https://github.com/evercoder/d3-color-difference).

<a name="culoriDifferenceEuclidean" href="#culoriDifferenceEuclidean">#</a> culori.__differenceEuclidean__(_mode = 'rgb'_) [<>](https://github.com/evercoder/culori/blob/master/src/difference.js "Source")

Returns a [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference#Euclidean) function in a certain color space.

<a name="culoriDifferenceCie76" href="#culoriDifferenceCie76">#</a> culori.__differenceCie76__() [<>](https://github.com/evercoder/culori/blob/master/src/difference.js "Source")

Computes the [CIE76][CIE76] ΔE\*<sub>ab</sub> color difference between the colors _a_ and _b_. The computation is done in the Lab color space and it is analogous to [culori.differenceEuclidean('lab')](#culoriDifferenceEuclidean).

<a name="culoriDifferenceCie94" href="#culoriDifferenceCie94">#</a> culori.__differenceCie94__(_kL = 1_, _K1 = 0.045_, _K2 = 0.015_) [<>](https://github.com/evercoder/culori/blob/master/src/difference.js "Source")

Computes the [CIE94][CIE94] ΔE\*<sub>94</sub> color difference between the colors _a_ and _b_. The computation is done in the Lab color space.

<a name="culoriDifferenceCiede2000" href="#culoriDifferenceCiede2000">#</a> culori.__differenceCiede2000__(_Kl = 1_, _Kc = 1_, _Kh = 1_)  [<>](https://github.com/evercoder/culori/blob/master/src/difference.js "Source")

Computes the [CIEDE2000][CIEDE2000] ΔE\*<sub>00</sub> color difference between the colors _a_ and _b_ as implemented by [G. Sharma](http://www2.ece.rochester.edu/~gsharma/ciede2000/). The computation is done in the Lab color space.

Returns a [CIEDE2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) Delta E* function.

<a name="culoriDifferenceCmc" href="#culoriDifferenceCmc">#</a> culori.__differenceCmc__() [<>](https://github.com/evercoder/culori/blob/master/src/difference.js "Source")

Computes the [CMC l:c (1984)][CMC] ΔE\*<sub>CMC</sub> color difference between the colors _a_ and _b_. The computation is done in the Lab color space.

_Note:_ ΔE\*<sub>CMC</sub> is not considered a metric since it's not symmetrical, i.e. the distance from _a_ to _b_ is not always equal to the distance from _b_ to _a_. Therefore it cannot be reliably used with [culori.nearest()](#culoriNearest).

<a name="culoriDifferenceDin99o" href="#culoriDifferenceDin99o">#</a> culori.__differenceDin99o__() [<>](https://github.com/evercoder/culori/blob/master/src/difference.js "Source")

Computes the [DIN99o][DIN99oDE] ΔE\*<sub>99o</sub> color difference between the colors _a_ and _b_. The computation is done in the [DIN99o][DIN99o] color space.

### Nearest color(s)

<a name="culoriNearest" href="#culoriNearest">#</a> culori.__nearest__(_colors_, _metric = differenceEuclidean()_, _accessor = identity_) → _function(color, n = 1, τ = Infinity)_ [<>](https://github.com/evercoder/culori/blob/master/src/nearest.js "Source")

For a given _metric_ color difference formula, and an array of _colors_, returns a function with which you can find _n_ colors nearest to _color_, with a maximum distance of _τ_.

Pass _n = Infinity_ to get all colors in the array with a maximum distance of _τ_.