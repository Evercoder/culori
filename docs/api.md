---
layout: layouts/default
title: API Reference
menu-order: 2
---

## Color representation

Culori does not have a _Color_ class. Instead, it uses plain objects to represent colors:

```js
// A color in the RGB space:
{
  mode: 'rgb',
  r: 0.1,
  g: 0.2,
  b: 1,
  alpha: 1
}
```

The object needs to have a `mode` property that identifies the color space, and values for each channel in that particular color space. See the [Color Spaces](./color-spaces) section for the channels expected of each color space. Optionally, the `alpha` property is used for the color's alpha channel.

> **A note on the examples:** Doing arithmetics on colors will often result in floating-point values with lots of decimals. In the examples below, for brevity, the values are truncated to two decimals, with ellipses (`…`) subsituted for the rest.

## Basic methods

### Parsing and conversion

<a name="parse" href="#parse">#</a> culori.**parse**(_string_) → _color_ or _undefined_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/parse.js)

Parses a string and returns the corresponding _color_. The color will be in the matching color space, e.g. RGB for hex strings, HSL for `hsl(…, …, …)` strings, et cetera. If no built-in parsers can match the string, the function will return _undefined_.

```js
// named colors:
culori.parse('red');
// ⇒ { r: 1, g: 0, b: 0, mode: 'rgb' }

// hex strings:
culori.parse('#ff0000');
// ⇒ { r: 1, g: 0, b: 0, mode: 'rgb' }

// HSL colors:
culori.parse('hsl(60 50% 10% / 100%)');
// ⇒ { h: 60, s: 0.5, b: 0.1, alpha: 1, mode: 'hsl' }

// Lab colors:
culori.parse('lab(100% -50 50)');
// ⇒ { l: 100, a: -50, b: 50, mode: 'lab' }
```

In most cases you'll want to use a [converter](#converter) instead. You can throw strings and color objects at a converter to get back an object in a predictable color space. `parse()`, on the other hand, is only meant for parsing strings.

<a name="converter" href="#converter">#</a> culori.**converter**(_mode = "rgb"_) → _function (color or String)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/converter.js)

Returns a _converter_: a function that can convert any color to the _mode_ color space.

```js
let rgb = culori.converter('rgb');
let lab = culori.converter('lab');

rgb('#f0f0f0');
// ⇒ { mode: "rgb", r: 0.49…, g: 0.49…, b: 0.49… }

lab('#f0f0f0');
// ⇒ { mode: "lab", l: 94.79…, a: 0, b: 0 }
```

Converters accept either strings (which will be parsed with `culori.parse` under the hood) or color objects. If the `mode` key is absent from the color, it's assumed to be in the converter's color space.

The available modes (color spaces) are listed below. For convenience, each color space included by default in culori has a shortcut to its converter. For example, you can use `culori.hsl` instead of `culori.converter('hsl')`.

| Mode        | For                        | Shortcut                      |
| ----------- | -------------------------- | ----------------------------- |
| `cubehelix` | Cubehelix color space      | culori.**cubehelix**(_color_) |
| `dlab`      | DIN99o Lab color space     | culori.**dlab**(_color_)      |
| `dlch`      | DIN99o LCh color space     | culori.**dlch**(_color_)      |
| `hsi`       | HSI color space            | culori.**hsi**(_color_)       |
| `hsl`       | HSL color space            | culori.**hsl**(_color_)       |
| `hsv`       | HSV color space            | culori.**hsv**(_color_)       |
| `hwb`       | HWB color space            | culori.**hwb**(_color_)       |
| `lab`       | Lab color space            | culori.**lab**(_color_)       |
| `lch`       | LCh color space            | culori.**lch**(_color_)       |
| `luv`       | CIELuv color space         | culori.**luv**(_color_)       |
| `lchuv`     | CIELCHuv color space       | culori.**lchuv**(_color_)     |
| `lrgb`      | Linearized RGB color space | culori.**lrgb**(_color_)      |
| `rgb`       | RGB color space            | culori.**rgb**(_color_)       |
| `xyz`       | XYZ D50 color space        | culori.**xyz**(_color_)       |
| `yiq`       | YIQ color space            | culori.**yiq**(_color_)       |

### Formatting

<a name="formatHex" href="#formatHex">#</a> culori.**formatHex**(_color_ or _string_) → _string_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/formatter.js)

Returns the hex string for a color. The color's `alpha` channel is omitted, and the red, green, and blue channels are clamped to the the interval `[0, 255]`, i.e. colors that are not displayable are serialized as if they'd been passed through the `clampRgb` method.

```js
culori.formatHex('red');
// ⇒ "#ff0000"
```

<a name="formatHex8" href="#formatHex8">#</a> culori.**formatHex8**(_color_ or _string_) → _string_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/formatter.js)

Returns the 8-character hex string for a color. The red, green, blue, and alpha channels are clamped to the the interval `[0, 255]`, i.e. colors that are not displayable are serialized as if they'd been passed through the `clampRgb` method.

```js
culori.formatHex8({ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 });
// ⇒ "#ff000080"
```

<a name="formatRgb" href="#formatRgb">#</a> culori.**formatRgb**(_color_ or _string_) → _string_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/formatter.js)

Returns the `rgb(…)` / `rgba(…)` string for a color. Fully opaque colors will be serialized as `rgb()`, and semi-transparent colors as `rgba()`, in accordance with the [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value). Like in the case of `formatHex`, the red, green, and blue channels are clamped to the interval `[0, 255]`.

