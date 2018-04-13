# API Reference

## Table of contents

* [Basics](#basics)
* [Interpolation](#interpolation)
* [Difference](#difference)

## Basics

§ __parse__( _string_ ) → _color_ or _undefined_

Parses a string and returns the corresponding _color_. The color will be in the matching color space, e.g. RGB for hex strings, HSL for `hsl(…, …, …)` strings, et cetera. If no built-in parsers can match the string, the function will return _undefined_.

§ __converter__( _mode = "rgb"_ ) → _function_

Returns a function that can then convert any color to the _mode_ color space:

```js
var rgb = culori.converter('rgb');
rgb('#f0f0f0');
```

Currently, the available modes are: 

Mode | For
---- | ---
`rgb` | RGB color space
`hsl` | HSL color space
`hsv` | HSV color space
`hsi` | HSI color space
`hwb` | HWB color space
`lab` | Lab color space
`lch` | LCh color space
`lrgb`| Linearized RGB color space

§ __interpolate__( _colors_, _mode = "rgb"_)

Returns an interpolator between an array of colors in the _mode_ color space.

§ __css__( _format_ )

Returns a function that will format any color to _format_.

### Utilities

§ __samples__( _n = 2_ )

Returns an array of _n_ equally-spaced samples from the `[0, 1]` range, with `0` and `1` at the ends.

```js
culori.samples(3); // => [0, 0.5, 1]
culori.samples(5); // => [0, 0.25, 0.5, 0.75, 1]
```

The samples are useful for `interpolate` to generate color scales:

```js
let grays = culori.interpolate(['#fff', '#000']);
samples(5).map(grays);
```

§ __round__( _n = 8_ )

Returns a function that rounds numbers to at most _n_ digits of precision.

## Shortcuts

§ __culori__( _color_ )

Shortcut to `converter('rgb')(color)`.

§ __rgb__( _color_ )

Shortcut to `converter('rgb')(color)`.

§ __hsl__( _color_ )

Shortcut to `converter('hsl')(color)`.

§ __hsv__( _color_ )

Shortcut to `converter('hsv')(color)`.

§ __hsi__( _color_ )

Shortcut to `converter('hsi')(color)`.

§ __hwb__( _color_ )

Shortcut to `converter('hwb')(color)`.

§ __lab__( _color_ )

Shortcut to `converter('lab')(color)`.

§ __lch__( _color_ )

Shortcut to `converter('lch')(color)`.

§ __lrgb__( _color_ )

Shortcut to `converter('lrgb')(color)`.

§ __css__( _format_ )

## Difference

These methods are concerned to finding the [distance between two colors](https://en.wikipedia.org/wiki/Color_difference) based on various formulas.

### Formulas

Each of these formulas will return a _function (colorA, colorB)_ that lets you measure the distance between two colors. 

§ __differenceEuclidean__( _mode = 'rgb'_ )

Returns a [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference#Euclidean) function in a certain color space.

§ __differenceCie76__()

Returns a [CIE76](https://en.wikipedia.org/wiki/Color_difference#CIE76) Delta E* function. It is analogous to computing the Euclidean distance in the Lab color space.

§ __differenceCie94__(_kL = 1_, _K1 = 0.045_, _K2 = 0.015_)

Returns a [CIE94](https://en.wikipedia.org/wiki/Color_difference#CIE94) Delta E* function.

§ __differenceCiede2000__(_Kl = 1_, _Kc = 1_, _Kh = 1_)

Returns a [CIEDE2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) Delta E* function.

§ __differenceCmc__() →

Returns a [CMC l:c 1984](https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)) Delta E* function. Please note that _differenceCmc_ is not a metric, therefore it cannot be used with _nearest()_.

### Nearest color(s)

§ __nearest__(_colors_, _metric = differenceEuclidean()_) → _function(color, n = 1, τ = Infinity)_.

For a given _metric_ color difference formula, and an array of _colors_, returns a function with which you can find _n_ colors nearest to _color_, with a maximum distance of _τ_.

