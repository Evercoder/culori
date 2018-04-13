# API Reference

## Table of contents

* [Basics](#basics)
* [Interpolation](#interpolation)
* [Difference](#difference)

## Basics

§ culori.__parse__( _string_ ) → _color_ or _undefined_

Parses a string and returns the corresponding _color_. The color will be in the matching color space, e.g. RGB for hex strings, HSL for `hsl(…, …, …)` strings, et cetera. If no built-in parsers can match the string, the function will return _undefined_.

§ culori.__converter__( _mode = "rgb"_ ) → _function_

Returns a function that can then convert any color to the _mode_ color space:

```js
var rgb = culori.converter('rgb');
rgb('#f0f0f0');
```

Currently, the available modes are: 

Mode | For | Shortcut
---- | --- | --------
`rgb` | RGB color space | __culori__( _color_ )  and culori.__rgb__( _color_ )
`hsl` | HSL color space | culori.__hsl__( _color_ ) 
`hsv` | HSV color space | culori.__hsv__( _color_ )
`hsi` | HSI color space | culori.__hsi__( _color_ )
`hwb` | HWB color space | culori.__hwb__( _color_ )
`lab` | Lab color space | culori.__lab__( _color_ ) 
`lch` | LCh color space | culori.__lch__( _color_ )
`lrgb`| Linearized RGB color space | culori.__lrgb__( _color_ )
`cubehelix` | Cubehelix color space | culori.__cubehelix__( _color_ )

§ culori.__formatter__( _format = 'rgb'_ )

§ culori.__round__( _n = 8_ )

Returns a function that rounds numbers to at most _n_ digits of precision.

## Interpolation

§ culori.__interpolate__( _colors_, _mode = "rgb"_ )

Returns an interpolator between an array of colors in the _mode_ color space.

§ culori.__samples__( _n = 2_, _γ = 1_ )

Returns an array of _n_ equally-spaced samples from the `[0, 1]` range, with `0` and `1` at the ends. The function also accepts a _γ_ (gamma) parameter which will map each value _t_ to _t_<sup>γ</sup>.

```js
culori.samples(3); // => [0, 0.5, 1]
culori.samples(5); // => [0, 0.25, 0.5, 0.75, 1]
```

The samples are useful for `culori.interpolate` to generate color scales:

```js
let grays = culori.interpolate(['#fff', '#000']);
samples(5).map(grays);
```

### Interpolation functions

§ culori.__interpolateFunctionLinear__
§ culori.__interpolateFunctionSpline__
§ culori.__interpolateFunctionMonotone__
§ culori.__interpolateFunctionCosine__

### Interpolation modes

§ culori.__interpolateNumber__
§ culori.__interpolateHue__
§ culori.__interpolateAlpha__

## Difference

These methods are concerned to finding the [distance between two colors](https://en.wikipedia.org/wiki/Color_difference) based on various formulas.

### Formulas

Each of these formulas will return a _function (colorA, colorB)_ that lets you measure the distance between two colors. 

Formula | Notes
------- | -----
§ culori.__differenceEuclidean__( _mode = 'rgb'_ ) | Returns a [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference#Euclidean) function in a certain color space.
§ culori.__differenceCie76__() | Returns a [CIE76](https://en.wikipedia.org/wiki/Color_difference#CIE76) Delta E* function. It is analogous to computing the Euclidean distance in the Lab color space.
§ culori.__differenceCie94__( _kL = 1_, _K1 = 0.045_, _K2 = 0.015_ ) | Returns a [CIE94](https://en.wikipedia.org/wiki/Color_difference#CIE94) Delta E* function.
§ culori.__differenceCiede2000__( _Kl = 1_, _Kc = 1_, _Kh = 1_ ) | Returns a [CIEDE2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) Delta E* function.
§ culori.__differenceCmc__() |  Returns a [CMC l:c 1984](https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)) Delta E* function. Please note that _differenceCmc_ is not a metric, therefore it cannot be used with _nearest()_.

### Nearest color(s)

§ culori.__nearest__( _colors_, _metric = differenceEuclidean()_ ) → _function(color, n = 1, τ = Infinity)_.

For a given _metric_ color difference formula, and an array of _colors_, returns a function with which you can find _n_ colors nearest to _color_, with a maximum distance of _τ_.