```js
culori.formatRgb('lab(50 0 0 / 25%)');
// ⇒ "rgba(119, 119, 119, 0.25)"
```

### Clamping

Some color spaces (Lab and LCh in particular) allow you to express colors that can't be displayed on-screen. The methods below allow you to identify when that's the case and to produce displayable versions of the colors.

<a name="displayable" href="#displayable">#</a> culori.**displayable**(_color_ or _string_) → _boolean_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/displayable.js)

Checks whether a particular color fits inside the sRGB gamut, by verifying that the `r`, `g`, and `b` channels are all in the interval `[0, 1]`.

```js
culori.displayable('red');
// ⇒ true

culori.displayable('rgb(300 255 255)');
// ⇒ false
```

<a name="clampRgb" href="#clampRgb">#</a> culori.**clampRgb**(_color_ or _string_) → _color_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/clamp.js)

Obtains a displayable version of the color by clamping the `r`, `g`, `b` channel values of the color's RGB representation to the interval `[0, 1]`. The returned color is in the same color space as the original color.

This is the faster, simpler, way to make a color displayable. It's what browsers do when you use a CSS color whose channels exceed the gamut. For example, `rgb(300 100 200)` is interpreted as `rgb(255 100 200)`.

Because clamping individual red, green, and blue values independently can alter their proportions in the final color, it often changes the color's hue.

```js
// RGB clamping:
culori.clampRgb('lab(50% 100 100)');
// ⇒ { mode: "lab", l: 54.29…, a: 80.81…, b: 69.88… }
```

<a name="clampChroma" href="#clampChroma">#</a> culori.**clampChroma**(_color_ or _string_) → _color_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/clamp.js)

Obtains a displayable version of the color by converting it to the `lch` color space, and trying to find the largest Chroma value that's displayable for the given Lightness and Hue. Compared to `clampRgb`, the function has the advantage of preserving the hue of the original color. The returned color is converted back to the original color space.

If the chroma-finding algorithm fails to find a displayable color (which can happen when not even the achromatic version, with `Chroma = 0`, is displayable), the method falls back to the `clampRgb` method, as a last resort.

