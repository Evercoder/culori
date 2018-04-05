# API Reference

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

§ __transform__()

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

## Utilities

§ __samples__( _n = 2_ )

§ __round__( _precision = 8_ )