The function uses [the bisection method](https://en.wikipedia.org/wiki/Bisection_method) to speed up the search for the largest Chroma value. However, due to discontinuities in the CIELCh color space, the function is not guaranteed to return the optimal result. [See this discussion](https://github.com/d3/d3-color/issues/33) for details.

```js
// Chroma clamping:
culori.clampChroma('lab(50% 100 100)');
// ⇒ { mode: "lab", l:50.00…, a: 63.11…, b: 63.11… }
```

## Interpolation

<a name="interpolate" href="#interpolate">#</a> culori.**interpolate**(_colors_, _mode = "rgb"_, _overrides_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/interpolate.js)

Returns an _interpolator_ in the _mode_ color space for an array of colors: a function that accepts a value _t_ in the interval `[0, 1]` and returns the interpolated color in the _mode_ color space.

The colors in the array can be in any color space, or they can even be strings.

```js
let grays = culori.interpolate(['#fff', '#000']);
grays(0.5);
// ⇒ { mode: 'rgb', r: 0.5, g: 0.5, b: 0.5 }
```

By default, colors in all spaces are interpolated linearly. You can override the way specific channels are interpolated with the _overrides_ object, the third argument of `interpolate()`.

```js
let my_interpolator = culori.interpolate(['blue', 'red'], 'lch', {
	// spline instead of linear interpolation:
	h: culori.interpolatorSplineBasis
});
```

There are a few interpolation methods available, listed below. Depending on the channel, the numeric values can be interpreted/interpolated in various _modes_. The hue channel, for example, is interpolated by taking into account the _shortest path around the hue circle_ (`fixupHue`). And the `fixupAlpha` mode assumes an _undefined_ alpha is `1`.

### Color stop positions

You can specify positions of color stops to interpolate in the way they're defined in the [CSS Images Module Level 4][css-images-4] specification:

```js
culori.interpolate(['red', ['green', 0.25], 'blue']);
```

In the image below, you can see the effect of interpolating with evenly-spaced colors (1) vs. positioned colors stops (2):

![Evenly spaced vs. positions]({{"/img/evenly-spaced-vs-positions.png" | url }})

To specify a positioned color stop, use an array that contains the color followed by its position. The color stops should be specified in ascending order.

For omitted (implicit) positions, we apply the rules [from the spec][css-images-4]:

1. if the first color doesn't have a position, it's assumed to be `0`; if the last color doesn't have a position, it's assumed to be `1`;
2. any other color stops that don't have a position will be evenly distributed along the gradient line between the positioned color stops.

### Easing functions

You can add easing functions between any two colors in the array:

```js
const easeIn = t => t * t;
culori.interpolate(['red', easeIn, 'green']);
```

Any function in the _colors_ array will be interpreted as an easing function, which is (for our purposes), a function that takes an argument `t ∈ [0, 1]` and returns a value `v ∈ [0, 1]`.

To apply the same easing function between all color pairs, instead of individual ones, add the easing as the first element in the array:

```js
const easeIn = t => t * t;

// this form:
culori.interpolate([easeIn, 'red', 'green', 'blue']);

// is equivalent to:
culori.interpolate(['red', easeIn, 'green', easeIn, 'blue']);
```

The easing function can alternatively be applied the hard way:

```js
culori.interpolate(
	['red', 'green', 'blue'],
	'rgb',
	culori.interpolatorPiecewise((a, b, t) => culori.lerp(a, b)(easeIn(t)))
);
```

This formula can be helpful if you wanted to apply a different easing function per channel:

```js
function piecewiseEasing(easingFn) {
	return culori.interpolatorPiecewise((a, b, t) =>
		culori.lerp(a, b)(easingFn(t))
	);
}

culori.interpolate(['red', 'green', 'blue'], 'rgb', {
	r: piecewiseEasing(easeIn),
	g: piecewiseEasing(easeOut),
	b: piecewiseEasing(easeInOut)
});
```

Culori comes with [just a few](#built-in-easing-functions) easing functions, but you can find several online:

-   [some classic easing functions](https://gist.github.com/gre/1650294);
-   [eases](https://github.com/mattdesl/eases) by Matt DesLauriers;
-   [bezier-easing](https://github.com/gre/bezier-easing) by Gaëtan Renaudeau builds `cubic-bezier` easings as defined in the [CSS Easing Functions Level 1][css-easing-1] spec;
-   [d3-scale](https://github.com/d3/d3-scale) lets you set the scale's domain and range to `[0, 1]`.

### Interpolation hints

Any number in he _colors_ array will be interpreted as an [interpolation hint](https://drafts.csswg.org/css-images-4/#color-stop-syntax):

```js
// interpolation hint:
culori.interpolate(['red', 0.25, 'green']);
```

As opposed to how current browsers implement the CSS spec ([see discussion](https://github.com/w3c/csswg-drafts/issues/3931)), interpolation hints _do not_ affect color stop positions in culori.

### Built-in easing functions

A few easing functions that come with culori:

<a name="easingMidpoint" href="#easingMidpoint">#</a> culori.**easingMidpoint**(_H = 0.5_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/easing/midpoint.js)

[Proposed here][midpoint], the `midpoint` easing function lets you shift the midpoint of a gradient like in tools such as Adobe Photoshop. You can use it with [`culori.interpolate()`](#interpolate) as an alternative to interpolation hints:

```js
// Explicit midpoint easing:
culori.interpolate(['red', culori.easingMidpoint(0.25), 'blue']);

// ...is equivalent to:
culori.interpolate(['red', 0.25, 'blue']);
```

<a name="easingSmoothstep" href="#easingSmoothstep">#</a> culori.**easingSmoothstep** &middot; [Source](https://github.com/evercoder/culori/blob/master/src/easing/smoothstep.js)

The [Smoothstep][smoothstep] easing function.

<a name="easingSmootherstep" href="#easingSmootherstep">#</a> culori.**easingSmootherstep** &middot; [Source](https://github.com/evercoder/culori/blob/master/src/easing/smootherstep.js)

Smootherstep is a variant of the [Smoothstep][smoothstep] easing function.

<a name="easingInOutSine" href="#easingInOutSine">#</a> culori.**easingInOutSine** &middot; [Source](https://github.com/evercoder/culori/blob/master/src/easing/inOutSine.js)

Sinusoidal in-out easing. Can be used to create, for example, a cosine interpolation [as described by Paul Bourke](paulbourke.net/miscellaneous/interpolation/):

```js
culori.interpolate([culori.easingInOutSine, 'red', 'green', 'blue']);
```

<a name="easingGamma" href="#easingGamma">#</a> culori.**easingGamma**(_γ = 1_) → _function(t)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/easing/gamma.js)

The [gamma](https://en.wikipedia.org/wiki/Gamma_correction) easing.

```js
culori.samples(5).map(culori.easingGamma(2));
// ⇒ [0, 0.0625, 0.25, 0.5625, 1]
```

### Interpolation methods

You'll use these methods when you want to override how colors get interpolated in a specific color space, or when defining the default interpolation for custom color spaces.

<a name="interpolatorLinear" href="#interpolatorLinear">#</a> culori.**interpolatorLinear**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/linear.js)

A linear interpolator for values in a channel.

#### Basis splines

[Basis splines](https://en.wikipedia.org/wiki/B-spline) are available in the following variants:

<a name="interpolatorSplineBasis" href="#interpolatorSplineBasis">#</a> culori.**interpolatorSplineBasis**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineBasis.js)

<a name="interpolatorSplineBasisClosed" href="#interpolatorSplineBasisClosed">#</a> culori.**interpolatorSplineBasisClosed**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineBasis.js)

<a name="interpolatorSplineBasisOpen" href="#interpolatorSplineBasisOpen">#</a> culori.**interpolatorSplineBasisOpen**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineBasis.js) (⚠️ Not yet implemented)

#### Natural splines

[Natural splines](https://en.wikipedia.org/wiki/Spline_interpolation) are available in the following variants:

<a name="interpolatorSplineNatural" href="#interpolatorSplineNatural">#</a> culori.**interpolatorSplineNatural**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineNatural.js)

<a name="interpolatorSplineNaturalClosed" href="#interpolatorSplineNaturalClosed">#</a> culori.**interpolatorSplineNaturalClosed**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineNatural.js)

<a name="interpolatorSplineNaturalOpen" href="#interpolatorSplineNaturalOpen">#</a> culori.**interpolatorSplineNaturalsOpen**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineNatural.js) (⚠️ Not yet implemented)

#### Monotone splines

Monotone splines are available in the following variants:

<a name="interpolatorSplineMonotone" href="#interpolatorSplineMonotone">#</a> culori.**interpolatorSplineMonotone**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineMonotone.js)

<a name="interpolatorSplineMonotoneClosed" href="#interpolatorSplineMonotoneClosed">#</a> culori.**interpolatorSplineMonotoneClosed**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineMonotone.js)

<a name="interpolatorSplineMonotoneOpen" href="#interpolatorSplineMonotoneOpen">#</a> culori.**interpolatorSplineMonotoneOpen**(_values_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/splineMonotone.js) (⚠️ Not yet implemented)

The monotone spline is based on the following paper (via [d3-shape](https://github.com/d3/d3-shape)):

> Steffen, M. [_"A simple method for monotonic interpolation in one dimension."_](https://ui.adsabs.harvard.edu/abs/1990A&A...239..443S) in Astronomy and Astrophysics, Vol. 239, p. 443-450 (Nov. 1990), Provided by the SAO/NASA Astrophysics Data System.

#### Custom piecewise interpolation

<a href='interpolatorPiecewise' href='#interpolatorPiecewise'>#</a> culori.**interpolatorPiecewise**(_interpolator_) [Source](https://github.com/evercoder/culori/blob/master/src/interpolate/piecewise.js)

Use a custom piecewise interpolator function in the form `function (a, b, t) => value`:

```js
let linear = (a, b, t) => (1 - t) * a + t * b;
culori.interpolate(['red', 'green'], culori.interpolatorPiecewise(linear));
```

When one of the two values to be interpolated is undefined, it will mirror the defined value: `[undefined, b]` becomes `[b, b]`. If both values are undefined, they are left as-is.

The [`culori.interpolatorLinear()`](#interpolatorLinear) function uses `interpolatorPiecewise()` under the hood.

### Interpolation Fixup

By default, channel values that need to be interpolated are treated as normal numbers. However, for some channels, the values hold special singificance and can be fixed up before interpolation for better results.

#### Hue fixup

Hue is a circular value, so there are two directions in which to interpolate between two hues (clockwise and anti-clockwise). The functions below take an array of hues and adjusts them to impose a certain interpolation direction while maintaining the absolute difference between consecutive hues.

Adjusted hues will not necessarily be in the `[0, 360)` interval. All fixup methods leave undefined values, and the values immediately following them, unaltered. The names of the methods come from [this discussion](https://github.com/w3c/csswg-drafts/issues/4735).

<a name="fixupHueShorter" href="#fixupHueShorter">#</a> culori.**fixupHueShorter**(_values_) → _Array_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/fixup/hue.js)

Adjusts the hues so that values are interpolated along the _shortest path around the hue circle_.

This is the default in all built-in color spaces using a hue channel. Below is an extract from the definition of the HSL color space:

```js
/* --- hsl/definition.js --- */
export default {
	// ...
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
	// ...
};
```

To omit the fixup and treat hues as normal numbers, use a custom interpolation on the `h` channel, and overwrite the `fixup` function with an identity function:

```js
let hsl_long = culori.interpolate(['blue', 'red', 'green'], 'hsl', {
	h: {
		fixup: arr => arr
	}
});
```

Treating the hues array as-is (with an _identity function_) corresponds to the `specified` fixup method [in the CSSWG issue](https://github.com/w3c/csswg-drafts/issues/4735) mentioned earlier.

<a name="fixupHueLonger" href="#fixupHueLonger">#</a> culori.**fixupHueLonger**(_values_) → _Array_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/fixup/hue.js)

Adjusts the hues so that they are interpolated along the _longest path around the hue circle_.

<a name="fixupHueIncreasing" href="#fixupHueIncreasing">#</a> culori.**fixupHueIncreasing**(_values_) → _Array_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/fixup/hue.js)

Adjusts the hues so that every hue is larger than the previous.

<a name="fixupHueDecreasing" href="#fixupHueDecreasing">#</a> culori.**fixupHueDecreasing**(_values_) → _Array_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/fixup/hue.js)

Adjusts the hues so that every hue is smaller than the previous.

#### Alpha fixup

<a name="fixupAlpha" href="#fixupAlpha">#</a> culori.**fixupAlpha**(_values_) → _Array_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/fixup/alpha.js)

Turns all `undefined` values in the array to `1` (full opacity), unless _all_ values in the array are `undefined`, in which case it leaves the values unaltered.

This is the default method for the alpha channel in all built-in color spaces.

### Evenly-spaced samples

<a name="samples" href="#samples">#</a> culori.**samples**(_n = 2_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/samples.js)

Returns an array of _n_ equally-spaced samples in the `[0, 1]` range, with `0` and `1` at the ends.

```js
culori.samples(3);
// ⇒ [0, 0.5, 1]

culori.samples(5);
// ⇒ [0, 0.25, 0.5, 0.75, 1]
```

The samples are useful for [`culori.interpolate()`](#interpolate) to generate color scales:

```js
let grays = culori.interpolate(['#fff', '#000']);
culori.samples(5).map(grays);
// ⇒ five evenly-spaced colors
```

As with the [`culori.interpolate()`](#interpolate) method, you can map the samples through an easing function or scale to obtain a different distribution of the samples.

```js
let culori = require('culori');
let easing = require('bezier-easing');

// Bezier easing:
let bezier = easing(0, 0, 1, 0.5);
culori.samples(10).map(bezier);

// easeInQuad:
culori.samples(10).map(t => t * t);
```

### Lerp

<a name="lerp" href="#lerp">#</a> culori.**lerp**(_a_, _b_, _t_) → _value_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/samples.js)

Interpolates between the values `a` and `b` at the point `t ∈ [0, 1]`.

```js
culori.lerp(5, 10, 0.5);
// ⇒ 7.5
```

### Mappings

<a name="mapper" href="#mapper">#</a> culori.**mapper**(_fn_, _mode = "rgb"_) → _function (color | string)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/map.js)

Creates a mapping that applies _fn_ on each channel of the color in the _mode_ color space.

The resulting function accepts a single argument (a color object or a string), which it converts to the _mode_ color space if not already there.

The _mode_ parameter can be omitted, in which case the mappe will iterate through all the channels in the color's original color space.

The _fn_ callback has the following signature:

**fn**(_value_, _channel_, _color_, _mode_)

where:

-   `value` is the current value;
-   `channel` is the current channel;
-   `color` is a reference to the entire color object;
-   `mode` is forwarded from the call to `culori.mapper`.

Here's the implementation of alpha premultiplication:

```js
const multiplyAlpha = culori.mapper((val, ch, color) => {
	if (ch !== 'alpha') {
		return (val || 0) / (color.alpha !== undefined ? color.alpha : 1);
	}
	return val;
}, 'rgb');

multiplyAlpha({ r: 1, g: 0.6, b: 0.4, a: 0.5 });
// ⇒ { mode: 'rgb', r: 0.5, g: 0.3, b: 0.2, a: 0.5 }
```

All channels are included in the mapping, so you might want to exclude the `alpha` channel from your function, like we do above.

Returning `undefined` or `NaN` from the function will omit that channel from the resulting color.

#### Built-in mappings

<a name="mapAlphaMultiply" href="#mapAlphaMultiply">#</a> culori.**mapAlphaMultiply** &middot; [Source](https://github.com/evercoder/culori/blob/master/src/map.js)

Multiplies the color's alpha value into all its other channels:

```js
let multiplyAlpha = culori.mapper(culori.mapAlphaMultiply, 'rgb');
multiplyAlpha({ r: 1, g: 0.6, b: 0.4, a: 0.5 });
// ⇒ { mode: 'rgb', r: 0.5, g: 0.3, b: 0.2, a: 0.5 }
```

Any `undefined` channel value will be considered to be `0` (zero), to enable alpha-premultiplied interpolation with achromatic colors in hue-based color spaces (HSL, LCh, etc.).

<a name="mapAlphaDivide" href="#mapAlphaDivide">#</a> culori.**mapAlphaDivide** &middot; [Source](https://github.com/evercoder/culori/blob/master/src/map.js)

Divides a color's other channels by its alpha value. It's the opposite of `culori.mapAlphaMultiply`, and is used in interpolation with alpha premultiplication:

```js
let multiplyAlpha = culori.mapper(culori.mapAlphaMultiply, 'rgb');
let divideAlpha = culori.mapper(culori.mapAlphaDivide, 'rgb');

divideAlpha(multiplyAlpha({ r: 1, g: 0.6, b: 0.4, a: 0.5 }));
// ⇒ { mode: 'rgb', r: 1, g: 0.6, b: 0.4, a: 0.5 }
```

Any `undefined` channel value will be considered to be `0` (zero), to enable alpha-premultiplied interpolation with achromatic colors in hue-based color spaces (HSL, LCh, etc.).

<a name="mapTransferLinear" href="#mapTransferLinear">#</a> culori.**mapTransferLinear**(_slope = 1_, _intercept = 0_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/map.js)

<a name="mapTransferGamma" href="#mapTransferGamma">#</a> culori.**mapTransferGamma**(_amplitude = 1_, _exponent = 1_, _offset = 0_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/map.js)

#### Interpolating with mappings

<a name="interpolateWith" href="#interpolateWith">#</a> culori.**interpolateWith**(_premap_, _postmap_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate.js)

Adds a _pre-mapping_ and a _post-mapping_ to an interpolation, to enable things like alpha premultiplication:

```js
let interpolateWithAlphaPremult = culori.interpolateWith(
	culori.mapAlphaMultiply,
	culori.mapAlphaDivide
);

interpolateWithAlphaPremult(['red', 'transparent', 'blue'])(0.25);
```

To chain more than one mapping:

```js
const mapChromaMultiply = (v, ch, c, mode) => {
	// ...
};

const mapChromaDivide = (v, ch, c, mode) => {
	// ...
};

let interpolateWithAlphaChromaPremult = culori.interpolateWith(
	(...args) => mapChromaMultiply(culori.mapAlphaMultiply(...args)),
	(...args) => culori.mapAlphaDivide(mapChromaDivide(...args))
);

interpolateWithAlphaPremult(['red', 'transparent', 'blue'])(0.25);
```

<a name="interpolateWithPremultipliedAlpha" href="#interpolateWithPremultipliedAlpha">#</a> culori.**interpolateWithPremultipliedAlpha**(_colors_, _mode = "rgb"_, _overrides_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/interpolate.js)

Takes the same arguments as [`culori.interpolate()`](#interpolate), but applies [alpha premultiplication](https://drafts.csswg.org/css-images-4/#premultiplied).

```js
let colors = ['red', 'transparent', 'blue'];

// alpha ignored for the R/G/B channels:
culori.interpolate(colors, 'rgb');

// alpha premultiplied into the R/G/B channels:
culori.interpolateWithPremultipliedAlpha(colors, 'rgb');
```

## Difference

These methods are concerned to finding the [distance between two colors](https://en.wikipedia.org/wiki/Color_difference) based on various formulas. Each of these formulas will return a _function (colorA, colorB)_ that lets you measure the distance between two colors.

> **Note:** These methods are also available as a separate [D3 plugin](https://github.com/evercoder/d3-color-difference).

<a name="differenceEuclidean" href="#differenceEuclidean">#</a> culori.**differenceEuclidean**(_mode = 'rgb'_, _weights = [1, 1, 1, 0]_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Returns a [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference#Euclidean) function in a certain color space.

You can optionally assign different weights to the channels in the color space. See, for example, the [Kotsarenko/Ramos distance](#differenceKotsarenkoRamos).

The default weights `[1, 1, 1, 0]` mean that the _alpha_, which is the fourth channel in all the color spaces culori defines, is not taken into account. Send `[1, 1, 1, 1]` as the weights to include it in the computation.

<a name="differenceCie76" href="#differenceCie76">#</a> culori.**differenceCie76**() &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Computes the [CIE76][cie76] ΔE\*<sub>ab</sub> color difference between the colors _a_ and _b_. The computation is done in the Lab color space and it is analogous to [`culori.differenceEuclidean('lab')`](#differenceEuclidean).

<a name="differenceCie94" href="#differenceCie94">#</a> culori.**differenceCie94**(_kL = 1_, _K1 = 0.045_, _K2 = 0.015_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Computes the [CIE94][cie94] ΔE\*<sub>94</sub> color difference between the colors _a_ and _b_. The computation is done in the Lab color space.

<a name="differenceCiede2000" href="#differenceCiede2000">#</a> culori.**differenceCiede2000**(_Kl = 1_, _Kc = 1_, _Kh = 1_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Computes the [CIEDE2000][ciede2000] ΔE\*<sub>00</sub> color difference between the colors _a_ and _b_ as implemented by [G. Sharma](http://www2.ece.rochester.edu/~gsharma/ciede2000/). The computation is done in the Lab color space.

Returns a [CIEDE2000](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) Delta E\* function.

<a name="differenceCmc" href="#differenceCmc">#</a> culori.**differenceCmc**() &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Computes the [CMC l:c (1984)][cmc] ΔE\*<sub>CMC</sub> color difference between the colors _a_ and _b_. The computation is done in the Lab color space.

ΔE\*<sub>CMC</sub> is not considered a metric since it's not symmetrical, that is the distance from _a_ to _b_ is not always equal to the distance from _b_ to _a_. Therefore it cannot be reliably used with [`culori.nearest()`](#nearest).

<a name="differenceDin99o" href="#differenceDin99o">#</a> culori.**differenceDin99o**() &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Computes the [DIN99o][din99ode] ΔE\*<sub>99o</sub> color difference between the colors _a_ and _b_. The computation is done in the [DIN99o][din99o] color space.

<a name="differenceKotsarenkoRamos" href="#differenceKotsarenkoRamos">#</a> culori.**differenceKotsarenkoRamos**() &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

Computes the [Kotsarenko/Ramos][kotsarekno-ramos] color difference between the colors _a_ and _b_. This is a weighted Euclidean distance in the [YIQ][yiq] color space.

### Handling hue

Euclidean distances are tricky in cylindrical spaces, containing a hue. Depending on the color space, hue is treated in a variety of ways. The functions below are used internally:

<a name="differenceHueChroma" href="#differenceHueChroma">#</a> culori.**differenceHueChroma**(_colorA_, _colorB_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

This is the handling of hue in CIE-derived cylindrical spaces (`lch`, `lchuv`, `dlch`).

<a name="differenceHueSaturation" href="#differenceHueSaturation">#</a> culori.**differenceHueSaturation**(_colorA_, _colorB_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

This is a handling of hue in the HSL / HSV / HSI family of color spaces. It's a (possibly wrong!) extrapolation of `differenceHueChroma`.

<a name="differenceHueNaive" href="#differenceHueNaive">#</a> culori.**differenceHueNaive**(_colorA_, _colorB_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/difference.js)

For remaining color spaces (HWB), we consider hues numbers, but apply a _shortest path around the hue circle_ (analogous to [`culori.fixupHueShorter`](#fixupHueShorter)). If you insist on using Euclidean distances on these spaces, you can use the `weights` to control the contribution of the hue difference towards the total difference.

### Nearest color(s)

<a name="nearest" href="#nearest">#</a> culori.**nearest**(_colors_, _metric = differenceEuclidean()_, _accessor = identity_) → _function(color, n = 1, τ = Infinity)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/nearest.js)

For a given _metric_ color difference formula, and an array of _colors_, returns a function with which you can find _n_ colors nearest to _color_, with a maximum distance of _τ_.

Pass _n = Infinity_ to get all colors in the array with a maximum distance of _τ_.

```js
/*
	Get the three closest CSS named colors
 */

let colors = Object.keys(culori.colorsNamed);
let nearestNamedColors = culori.nearest(colors, culori.differenceCiede2000());

nearestNamedColors('lch(50% 70 60)', 3);
// => ["chocolate", "sienna", "peru"]
```

## Blending

Color blending works as defined in the W3C [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/) specification.

<a name="blend" href="#blend">#</a> culori.**blend**(_colors_, _type = 'normal'_, _mode = 'rgb'_) → _color_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/blend.js)

Available blending modes:

-   `normal`
-   `multiply`
-   `screen`
-   `hard-light`
-   `overlay`
-   `darken`
-   `lighten`
-   `color-dodge`
-   `color-burn`
-   `soft-light`
-   `difference`
-   `exclusion`

> **Note:** culori currently implements the _separable_ blend modes, that is the blend modes that work on each channel in the color space independently. _color_, _hue_, _saturation_, and _lightness_ modes are not yet available.

An example of blending three colors:

```js
culori.blend(
	['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'],
	'screen'
);
// ⇒ { mode: 'rgb', alpha: 0.875, r: 0.57…, g: 0.57…, b:0.57… }
```

In addition to strings, the _type_ parameter supports a _function (b, s) → v_ that takes the values of the _backdrop_ and _source_ color to return the blended value. This allows you to write your own (separable) blending functions. For example, an _average_ blending mode:

```js
culori.blend(['red', 'green'], function average(b, s) {
	return (b + s) / 2;
});
```

## Random colors

<a name="random" href="#random">#</a> culori.**random**(_mode = 'rgb'_, _constraints = {}_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/random.js)

Obtain a random color from a particular color space, with optional constraints. The resulting color will be in the color space from where it has been picked.

Basic usage:

```js
culori.random();
// ⇒ { mode: 'rgb', r: 0.75, g: 0.12, b: 0.99 }
```

### Specifying constraints

Random colors are, by definition, all over the color space and not all of them will look particularly nice. Some color spaces, such as HSL or HSV, are also biased towards colors close to black and/or white, because of the way these color spaces stretch the RGB cube into cyllinders.

For more control on how the colors are generated, you can specify constraints for each individual channel in the color space. Constraints can be either a _constant number_ or an _interval_ from where to pick the channel value:

```js
culori.random('hsv', {
	h: 120, // number
	s: [0.25, 0.75] // interval
});
// ⇒ { mode: 'hsv', h: 120, s: 0.51…, v: 0.89… }
```

The _alpha_ channel is excluded by default. To obtain colors with random alpha values, include a constraint for `alpha`:

```js
culori.random('lrgb');
// ⇒ { mode: 'lrgb', r: 0.74…, g: 0.15…, b: 0.34… }

culori.random('lrgb', { alpha: [0, 1] });
// ⇒ { mode: 'lrgb', r: 0.33…, g: 0.72…, b: 0.04…, alpha: 0.12… }
```

### Displayable random colors

The value for any channel in the color space for which there are no constraints will be picked from the entire range of that channel. However, some color spaces, such as LAB or LCH, don't have explicit ranges for certain channels; for these, some approximate ranges [have been pre-computed](https://github.com/evercoder/culori/blob/master/tools/ranges.js) as the limits of the displayable sRGB gamut.

Even with these ranges in place, a combination of channel values may not be displayable. Check if that's the case with [`culori.displayable()`](#displayable), and pass the color through a [`culori.clamp*`](#clampRgb) function to obtain a displayable version.

## WCAG utilities

A couple of utility functions based on the [Web Content Acccessibility Guidelines 2.0 specification](https://www.w3.org/TR/WCAG20/).

<a name="wcagLuminance" href="#wcagLuminance">#</a> culori.**wcagLuminance**(_color_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/wcag.js)

Computes the [relative luminance](https://www.w3.org/TR/WCAG20/#relativeluminancedef) of a color.

```js
culori.wcagLuminance('red');
// ⇒ 0.2126
```

<a name="wcagContrast" href="#wcagContrast">#</a> culori.**wcagContrast**(_colorA_, _colorB_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/wcag.js)

Computes the [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) between two colors.

```js
culori.wcagContrast('red', 'black');
// ⇒ 5.252
```

## Filters

### CSS filter effects

Culori implements some of the filter effects defined by the W3C [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/). The _amount_ parameter is usually in the `[0, 1]` interval, but may go above `1` for some filters. The filters were designed for RGB colors, so the _mode_ parameter is expected to be `rgb` or `lrgb`.

<a name="filterBrightness" href="#filterBrightness">#</a> culori.**filterBrightness**(_amount = 1_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`brightness()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness) CSS filter. An _amount_ of `1` leaves the color unchanged. Smaller values darken the color (with `0` being fully black), while larger values brighten it.

<a name="filterContrast" href="#filterContrast">#</a> culori.**filterContrast**(_amount = 1_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`contrast()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast) filter. An _amount_ of `1` leaves the color unchanged. Smaller values decrease the contrast (with `0` being fully gray), while larger values increase it.

<a name="filterSepia" href="#filterSepia">#</a> culori.**filterSepia**(_amount = 1_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`sepia()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia) filter. An _amount_ of `0` leaves the color unchanged, and `1` applies the sepia effect fully.

<a name="filterGrayscale" href="#filterGrayscale">#</a> culori.**filterGrayscale**(_amount = 1_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`grayscale()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale) filter. An _amount_ of `0` leaves the color unchanged, and `1` makes the color fully achromatic.

<a name="filterSaturate" href="#filterSaturate">#</a> culori.**filterSaturate**(_amount = 1_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`saturate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate) filter. An _amount_ of `1` leaves the color unchanged. Smaller values desaturate the color (with `0` being fully achromatic), while larger values saturate it.

<a name="filterInvert" href="#filterInvert">#</a> culori.**filterInvert**(_amount = 1_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`invert()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert) filter. An _amount_ of `0` leaves the color unchanged, and `1` makes the color fully inverted.

<a name="filterHueRotate" href="#filterHueRotate">#</a> culori.**filterHueRotate**(_degrees = 0_, _mode = 'rgb'_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/filter.js)

The [`hue-rotate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate) filter.

```js
culori
	.samples(5)
	.map(culori.interpolate(['red', 'green', 'blue']))
	.map(culori.filterSepia(0.5))
	.map(culori.formatHex);

// ⇒ ["#751800", "#664200", "#576c00", "#1a3e82", "#0010ff"];
```

### Color vision deficiency (CVD) simulation

Simulate how a color may be perceived by people with color vision deficiencies (CVD).

<a name="filterDeficiencyProt" href="#filterDeficiencyProt">#</a> culori.**filterDeficiencyProt**(_severity = 1_) → _function (color)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/deficiency.js)

Simulate protanomaly and protanopia. The `severity` parameter is in the interval `[0, 1]`, where `0` corresponds to normal vision and `1` (the default value) corresponds to protanopia.

<a name="filterDeficiencyDeuter" href="#filterDeficiencyDeuter">#</a> culori.**filterDeficiencyDeuter**(_severity = 1_) → _function (color)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/deficiency.js)

Simulate deuteranomaly and deuteranopia. The `severity` parameter is in the interval `[0, 1]`, where `0` corresponds to normal vision and `1` (the default value) corresponds to deuteranopia.

<a name="filterDeficiencyTrit" href="#filterDeficiencyTrit">#</a> culori.**filterDeficiencyTrit**(_severity = 1_) → _function (color)_ &middot; [Source](https://github.com/evercoder/culori/blob/master/src/deficiency.js)

Simuate tritanomaly and tritanopia. The `severity` parameter is in the interval `[0, 1]`, where `0` corresponds to normal vision and `1` (the default value) corresponds to tritanopia.

Examples:

```js
culori
	.samples(5)
	.map(culori.interpolate(['red', 'green', 'blue']))
	.map(culori.filterDeficiencyProt(0.5))
	.map(culori.formatHex);

// ⇒ ["#751800", "#664200", "#576c00", "#1a3e82", "#0010ff"];
```

Based on the work of Machado, Oliveira and Fernandes (2009), using [precomputed matrices](https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html) provided by the authors. References thanks to the [`colorspace` package for R](http://colorspace.r-forge.r-project.org/reference/simulate_cvd.html).

> G. M. Machado, M. M. Oliveira and L. A. F. Fernandes, _"A Physiologically-based Model for Simulation of Color Vision Deficiency,"_ in IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1291-1298, Nov.-Dec. 2009, [doi: 10.1109/TVCG.2009.113](https://doi.ieeecomputersociety.org/10.1109/TVCG.2009.113).

## Miscellaneous

<a name="round" href="#round">#</a> culori.**round**(_n = 8_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/round.js)

Returns a _rounder_: a function with which to round numbers to at most _n_ digits of precision.

```js
let approx = culori.round(4);
approx(0.38393993);
// ⇒ 0.3839
```

## Extending culori

> **Warning:** This part of the API is not yet finalized and may change.

<a name="defineMode" href="#defineMode">#</a> culori.**defineMode**(_definition_) &middot; [Source](https://github.com/evercoder/culori/blob/master/src/modes.js)

Defines a new color space through a _definition_ object. Here's the full definition of the HSL color space:

```js
{
	mode: 'hsl',
	output: {
		rgb: convertHslToRgb
	},
	input: {
		rgb: convertRgbToHsl
	},
	channels: ['h', 's', 'l', 'alpha'],
	ranges: {
		h: [0, 360]
	},
	parsers: [parseHsl],
	interpolate: {
		h: {
			use: interpolatorLinear,
			fixup: fixupHueShorter
		},
		s: interpolatorLinear,
		l: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	},
	difference: {
		h: differenceHueSaturation
	}
};
```

The properties a definition needs are the following:

-   `mode`: the string identifier for the color space
-   `output`: a set of functions to convert from the color space we're defining to other color spaces. At least `rgb` needs to be included; in case a specific conversion pair between two color spaces is missing, RGB is used as the "buffer" for the conversion.
-   `input`: opposite of `output`; a set of function to convert from various color spaces to the color space we're defining. At least `rgb` needs to be included.
-   `channels`: a list of channels for the color space.
-   `ranges`: the ranges for values in specific channels; if left unspecified, defaults to `[0, 1]`.
-   `parsers`: any parsers for the color space that can transform strings into colors
-   `interpolate`: the default interpolations for the color space, one for each channel. Each interpolation is defined by its interpolator (the `use` key) and its fixup function (the `fixup` key). When defined as a function, a channel interpolation is meant to define its interpolator, with the fixup being a no-op.
-   `difference`: the default Euclidean distance method for each channel in the color space; mostly used for the `h` channel in cylindrical color spaces.

All built-in color spaces follow these conventions in regards to the `channels` array follows:

-   there are four channels in the color space;
-   the fourth channel is always `alpha`.

This makes sure [`culori.differenceEuclidean()`](#differenceEuclidean) works as expected, but there may be more hidden assumptions in the codebase.

[css-images-4]: https://drafts.csswg.org/css-images-4/#color-stop-syntax
[css-easing-1]: http://drafts.csswg.org/css-easing-1
[smoothstep]: https://en.wikipedia.org/wiki/Smoothstep
[cie76]: https://en.wikipedia.org/wiki/Color_difference#CIE76
[cie94]: https://en.wikipedia.org/wiki/Color_difference#CIE94
[ciede2000]: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
[cmc]: https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
[din99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
[kotsarekno-ramos]: http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
[din99ode]: https://de.wikipedia.org/wiki/DIN99-Farbraum#Farbabstandsformel
[yiq]: https://en.wikipedia.org/wiki/YIQ
[midpoint]: https://github.com/w3c/csswg-drafts/issues/3935
