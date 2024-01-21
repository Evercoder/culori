---
layout: default.njk
title: API Reference
codebase: 'https://github.com/evercoder/culori/blob/main'
---

<details>
<summary>API table of contents</summary>
<ul class='api-toc'>
<li><a href='#color-spaces'>a98</a></li>
<li><a href='#average'>average</a></li>
<li><a href='#averageAngle'>averageAngle</a></li>
<li><a href='#averageNumber'>averageNumber</a></li>
<li><a href='#blend'>blend</a></li>
<li><a href='#blerp'>blerp</a></li>
<li><a href='#clampChroma'>clampChroma</a></li>
<li><a href='#clampRgb'>clampRgb</a></li>
<li><a href='#colorsNamed'>colorsNamed</a></li>
<li><a href='#converter'>converter</a></li>
<li><a href='#color-spaces'>cubehelix</a></li>
<li><a href='#differenceCie76'>differenceCie76</a></li>
<li><a href='#differenceCie94'>differenceCie94</a></li>
<li><a href='#differenceCiede2000'>differenceCiede2000</a></li>
<li><a href='#differenceCmc'>differenceCmc</a></li>
<li><a href='#differenceDin99o'>differenceDin99o</a></li>
<li><a href='#differenceEuclidean'>differenceEuclidean</a></li>
<li><a href='#differenceHueChroma'>differenceHueChroma</a></li>
<li><a href='#differenceHueNaive'>differenceHueNaive</a></li>
<li><a href='#differenceHueSaturation'>differenceHueSaturation</a></li>
<li><a href='#differenceHyab'>differenceHyab</a></li>
<li><a href='#differenceKotsarenkoRamos'>differenceKotsarenkoRamos</a></li>
<li><a href='#differenceItp'>differenceItp</a></li>
<li><a href='#displayable'>displayable</a></li>
<li><a href='#color-spaces'>dlab</a></li>
<li><a href='#color-spaces'>dlch</a></li>
<li><a href='#easingGamma'>easingGamma</a></li>
<li><a href='#easingInOutSine'>easingInOutSine</a></li>
<li><a href='#easingMidpoint'>easingMidpoint</a></li>
<li><a href='#easingSmootherstep'>easingSmootherstep</a></li>
<li><a href='#easingSmoothstep'>easingSmoothstep</a></li>
<li><a href='#easingSmoothstepInverse'>easingSmoothstepInverse</a></li>
<li><a href='#filterBrightness'>filterBrightness</a></li>
<li><a href='#filterContrast'>filterContrast</a></li>
<li><a href='#filterDeficiencyDeuter'>filterDeficiencyDeuter</a></li>
<li><a href='#filterDeficiencyProt'>filterDeficiencyProt</a></li>
<li><a href='#filterDeficiencyTrit'>filterDeficiencyTrit</a></li>
<li><a href='#filterGrayscale'>filterGrayscale</a></li>
<li><a href='#filterHueRotate'>filterHueRotate</a></li>
<li><a href='#filterInvert'>filterInvert</a></li>
<li><a href='#filterSaturate'>filterSaturate</a></li>
<li><a href='#filterSepia'>filterSepia</a></li>
<li><a href='#fixupAlpha'>fixupAlpha</a></li>
<li><a href='#fixupHueDecreasing'>fixupHueDecreasing</a></li>
<li><a href='#fixupHueIncreasing'>fixupHueIncreasing</a></li>
<li><a href='#fixupHueLonger'>fixupHueLonger</a></li>
<li><a href='#fixupHueShorter'>fixupHueShorter</a></li>
<li><a href='#formatCss'>formatCss</a></li>
<li><a href='#formatHex'>formatHex</a></li>
<li><a href='#formatHex8'>formatHex8</a></li>
<li><a href='#formatHsl'>formatHsl</a></li>
<li><a href='#formatRgb'>formatRgb</a></li>
<li><a href='#getMode'>getMode</a></li>
<li><a href='#color-spaces'>hsi</a></li>
<li><a href='#color-spaces'>hsl</a></li>
<li><a href='#color-spaces'>hsv</a></li>
<li><a href='#color-spaces'>hwb</a></li>
<li><a href='#inGamut'>inGamut</a></li>
<li><a href='#interpolate'>interpolate</a></li>
<li><a href='#interpolateWith'>interpolateWith</a></li>
<li><a href='#interpolateWithPremultipliedAlpha'>interpolateWithPremultipliedAlpha</a></li>
<li><a href='#interpolatorLinear'>interpolatorLinear</a></li>
<li><a href='#interpolatorPiecewise'>interpolatorPiecewise</a></li>
<li><a href='#interpolatorSplineBasis'>interpolatorSplineBasis</a></li>
<li><a href='#interpolatorSplineBasisClosed'>interpolatorSplineBasisClosed</a></li>
<li><a href='#interpolatorSplineMonotone'>interpolatorSplineMonotone</a></li>
<li><a href='#interpolatorSplineMonotone2'>interpolatorSplineMonotone2</a></li>
<li><a href='#interpolatorSplineMonotoneClosed'>interpolatorSplineMonotoneClosed</a></li>
<li><a href='#interpolatorSplineNatural'>interpolatorSplineNatural</a></li>
<li><a href='#interpolatorSplineNaturalClosed'>interpolatorSplineNaturalClosed</a></li>
<li><a href='#color-spaces'>itp</a></li>
<li><a href='#color-spaces'>jab</a></li>
<li><a href='#color-spaces'>jch</a></li>
<li><a href='#color-spaces'>lab65</a></li>
<li><a href='#color-spaces'>lab</a></li>
<li><a href='#color-spaces'>lch65</a></li>
<li><a href='#color-spaces'>lch</a></li>
<li><a href='#color-spaces'>lchuv</a></li>
<li><a href='#lerp'>lerp</a></li>
<li><a href='#color-spaces'>lrgb</a></li>
<li><a href='#color-spaces'>luv</a></li>
<li><a href='#mapAlphaDivide'>mapAlphaDivide</a></li>
<li><a href='#mapAlphaMultiply'>mapAlphaMultiply</a></li>
<li><a href='#mapTransferGamma'>mapTransferGamma</a></li>
<li><a href='#mapTransferLinear'>mapTransferLinear</a></li>
<li><a href='#mapper'>mapper</a></li>
<li><a href='#nearest'>nearest</a></li>
<li><a href='#color-spaces'>oklab</a></li>
<li><a href='#color-spaces'>oklch</a></li>
<li><a href='#parse'>parse</a></li>
<li><a href='#color-spaces'>p3</a></li>
<li><a href='#color-spaces'>prophoto</a></li>
<li><a href='#random'>random</a></li>
<li><a href='#color-spaces'>rec2020</a></li>
<li><a href='#color-spaces'>rgb</a></li>
<li><a href='#round'>round</a></li>
<li><a href='#samples'>samples</a></li>
<li><a href='#toGamut'>toGamut</a></li>
<li><a href='#trilerp'>trilerp</a></li>
<li><a href='#unlerp'>unlerp</a></li>
<li><a href='#useMode'>useMode</a></li>
<li><a href='#wcagContrast'>wcagContrast</a></li>
<li><a href='#wcagLuminance'>wcagLuminance</a></li>
<li><a href='#color-spaces'>xyb</a></li>
<li><a href='#color-spaces'>xyz50</a></li>
<li><a href='#color-spaces'>xyz65</a></li>
<li><a href='#color-spaces'>yiq</a></li>
</ul>
</details>

## Colors are plain objects

Culori does not have a _Color_ class. Instead, it uses plain objects to represent colors:

```js
/* A RGB color */
{
  mode: 'rgb',
  r: 0.1,
  g: 0.2,
  b: 1,
  alpha: 1
}
```

The object needs to have a `mode` property that identifies the color space, and values for each channel in that particular color space (see the [Color Spaces](/color-spaces) page for the channels and ranges expected for each color space). Optionally, the `alpha` property is used for the color's alpha channel.

## Parsing and conversion

<a id="parse" href="#parse">#</a> **parse**(_string_) → _color_ or _undefined_

<span aria-label='Source:'>☞</span> [src/parse.js]({{codebase}}/src/parse.js)

Parses a string and returns the corresponding _color_. The color will be in the matching color space, e.g. RGB for hex strings, HSL for `hsl(…, …, …)` strings, et cetera. If no built-in parsers can match the string, the function will return `undefined`.

```js
import { parse } from 'culori';

/* A named color */
parse('red');
// ⇒ { r: 1, g: 0, b: 0, mode: 'rgb' }

/* A hex color */
parse('#ff0000');
// ⇒ { r: 1, g: 0, b: 0, mode: 'rgb' }

/* A HSL color */
parse('hsl(60 50% 10% / 100%)');
// ⇒ { h: 60, s: 0.5, b: 0.1, alpha: 1, mode: 'hsl' }

/* A Lab color */
parse('lab(100% -50 50)');
// ⇒ { l: 100, a: -50, b: 50, mode: 'lab' }
```

In most cases, instead of using `parse()` directly (which only operates on strings), you'll want to use a [`converter()`](#converter), which accepts strings and color objects and returns objects in a predictable color space.

<a id="converter" href="#converter">#</a> **converter**(_mode = "rgb"_) → _function (color or String)_

<span aria-label='Source:'>☞</span> [src/converter.js]({{codebase}}/src/converter.js)

Returns a _converter_: a function that can convert any color to the _mode_ color space.

```js
import { converter } from 'culori';

let rgb = converter('rgb');
let lab = converter('lab');

rgb('#f0f0f0');
// ⇒ { mode: "rgb", r: 0.49…, g: 0.49…, b: 0.49… }

lab('#f0f0f0');
// ⇒ { mode: "lab", l: 94.79…, a: 0, b: 0 }
```

Converters accept either strings (which will be parsed with `parse()` under the hood) or color objects. If the `mode` key is absent from the color object passed to a converter, it's assumed to be in the converter's color space.

## Formatting

These methods serialize colors to strings, in various formats.

<a id="formatHex" href="#formatHex">#</a> **formatHex**(_color_ or _string_) → _string_

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Returns the hex string for the given color. The color's `alpha` channel is omitted, and the red, green, and blue channels are clamped to the the interval `[0, 255]`, i.e. colors that are not displayable are serialized as if they'd been passed through the `clampRgb` method.

```js
import { formatHex } from 'culori';

formatHex('red');
// ⇒ "#ff0000"
```

<a id="formatHex8" href="#formatHex8">#</a> **formatHex8**(_color_ or _string_) → _string_

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Returns the 8-character hex string for the given color. The red, green, blue, and alpha channels are clamped to the the interval `[0, 255]`, i.e. colors that are not displayable are serialized as if they'd been passed through the `clampRgb` method.

```js
import { formatHex8 } from 'culori';

formatHex8({ mode: 'rgb', r: 1, g: 0, b: 0, alpha: 0.5 });
// ⇒ "#ff000080"
```

<a id="formatRgb" href="#formatRgb">#</a> **formatRgb**(_color_ or _string_) → _string_

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Returns the `rgb(…)` / `rgba(…)` string for the given color. Fully opaque colors will be serialized as `rgb()`, and semi-transparent colors as `rgba()`, in accordance with the [CSSOM standard serialization](https://drafts.csswg.org/cssom/#serialize-a-css-component-value). Like in the case of `formatHex`, the red, green, and blue channels are clamped to the interval `[0, 255]`.

```js
import { formatRgb } from 'culori';

formatRgb('lab(50 0 0 / 25%)');
// ⇒ "rgba(119, 119, 119, 0.25)"
```

<a id="formatHsl" href="#formatHsl">#</a> **formatHsl**(_color_ or _string_) → _string_

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Returns the `hsl(…)` / `hsla(…)` string for the given color. Fully opaque colors will be serialized as `hsl()`, and semi-transparent colors as `hsla()`. All values are rounded to a precision of two digits. The Saturation and Lightness are clamped to the interval `[0%, 100%]`.

```js
import { formatHsl } from 'culori';

formatHsl('lab(50 0 0 / 25%)');
// ⇒ 'hsla(194.33, 0%, 46.63%, 0.25)'
```

<a id="formatCss" href="#formatCss">#</a> **formatCss**(_color_ or _string_) → _string_

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Returns a CSS string for the given color, based on the CSS Color Level 4 specification. A few color spaces, such as `hsl` or `lab`, have their own functional representation in CSS. We use that whenever possible; the `hsl` color space is represented as `hsl(h% s l / alpha)`. Predefined color spaces are represented using the `color()` notation with the appropriate identifier for the color space, e.g. `color(display-p3 r g b / alpha)`. All other colors paces use the `color()` notation with a dashed identifier. For example, `jab` is represented as `color(--jzazbz j a b / alpha)`.

You can find the exact string produced for each color space under the _Serialized as_ entry on the [Color Spaces](/color-spaces) page.

Channel values are serialized as-is, with no change in the precision. To avoid compatibility issues, sRGB colors are represented as `color(srgb r g b / alpha)` rather than `rgb(r, g, b, alpha)`. For the latter, use the [`formatRgb()`](#formatRgb) method instead.

An alpha of exactly `1` is omitted from the representation.

**Note:** The strings returned by these methods are not widely supported in current browsers and should not be used in CSS as-is.

```js
import { formatCss } from 'culori';

/* 
	A mode with its own function notation.
*/
formatCss({ mode: 'hsl', h: 30, s: 1, l: 0.5, alpha: 0.5 });
// ⇒ 'hsl(30 100% 50% / 0.5)'

/*
	A predefined color space.
 */
formatCss({ mode: 'p3', r: 0.5, s: 0.25, b: 1, alpha: 1 });
// ⇒ 'color(display-p3 0.5 0.25 1)'

/*
	sRGB colors.
 */
formatCss({ mode: 'rgb', r: 0.5, s: 0.25, b: 1, alpha: 0.25 });
// ⇒ 'color(srgb 0.5 0.25 1 / 0.25)'

/*
	A custom color space.
 */
formatCss({ mode: 'lrgb', r: 0.5, s: 0.25, b: 1, alpha: 0.25 });
// ⇒ 'color(--srgb-linear 0.5 0.25 1 / 0.25)'
```

## Gamut mapping

Some color spaces (Lab and LCh in particular) allow you to express colors that can't be displayed on-screen. The methods below allow you to identify when that's the case and to produce displayable versions of the colors.

<a id="inGamut" href="#inGamut">#</a> **inGamut**(_mode = "rgb"_) → _function (color | string)_

<span aria-label='Source:'>☞</span> [src/clamp.js]({{codebase}}/src/clamp.js)

Given a color space, returns a function with which to check whether a particular color is within the gamut of that color space. 

This is meant to be used with RGB-based color spaces and their derivates (`hsl`, `hsv`, etc.). If the color space has no gamut limits, the function will always return `true`, regardless of the color passed to it. To find out which color spaces have gamut limits, see the [Color Spaces](/color-spaces/) page.

```js
import { inGamut } from 'culori';

const inRgb = inGamut('rgb');

inRgb('red');
// ⇒ true

inRgb('color(srgb 1.1 0 0)');
// ⇒ false
```

<a id="displayable" href="#displayable">#</a> **displayable**(_color_ or _string_) → _boolean_

<span aria-label='Source:'>☞</span> [src/clamp.js]({{codebase}}/src/clamp.js)

Checks whether a particular color fits inside the sRGB gamut. Equivalent to `inGamut('rgb')`.

```js
import { displayable } from 'culori';

displayable('red');
// ⇒ true

displayable('color(srgb 1.1 0 0)');
// ⇒ false
```

<a id="clampRgb" href="#clampRgb">#</a> **clampRgb**(_color_ or _string_) → _color_

<span aria-label='Source:'>☞</span> [src/clamp.js]({{codebase}}/src/clamp.js)

Obtains a displayable version of the color by clamping the `r`, `g`, `b` channel values of the color's RGB representation to the interval `[0, 1]`. The returned color is in the same color space as the original color.

This is the faster, simpler, way to make a color displayable. It's what browsers do when you use a CSS color whose channels exceed the gamut. For example, `rgb(300 100 200)` is interpreted as `rgb(255 100 200)`.

Because clamping individual red, green, and blue values independently can alter their proportions in the final color, it often changes the color's hue.

```js
import { clampRgb } from 'culori';

// RGB clamping:
clampRgb('lab(50% 100 100)');
// ⇒ { mode: "lab", l: 54.29…, a: 80.81…, b: 69.88… }
```

<a id="clampGamut" href="#clampGamut">#</a> **clampGamut**(_mode = 'rgb'_) → _function(color | string)_

This function extends the functionality of `clampRgb` to other color spaces. Given a color space, it returns a function with which to obtain colors within the gamut of that color space. 

If the color space has no gamut limits, colors are returned unchanged. To find out which color spaces have gamut limits, see the [Color Spaces](/color-spaces/) page.

The in-gamut color is always returned in the color space of the original color.

```js
import { formatCss, clampGamut } from 'culori';

const crimson = 'color(display-p3 0.8 0.1 0.3)';
const toRgb = clampGamut('rgb');

formatCss(toRgb(crimson));
// ⇒ 'color(display-p3 0.801… 0.169… 0.302…)'
```

<span aria-label='Source:'>☞</span> [src/clamp.js]({{codebase}}/src/clamp.js)

<a id="clampChroma" href="#clampChroma">#</a> **clampChroma**(_color_ or _string_, _mode = 'lch'_, _rgbGamut = 'rgb'_) → _color_

<span aria-label='Source:'>☞</span> [src/clamp.js]({{codebase}}/src/clamp.js)

Obtains a displayable version of the color by converting it to a temporary color space containing a Chroma channel, then looking for the closest Chroma value that's displayable for the given Lightness and Hue. Compared to `clampRgb`, the function has the advantage of preserving the hue of the original color. The displayable color returned by this function will be converted back to the original color space.

```js
import { clampChroma } from 'culori';

clampChroma('lab(50% 100 100)');
// ⇒ { mode: 'lab', l:50.00…, a: 63.11…, b: 63.11… }
```

By default, the color is converted to `lch` to perform the clamping, but any color space that contains a Chroma dimension can be used by sending an explicit `mode` argument.

Likewise, the destination RGB gamut can be overriden with the corresponding parameter.

```js
import { clampChroma } from 'culori';

clampChroma({ mode: 'oklch', l: 0.5, c: 0.16, h: 180 }, 'oklch');
// ⇒ { mode: 'oklch', l: 0.5, c: 0.09, h: 180 }
```

In general, chroma clamping is more accurate and computationally simpler when performed in the color's original space, where possible. Here's some sample code that uses the color's own `mode` for color spaces containing a Chroma dimension, and `lch` otherwise:

```js
import { clampChroma } from 'culori';

clampChroma(color, color.c !== undefined ? color.mode : 'lch');
```

If the chroma-finding algorithm fails to find a displayable color (which can happen when not even the achromatic version, with `Chroma = 0`, is displayable), the method falls back to the `clampRgb` method, as a last resort.

The function uses [the bisection method](https://en.wikipedia.org/wiki/Bisection_method) to speed up the search for the largest Chroma value. However, due to discontinuities in the CIELCh color space, the function is not guaranteed to return the optimal result. [See this discussion](https://github.com/d3/d3-color/issues/33) for details.

<a id="toGamut" href="#toGamut">#</a> **toGamut**(_dest = 'rgb'_, _mode = 'oklch'_, _delta = differenceEuclidean('oklch')_, _jnd = 0.02_) → _function (color | string)_

<span aria-label='Source:'>☞</span> [src/clamp.js]({{codebase}}/src/clamp.js)

Obtain a color that's in the `dest` gamut, by first converting it to the `mode` color space and then finding the largest chroma that's in gamut, similar to `clampChroma()`.

The color returned is in the `dest` color space.

```js
import { p3, toGamut } from 'culori';

const color = 'lch(80% 150 60)';

p3(color);
// ⇒ { mode: "p3", r: 1.229…, g: 0.547…, b: -0.073… }

const toP3 = toGamut('p3');
toP3(color);
// ⇒ { mode: "p3", r: 0.999…, g: 0.696…, b: 0.508… }
```

To address the shortcomings of `clampChroma`, which can sometimes produce colors more desaturated than necessary, the test used in the binary search is replaced with “is color is roughly in gamut”, by comparing the candidate to the clipped version (obtained with `clampGamut`). The test passes if the colors are not to dissimilar, judged by the `delta` color difference function and an associated `jnd` just-noticeable difference value.

The default arguments for this function correspond to [the gamut mapping algorithm](https://drafts.csswg.org/css-color/#css-gamut-mapping) defined in the CSS Color Module Level 4 spec, but the algorithm itself is slightly different.

The “roughly in gamut” aspect of the algorithm can be disabled by passing `null` for the `delta` color difference function:

```js
import { toGamut } from 'culori';
const clampToP3 = toGamut('p3', 'oklch', null);
```

## Interpolation

In any color space, colors occupy positions given by their values for each channel. Interpolating colors means tracing a line through the coordinates of these colors, and figuring out what colors reside on the line at various positions.

<img src='{{"/img/red-blue.png" | url }}' height='20' alt='red and blue, linearly interpolated'/>

Above is the path between red and blue in the RGB color space. Going from left to right, we start at red and steadily blend in more and more blue as we progress, until the color is fully blue at destination. This is a _linear interpolation_ between two colors.

<a id="interpolate" href="#interpolate">#</a> **interpolate**(_colors_, _mode = "rgb"_, _overrides_)

<span aria-label='Source:'>☞</span> [src/interpolate/interpolate.js]({{codebase}}/src/interpolate/interpolate.js)

Returns an _interpolator_ in the _mode_ color space for an array of _colors_. The interpolator is a function that accepts a value _t_ in the interval `[0, 1]` and returns the interpolated color in the _mode_ color space.

The colors in the array can be in any color space, or they can even be strings.

```js
import { interpolate } from 'culori';

let grays = interpolate(['#fff', '#000']);
grays(0.5);
// ⇒ { mode: 'rgb', r: 0.5, g: 0.5, b: 0.5 }
```

By default, colors in all spaces are interpolated linearly across all channels. You can override the way specific channels are interpolated with the _overrides_ object, the third argument of `interpolate()`.

```js
import { interpolate, interpolatorSplineBasis } from 'culori';

let my_interpolator = interpolate(['blue', 'red'], 'lch', {
	// spline instead of linear interpolation:
	h: interpolatorSplineBasis
});
```

There are a few interpolation methods available, listed below. Depending on the channel, the numeric values can be interpreted/interpolated in various _modes_. The hue channel, for example, is interpolated by taking into account the _shortest path around the hue circle_ (`fixupHue`). And the `fixupAlpha` mode assumes an _undefined_ alpha is `1`.

### Color stop positions

You can specify positions of color stops to interpolate in the way they're defined in the [CSS Images Module Level 4][css-images-4] specification:

```js
import { interpolate } from 'culori';

interpolate(['red', ['green', 0.25], 'blue']);
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
import { interpolate } from 'culori';

const easeIn = t => t * t;
interpolate(['red', easeIn, 'green']);
```

Any function in the _colors_ array will be interpreted as an easing function, which is (for our purposes), a function that takes an argument `t ∈ [0, 1]` and returns a value `v ∈ [0, 1]`.

To apply the same easing function between all color pairs, instead of individual ones, add the easing as the first element in the array:

```js
import { interpolate } from 'culori';

const easeIn = t => t * t;

// this form:
interpolate([easeIn, 'red', 'green', 'blue']);

// is equivalent to:
interpolate(['red', easeIn, 'green', easeIn, 'blue']);
```

The easing function can alternatively be applied the hard way:

```js
import { interpolate, interpolatorPiecewise, lerp } from 'culori';

const easeIn = t => t * t;

interpolate(
	['red', 'green', 'blue'],
	'rgb',
	interpolatorPiecewise((a, b, t) => lerp(a, b)(easeIn(t)))
);
```

This formula can be helpful if you wanted to apply a different easing function per channel:

```js
import { interpolate, interpolatorPiecewise, lerp } from 'culori';
function piecewiseEasing(easingFn) {
	return interpolatorPiecewise((a, b, t) => lerp(a, b)(easingFn(t)));
}

interpolate(['red', 'green', 'blue'], 'rgb', {
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
import { interpolate } from 'culori';

// interpolation hint:
interpolate(['red', 0.25, 'green']);
```

As opposed to how current browsers implement the CSS spec ([see discussion](https://github.com/w3c/csswg-drafts/issues/3931)), interpolation hints _do not_ affect color stop positions in Culori.

<h3 id='built-in-easing-functions'>Built-in easing functions</h3>

<a id="easingMidpoint" href="#easingMidpoint">#</a> **easingMidpoint**(_H = 0.5_)

<span aria-label='Source:'>☞</span> [src/easing/midpoint.js]({{codebase}}/src/easing/midpoint.js)

[Proposed here][midpoint], the `midpoint` easing function lets you shift the midpoint of a gradient like in tools such as Adobe Photoshop. You can use it with [`interpolate()`](#interpolate) as an alternative to interpolation hints:

```js
import { interpolate, easingMidpoint } from 'culori';
// Explicit midpoint easing:
interpolate(['red', easingMidpoint(0.25), 'blue']);

// ...is equivalent to:
interpolate(['red', 0.25, 'blue']);
```

<a id="easingSmoothstep" href="#easingSmoothstep">#</a> **easingSmoothstep**

<span aria-label='Source:'>☞</span> [src/easing/smoothstep.js]({{codebase}}/src/easing/smoothstep.js)

The [Smoothstep][smoothstep] easing function.

<a id="easingSmoothstepInverse" href="#easingSmoothstepInverse">#</a> **easingSmoothstep**

<span aria-label='Source:'>☞</span> [src/easing/smoothstep.js]({{codebase}}/src/easing/smoothstep.js)

The inverse of the [Smoothstep][smoothstep] easing function.

<a id="easingSmootherstep" href="#easingSmootherstep">#</a> **easingSmootherstep**

<span aria-label='Source:'>☞</span> [src/easing/smootherstep.js]({{codebase}}/src/easing/smootherstep.js)

Smootherstep is a variant of the [Smoothstep][smoothstep] easing function.

<a id="easingInOutSine" href="#easingInOutSine">#</a> **easingInOutSine**

<span aria-label='Source:'>☞</span> [src/easing/inOutSine.js]({{codebase}}/src/easing/inOutSine.js)

Sinusoidal in-out easing. Can be used to create, for example, a cosine interpolation [as described by Paul Bourke](http://paulbourke.net/miscellaneous/interpolation/):

```js
import { interpolate, easingInOutSine } from 'culori';
interpolate([easingInOutSine, 'red', 'green', 'blue']);
```

<a id="easingGamma" href="#easingGamma">#</a> **easingGamma**(_γ = 1_) → _function(t)_

<span aria-label='Source:'>☞</span> [src/easing/gamma.js]({{codebase}}/src/easing/gamma.js)

The [gamma](https://en.wikipedia.org/wiki/Gamma_correction) easing.

```js
import { samples, easingGamma } from 'culori';
samples(5).map(easingGamma(2));
// ⇒ [0, 0.0625, 0.25, 0.5625, 1]
```

### Interpolation methods

<div class='api-figure-grid'>
<figure>
  <img src='/img/interpolator-linear.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorLinear'>
      <code><strong>interpolatorLinear</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-basis.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineBasis'>
      <code><strong>interpolatorSplineBasis</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-basis-closed.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineBasisClosed'>
      <code><strong>interpolatorSplineBasisClosed</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-natural.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineNatural'>
      <code><strong>interpolatorSplineNatural</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-natural-closed.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineNaturalClosed'>
      <code><strong>interpolatorSplineNaturalClosed</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-monotone.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineMonotone'>
      <code><strong>interpolatorSplineMonotone</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-monotone-2.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineMonotone2'>
      <code><strong>interpolatorSplineMonotone2</strong></code>
    </a>
  </figcaption>
</figure>
<figure>
  <img src='/img/interpolator-monotone-closed.svg' width='400' height='80'/>
  <figcaption>
    <a href='#interpolatorSplineMonotoneClosed'>
      <code><strong>interpolatorSplineMonotoneClosed</strong></code>
    </a>
  </figcaption>
</figure>
</div>

You'll use these methods when you want to override how colors get interpolated in a specific color space, or when defining the default interpolation for custom color spaces.

<a id="interpolatorLinear" href="#interpolatorLinear">#</a> **interpolatorLinear**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/linear.js]({{codebase}}/src/interpolate/linear.js)

<img src='/img/interpolator-linear.svg' width='400' height='80'/>

A linear interpolator for values in a channel.

#### Basis splines

[Basis splines](https://en.wikipedia.org/wiki/B-spline) (also called _B-splines_) are available in the following variants:

<a id="interpolatorSplineBasis" href="#interpolatorSplineBasis">#</a> **interpolatorSplineBasis**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineBasis.js]({{codebase}}/src/interpolate/splineBasis.js)

<img src='/img/interpolator-basis.svg' width='400' height='80'/>

A basis spline which uses one-sided finite differences for the slopes at the boundaries.

<a id="interpolatorSplineBasisClosed" href="#interpolatorSplineBasisClosed">#</a> **interpolatorSplineBasisClosed**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineBasis.js]({{codebase}}/src/interpolate/splineBasis.js)

<img src='/img/interpolator-basis-closed.svg' width='400' height='80'/>

A basis spline which considers the _values_ array to be periodic.

#### Natural splines

[Natural interpolating splines](https://en.wikipedia.org/wiki/Spline_interpolation) are related to basis splines, as explained in [this handout](https://www.math.ucla.edu/~baker/149.1.02w/handouts/dd_splines.pdf) by Kirby A. Baker (sections 4 and 5).

<a id="interpolatorSplineNatural" href="#interpolatorSplineNatural">#</a> **interpolatorSplineNatural**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineNatural.js]({{codebase}}/src/interpolate/splineNatural.js)

<img src='/img/interpolator-natural.svg' width='400' height='80'/>

A natural spline which uses one-sided finite differences for the slopes at the boundaries.

<a id="interpolatorSplineNaturalClosed" href="#interpolatorSplineNaturalClosed">#</a> **interpolatorSplineNaturalClosed**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineNatural.js]({{codebase}}/src/interpolate/splineNatural.js)

<img src='/img/interpolator-natural-closed.svg' width='400' height='80'/>

A natural spline which considers the _values_ array to be periodic.

#### Monotone splines

The monotone splines are based on the following paper (via [d3-shape](https://github.com/d3/d3-shape)):

> Steffen, M. [_"A simple method for monotonic interpolation in one dimension."_](https://ui.adsabs.harvard.edu/abs/1990A&A...239..443S) in Astronomy and Astrophysics, Vol. 239, p. 443-450 (Nov. 1990), Provided by the SAO/NASA Astrophysics Data System.

The following variants are available:

<a id="interpolatorSplineMonotone" href="#interpolatorSplineMonotone">#</a> **interpolatorSplineMonotone**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineMonotone.js]({{codebase}}/src/interpolate/splineMonotone.js)

<img src='/img/interpolator-monotone.svg' width='400' height='80'/>

A monotone spline that uses one-sided finite differences to find the slopes at the boundaries.

<a id="interpolatorSplineMonotone2" href="#interpolatorSplineMonotone2">#</a> **interpolatorSplineMonotone2**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineMonotone.js]({{codebase}}/src/interpolate/splineMonotone.js)

<img src='/img/interpolator-monotone-2.svg' width='400' height='80'/>

A monotone spline for which we derive the slopes at the boundaries by tracing a parabola through the first/last three values.

<a id="interpolatorSplineMonotoneClosed" href="#interpolatorSplineMonotoneClosed">#</a> **interpolatorSplineMonotoneClosed**(_values_)

<span aria-label='Source:'>☞</span> [src/interpolate/splineMonotone.js]({{codebase}}/src/interpolate/splineMonotone.js)

<img src='/img/interpolator-monotone-closed.svg' width='400' height='80'/>

A monotone spline which considers the _values_ array to be periodic.

#### Custom piecewise interpolation

<a id='interpolatorPiecewise' href='#interpolatorPiecewise'>#</a> **interpolatorPiecewise**(_interpolator_) [src/interpolate/piecewise.js]({{codebase}}/src/interpolate/piecewise.js)

Use a custom piecewise interpolator function in the form `function (a, b, t) => value`:

```js
import { interpolate, interpolatorPiecewise } from 'culori';

let linear = (a, b, t) => (1 - t) * a + t * b;
interpolate(['red', 'green'], interpolatorPiecewise(linear));
```

When one of the two values to be interpolated is undefined, it will mirror the defined value: `[undefined, b]` becomes `[b, b]`. If both values are undefined, they are left as-is.

The [`interpolatorLinear()`](#interpolatorLinear) function uses `interpolatorPiecewise()` under the hood.

### Interpolation Fixup

By default, channel values that need to be interpolated are treated as normal numbers. However, for some channels, the values hold special singificance and can be fixed up before interpolation for better results.

#### Hue fixup

Hue is a circular value, so there are two directions in which to interpolate between two hues (clockwise and anti-clockwise). The functions below take an array of hues and adjusts them to impose a certain interpolation direction while maintaining the absolute difference between consecutive hues.

Adjusted hues will not necessarily be in the `[0, 360)` interval. All fixup methods leave undefined values, and the values immediately following them, unaltered. The names of the methods come from [this discussion](https://github.com/w3c/csswg-drafts/issues/4735).

<a id="fixupHueShorter" href="#fixupHueShorter">#</a> **fixupHueShorter**(_values_) → _Array_

<span aria-label='Source:'>☞</span> [src/fixup/hue.js]({{codebase}}/src/fixup/hue.js)

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
import { interpolate } from 'culori';

let hsl_long = interpolate(['blue', 'red', 'green'], 'hsl', {
	h: {
		fixup: arr => arr
	}
});
```

Treating the hues array as-is (with an _identity function_) corresponds to the `specified` fixup method [in the CSSWG issue](https://github.com/w3c/csswg-drafts/issues/4735) mentioned earlier.

<a id="fixupHueLonger" href="#fixupHueLonger">#</a> **fixupHueLonger**(_values_) → _Array_

<span aria-label='Source:'>☞</span> [src/fixup/hue.js]({{codebase}}/src/fixup/hue.js)

Adjusts the hues so that they are interpolated along the _longest path around the hue circle_.

<a id="fixupHueIncreasing" href="#fixupHueIncreasing">#</a> **fixupHueIncreasing**(_values_) → _Array_

<span aria-label='Source:'>☞</span> [src/fixup/hue.js]({{codebase}}/src/fixup/hue.js)

Adjusts the hues so that every hue is larger than the previous.

<a id="fixupHueDecreasing" href="#fixupHueDecreasing">#</a> **fixupHueDecreasing**(_values_) → _Array_

<span aria-label='Source:'>☞</span> [src/fixup/hue.js]({{codebase}}/src/fixup/hue.js)

Adjusts the hues so that every hue is smaller than the previous.

#### Alpha fixup

<a id="fixupAlpha" href="#fixupAlpha">#</a> **fixupAlpha**(_values_) → _Array_

<span aria-label='Source:'>☞</span> [src/fixup/alpha.js]({{codebase}}/src/fixup/alpha.js)

Turns all `undefined` values in the array to `1` (full opacity), unless _all_ values in the array are `undefined`, in which case it leaves the values unaltered.

This is the default method for the alpha channel in all built-in color spaces.

### Evenly-spaced samples

<a id="samples" href="#samples">#</a> **samples**(_n = 2_)

<span aria-label='Source:'>☞</span> [src/samples.js]({{codebase}}/src/samples.js)

Returns an array of _n_ equally-spaced samples in the `[0, 1]` range, with `0` and `1` at the ends.

```js
import { samples } from 'culori';

samples(3);
// ⇒ [0, 0.5, 1]

samples(5);
// ⇒ [0, 0.25, 0.5, 0.75, 1]
```

The samples are useful for [`interpolate()`](#interpolate) to generate color scales:

```js
import { samples, interpolate, formatHex } from 'culori';

let grays = interpolate(['#fff', '#000']);
samples(5).map(grays).map(formatHex);
// ⇒ ["#ffffff", "#bfbfbf", "#808080", "#404040", "#000000"]
```

As with the [`interpolate()`](#interpolate) method, you can map the samples through an easing function or scale to obtain a different distribution of the samples.

```js
import { samples } from 'culori';
import easing from 'bezier-easing';

// Bezier easing:
let bezier = easing(0, 0, 1, 0.5);
samples(10).map(bezier);

// easeInQuad:
samples(10).map(t => t * t);
```

### Lerp

<a id="lerp" href="#lerp">#</a> **lerp**(_a_, _b_, _t_) → _value_

<span aria-label='Source:'>☞</span> [src/interpolate/lerp.js]({{codebase}}/src/interpolate/lerp.js)

Interpolates between the values `a` and `b` at the point `t ∈ [0, 1]`.

```js
import { lerp } from 'culori';
lerp(5, 10, 0.5);
// ⇒ 7.5
```

<a id="unlerp" href="#unlerp">#</a> **unlerp**(_a_, _b_, _v_) → _value_

<span aria-label='Source:'>☞</span> [src/interpolate/lerp.js]({{codebase}}/src/interpolate/lerp.js)

Returns the point `t` at which the value `v` is located between the values `a` and `b`. The inverse of `lerp`.

<a id="blerp" href="#blerp">#</a> **blerp**(_a00_, _a01_, _a10_, _a11_, _tx_, _ty_) → _value_

<span aria-label='Source:'>☞</span> [src/interpolate/lerp.js]({{codebase}}/src/interpolate/lerp.js)

Perform the [bilinear interpolation](https://en.wikipedia.org/wiki/Bilinear_interpolation) of the four values `a00`, `a01`, `a10`, and `a11` at the point `(tx, ty)`, with `tx, ty ∈ [0, 1]`. This is the extension of `lerp` to two dimensions.

<a id="trilerp" href="#trilerp">#</a> **trilerp**(_a000_, _a010_, _a100_, _a110_, _a001_, _a011_, _a101_, _a111_, _tx_, _ty_, _tz_) → _value_

<span aria-label='Source:'>☞</span> [src/interpolate/lerp.js]({{codebase}}/src/interpolate/lerp.js)

Perform the [trilinear interpolation](https://en.wikipedia.org/wiki/Trilinear_interpolation) of the eight values `a000`, `a010`, `a100`, `a110`, `a001`, `a011`, `a101`, and `a111` at the point `(tx, ty, tz)`, with `tx, ty, tz ∈ [0, 1]`. This is the extension of `lerp` to three dimensions.

### Mappings

<a id="mapper" href="#mapper">#</a> **mapper**(_fn_, _mode = "rgb"_) → _function (color | string)_

<span aria-label='Source:'>☞</span> [src/map.js]({{codebase}}/src/map.js)

Creates a mapping that applies _fn_ on each channel of the color in the _mode_ color space.

The resulting function accepts a single argument (a color object or a string), which it converts to the _mode_ color space if necessary.

The _mode_ parameter can be set to `null`, in which case the mapper will iterate through the channels in the color's original color space.

The _fn_ callback has the following signature:

**fn**(_value_, _channel_, _color_, _mode_)

where:

-   `value` is the current value;
-   `channel` is the current channel;
-   `color` is a reference to the entire color object;
-   `mode` is forwarded from the call to `mapper`.

Here's the implementation of alpha premultiplication:

```js
import { mapper } from 'culori';

const multiplyAlpha = mapper((val, ch, color) => {
	if (ch !== 'alpha') {
		return (val || 0) / (color.alpha !== undefined ? color.alpha : 1);
	}
	return val;
}, 'rgb');

multiplyAlpha({ r: 1, g: 0.6, b: 0.4, a: 0.5 });
// ⇒ { mode: 'rgb', r: 0.5, g: 0.3, b: 0.2, a: 0.5 }
```

All channels, including `alpha`, are included in the mapping. You may want to handle the `alpha` channel differently in the callback function, like in the example above.

Returning `undefined` or `NaN` from the callback function will omit that channel from the resulting color object.

#### Built-in mappings

<a id="mapAlphaMultiply" href="#mapAlphaMultiply">#</a> **mapAlphaMultiply**

<span aria-label='Source:'>☞</span> [src/map.js]({{codebase}}/src/map.js)

Multiplies the color's alpha value into all its other channels:

```js
import { mapper, mapAlphaMultiply } from 'culori';

let multiplyAlpha = mapper(mapAlphaMultiply, 'rgb');
multiplyAlpha({ r: 1, g: 0.6, b: 0.4, a: 0.5 });
// ⇒ { mode: 'rgb', r: 0.5, g: 0.3, b: 0.2, a: 0.5 }
```

Any `undefined` channel value will be considered to be `0` (zero), to enable alpha-premultiplied interpolation with achromatic colors in hue-based color spaces (HSL, LCh, etc.).

<a id="mapAlphaDivide" href="#mapAlphaDivide">#</a> **mapAlphaDivide**

<span aria-label='Source:'>☞</span> [src/map.js]({{codebase}}/src/map.js)

Divides a color's other channels by its alpha value. It's the opposite of `mapAlphaMultiply`, and is used in interpolation with alpha premultiplication:

```js
import { mapper, mapAlphaMultiply, mapAlphaDivide } from 'culori';

let multiplyAlpha = mapper(mapAlphaMultiply, 'rgb');
let divideAlpha = mapper(mapAlphaDivide, 'rgb');

divideAlpha(multiplyAlpha({ r: 1, g: 0.6, b: 0.4, a: 0.5 }));
// ⇒ { mode: 'rgb', r: 1, g: 0.6, b: 0.4, a: 0.5 }
```

Any `undefined` channel value will be considered to be `0` (zero), to enable alpha-premultiplied interpolation with achromatic colors in hue-based color spaces (HSL, LCh, etc.).

<a id="mapTransferLinear" href="#mapTransferLinear">#</a> **mapTransferLinear**(_slope = 1_, _intercept = 0_)

<span aria-label='Source:'>☞</span> [src/map.js]({{codebase}}/src/map.js)

<a id="mapTransferGamma" href="#mapTransferGamma">#</a> **mapTransferGamma**(_amplitude = 1_, _exponent = 1_, _offset = 0_)

<span aria-label='Source:'>☞</span> [src/map.js]({{codebase}}/src/map.js)

#### Interpolating with mappings

<a id="interpolateWith" href="#interpolateWith">#</a> **interpolateWith**(_premap_, _postmap_)

<span aria-label='Source:'>☞</span> [src/interpolate.js]({{codebase}}/src/interpolate.js)

Adds a _pre-mapping_ and a _post-mapping_ to an interpolation, to enable things like alpha premultiplication:

```js
import { interpolateWith, mapAlphaMultiply, mapAlphaDivide } from 'culori';

let interpolateWithAlphaPremult = interpolateWith(
	mapAlphaMultiply,
	mapAlphaDivide
);

interpolateWithAlphaPremult(['red', 'transparent', 'blue'])(0.25);
```

To chain more than one mapping:

```js
import { interpolateWith, mapAlphaMultiply, mapAlphaDivide } from 'culori';

const mapChromaMultiply = (v, ch, c, mode) => {
	// ...
};

const mapChromaDivide = (v, ch, c, mode) => {
	// ...
};

let interpolateWithAlphaChromaPremult = interpolateWith(
	(...args) => mapChromaMultiply(mapAlphaMultiply(...args)),
	(...args) => mapAlphaDivide(mapChromaDivide(...args))
);

interpolateWithAlphaPremult(['red', 'transparent', 'blue'])(0.25);
```

<a id="interpolateWithPremultipliedAlpha" href="#interpolateWithPremultipliedAlpha">#</a> **interpolateWithPremultipliedAlpha**(_colors_, _mode = "rgb"_, _overrides_)

<span aria-label='Source:'>☞</span> [src/interpolate.js]({{codebase}}/src/interpolate.js)

Takes the same arguments as [`interpolate()`](#interpolate), but applies [alpha premultiplication](https://drafts.csswg.org/css-images-4/#premultiplied).

```js
import { interpolate, interpolateWithPremultipliedAlpha } from 'culori';
let colors = ['red', 'transparent', 'blue'];

// alpha ignored for the R/G/B channels:
interpolate(colors, 'rgb');

// alpha premultiplied into the R/G/B channels:
interpolateWithPremultipliedAlpha(colors, 'rgb');
```

## Color Difference

These methods are concerned to finding the [distance between two colors](https://en.wikipedia.org/wiki/Color_difference) based on various formulas. Each of these formulas will return a _function (colorA, colorB)_ that lets you measure the distance between two colors.

### Euclidean distance

<a id="differenceEuclidean" href="#differenceEuclidean">#</a> **differenceEuclidean**(_mode = 'rgb'_, _weights = [1, 1, 1, 0]_)

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Returns a [Euclidean distance](https://en.wikipedia.org/wiki/Color_difference#Euclidean) function in a certain color space.

You can optionally assign different weights to the channels in the color space. See, for example, the [Kotsarenko/Ramos distance](#differenceKotsarenkoRamos) or [ΔE<sub>ITP</sub>](#differenceItp).

The default weights `[1, 1, 1, 0]` mean that the _alpha_, which is the fourth channel in all the color spaces Culori defines, is not taken into account. Send `[1, 1, 1, 1]` as the weights to include it in the computation.

In cylindrical spaces, the hue is factored into the Euclidean distance in a variety of ways. The functions below are used internally:

<a id="differenceHueChroma" href="#differenceHueChroma">#</a> **differenceHueChroma**(_colorA_, _colorB_)

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the hue contribution as the geometric mean of chord lengths belonging to the chromas of the two colors. This is the handling of hue in cylindrical forms of CIE-related color spaces: `lch`, `lchuv`, `dlch`, `oklch`, `jch`.

<a id="differenceHueSaturation" href="#differenceHueSaturation">#</a> **differenceHueSaturation**(_colorA_, _colorB_)

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the hue contribution as the geometric mean of chord lengths belonging to the saturations of the two colors. This is the handling of hue in the HSL / HSV / HSI family of color spaces.

<a id="differenceHueNaive" href="#differenceHueNaive">#</a> **differenceHueNaive**(_colorA_, _colorB_)

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

For remaining color spaces (HWB), we consider hues numbers, but apply a _shortest path around the hue circle_ (analogous to [`fixupHueShorter`](#fixupHueShorter)). If you insist on using Euclidean distances on these spaces, you can use the `weights` to control the contribution of the hue difference towards the total difference.

### CIE color difference formulas

All these color difference functions operate on the `lab65` color space.

<a id="differenceCie76" href="#differenceCie76">#</a> **differenceCie76**()

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [CIE76][cie76] ΔE\*<sub>ab</sub> color difference between the colors _a_ and _b_. The function is identical to [`differenceEuclidean('lab65')`](#differenceEuclidean).

<a id="differenceCie94" href="#differenceCie94">#</a> **differenceCie94**(_kL = 1_, _K1 = 0.045_, _K2 = 0.015_)

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [CIE94][cie94] ΔE\*<sub>94</sub> color difference between the colors _a_ and _b_.

<a id="differenceCiede2000" href="#differenceCiede2000">#</a> **differenceCiede2000**(_Kl = 1_, _Kc = 1_, _Kh = 1_)

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [CIEDE2000][ciede2000] ΔE\*<sub>00</sub> color difference between the colors _a_ and _b_ as implemented by [G. Sharma](http://www2.ece.rochester.edu/~gsharma/ciede2000/).

<a id="differenceCmc" href="#differenceCmc">#</a> **differenceCmc**()

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [CMC l:c (1984)][cmc] ΔE\*<sub>CMC</sub> color difference between the colors _a_ and _b_.

ΔE\*<sub>CMC</sub> is not considered a metric since it's not symmetrical, that is the distance from _a_ to _b_ is not always equal to the distance from _b_ to _a_. Therefore it cannot be reliably used with [`nearest()`](#nearest).

<a id="differenceHyab" href="#differenceHyab">#</a> **differenceHyab**()

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the HyAB color difference between the colors _a_ and _b_, as proposed in:

> Abasi S, Amani Tehran M, Fairchild MD. _Distance metrics for very large color differences._ Color Res Appl. 2019; 1–16. https://doi.org/10.1002/col.22451 ([PDF](http://markfairchild.org/PDFs/PAP40.pdf))

The HyAB formula combines the Euclidean and [city block](https://en.wikipedia.org/wiki/Taxicab_geometry) distance and has been experimentally shown to work better for large color differences than CIEDE2000, while still holding up well for smaller color differences, making it a _"good candidate formula for image processing and computer vision applications"_.

### Other difference formulas

<a id="differenceDin99o" href="#differenceDin99o">#</a> **differenceDin99o**()

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [DIN99o][din99ode] ΔE\*<sub>99o</sub> color difference between the colors _a_ and _b_. The computation is done in the `dlab` color space.

<a id="differenceKotsarenkoRamos" href="#differenceKotsarenkoRamos">#</a> **differenceKotsarenkoRamos**()

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [Kotsarenko/Ramos][kotsarekno-ramos] color difference between the colors _a_ and _b_. This is a weighted Euclidean distance in the `yiq` color space.

<a id="differenceItp" href="#differenceItp">#</a> **differenceItp**()

<span aria-label='Source:'>☞</span> [src/difference.js]({{codebase}}/src/difference.js)

Computes the [ΔE<sub>ITP</sub>][eitp-difference] color difference metric between the colors _a_ and _b_. This is a weighted Euclidean distance in the `itp` color space, scaled by a factor of 720 so that a the just-noticeable difference (<abbr>JND</abbr>) corresponds to a value of 1.

### Nearest color(s)

<a id="nearest" href="#nearest">#</a> **nearest**(_colors_, _metric = differenceEuclidean()_, _accessor = identity_) → _function(color, n = 1, τ = Infinity)_

<span aria-label='Source:'>☞</span> [src/nearest.js]({{codebase}}/src/nearest.js)

Takes a _colors_ array and a _metric_ color difference formula, and returns a function with which you can find _n_ colors nearest to _color_, with a maximum distance of _τ_. Use _n = Infinity_ to get all colors in the array with a maximum distance of _τ_.

```js
/*
	Example: get three CSS named colors closest to any color
 */
import { colorsNamed, nearest, differenceCiede2000 } from 'culori';

let colors = Object.keys(colorsNamed);
let nearestNamedColors = nearest(colors, differenceCiede2000());

nearestNamedColors('lch(50% 70 60)', 3);
// => ["chocolate", "sienna", "peru"]
```

By default, _colors_ needs to be an array of color values. If your array contains something other than a simple color value, you can provide the `accessor` argument to point to the color value associated with each item in the array.

The example below shows a common data structure for a color palette: an object whose keys are the names and whose values are their associated color representations.

```js
import { nearest, differenceEuclidean } from 'culori';

/*
	Example: get the closest color from a palette
 */
let palette = {
	Burgundy: '#914e72',
	Blue: '#0078bf',
	Green: '#00a95c',
	'Medium Blue': '#3255a4',
	'Bright Red': '#f15060'
};

let names = Object.keys(palette);

let nearestColors = nearest(
	names,
	differenceEuclidean(),
	name => palette[name]
);

nearestColors('red', 1);
// => ["Bright Red"]
```

## Blending

Culori makes available the separable blend modes defined in the W3C [Compositing and Blending Level 2](https://drafts.fxtf.org/compositing-2/) specification.

<a id="blend" href="#blend">#</a> **blend**(_colors_, _type = 'normal'_, _mode = 'rgb'_) → _color_

<span aria-label='Source:'>☞</span> [src/blend.js]({{codebase}}/src/blend.js)

A separable blend mode is a simple formula that gets applied to each channel in the color space independently. The available blend modes are `color-burn`, `color-dodge`, `darken`, `difference`, `exclusion`, `hard-light`, `lighten`, `multiply`, `normal`, `overlay`, `screen`
, and `soft-light`. They are designed to work on RGB colors, so _mode_ is expected to be `rgb` or `lrgb`.

An example of blending three colors:

```js
import { blend } from 'culori';

blend(
	['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'],
	'screen'
);
// ⇒ { mode: 'rgb', alpha: 0.875, r: 0.57…, g: 0.57…, b:0.57… }
```

In addition to strings, the _type_ parameter supports a _function (b, s) → v_ that takes the values of the _backdrop_ and _source_ color to return the blended value. This allows you to write your own (separable) blending functions. For example, an _average_ blending mode:

```js
import { blend } from 'culori';

blend(['red', 'green'], function average(b, s) {
	return (b + s) / 2;
});
```

The non-separable blend modes — `color`, `hue`, `saturation`, and `lightness` — are not available. The effect which they mean to produce is better obtained with simple formulas on a cylindrical color space (e.g. HSL).

## Average color

<a id="average" href="#average">#</a> **average**(_colors_, _mode = 'rgb'_, _overrides_)

<span aria-label='Source:'>☞</span> [src/average.js]({{codebase}}/src/average.js)

Returns the average color of the _colors_ array, in the color space specified by the _mode_ argument. The color is obtained by the arithmetic average of values on each individual channel.

Colors with undefined values on a channel don't participate in the average for that channel.

```js
import { average } from 'culori';

average(['salmon', 'tomato'], 'lab');
// ⇒ { 'mode': 'lab', l: 65.41…, a: 53.00…, b: 39.01… }
```

<a id="averageNumber" href="#averageNumber">#</a> **averageNumber**(_values_)

<span aria-label='Source:'>☞</span> [src/average.js]({{codebase}}/src/average.js)

The arithmetic mean of values in the _values_ array.

<a id="averageAngle" href="#averageAngle">#</a> **averageAngle**(_values_)

<span aria-label='Source:'>☞</span> [src/average.js]({{codebase}}/src/average.js)

The function used by default to average hue values in all built-in color spaces, using the formula for [the mean of circular quantities](https://en.wikipedia.org/wiki/Mean_of_circular_quantities).

## Random colors

<a id="random" href="#random">#</a> **random**(_mode = 'rgb'_, _constraints = {}_)

<span aria-label='Source:'>☞</span> [src/random.js]({{codebase}}/src/random.js)

Obtain a random color from a particular color space, with optional constraints. The resulting color will be in the color space from where it has been picked.

Basic usage:

```js
import { random } from 'culori';

random();
// ⇒ { mode: 'rgb', r: 0.75, g: 0.12, b: 0.99 }
```

### Specifying constraints

Random colors are, by definition, all over the color space and not all of them will look particularly nice. Some color spaces, such as HSL or HSV, are also biased towards colors close to black and/or white, because of the way these color spaces stretch the RGB cube into cylinders.

For more control on how the colors are generated, you can specify constraints for each individual channel in the color space. Constraints can be either a _constant number_ or an _interval_ from where to pick the channel value:

```js
import { random } from 'culori';

random('hsv', {
	h: 120, // number
	s: [0.25, 0.75] // interval
});
// ⇒ { mode: 'hsv', h: 120, s: 0.51…, v: 0.89… }
```

The _alpha_ channel is excluded by default. To obtain colors with random alpha values, include a constraint for `alpha`:

```js
import { random } from 'culori';

random('lrgb');
// ⇒ { mode: 'lrgb', r: 0.74…, g: 0.15…, b: 0.34… }

random('lrgb', { alpha: [0, 1] });
// ⇒ { mode: 'lrgb', r: 0.33…, g: 0.72…, b: 0.04…, alpha: 0.12… }
```

### Displayable random colors

The value for any channel in the color space for which there are no constraints will be picked from the entire range of that channel. However, some color spaces, such as CIELAB or CIELCH, don't have explicit ranges for certain channels; for these, some approximate ranges [have been pre-computed]({{codebase}}/tools/ranges.js) as the limits of the displayable sRGB gamut.

Even with these ranges in place, a combination of channel values may not be displayable. Check if that's the case with [`displayable()`](#displayable), and pass the color through a [`clamp*`](#clampRgb) function to obtain a displayable version.

## WCAG utilities

A couple of utility functions based on the [Web Content Acccessibility Guidelines 2.0 specification](https://www.w3.org/TR/WCAG20/).

<a id="wcagLuminance" href="#wcagLuminance">#</a> **wcagLuminance**(_color_)

<span aria-label='Source:'>☞</span> [src/wcag.js]({{codebase}}/src/wcag.js)

Computes the [relative luminance](https://www.w3.org/TR/WCAG20/#relativeluminancedef) of a color.

```js
import { wcagLuminance } from 'culori';

wcagLuminance('red');
// ⇒ 0.2126
```

<a id="wcagContrast" href="#wcagContrast">#</a> **wcagContrast**(_colorA_, _colorB_)

<span aria-label='Source:'>☞</span> [src/wcag.js]({{codebase}}/src/wcag.js)

Computes the [contrast ratio](https://www.w3.org/TR/WCAG20/#contrast-ratiodef) between two colors.

```js
import { wcagContrast } from 'culori';

wcagContrast('red', 'black');
// ⇒ 5.252
```

## Filters

Filters apply certain graphical effects to a color. Culori currently implements two sets of filter functions:

### CSS Filter Effects

These correspond to the filter effects defined in the W3C [Filter Effects Module Level 1](https://drafts.fxtf.org/filter-effects-1/) specification.

The _amount_ parameter is usually in the `[0, 1]` interval, but may go above `1` for some filters. The filters were designed for RGB colors, so the _mode_ parameter is expected to be `rgb` or `lrgb`.

The resulting color is returned in the color space of the original color.

<a id="filterBrightness" href="#filterBrightness">#</a> **filterBrightness**(_amount = 1_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`brightness()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/brightness) CSS filter. An _amount_ of `1` leaves the color unchanged. Smaller values darken the color (with `0` being fully black), while larger values brighten it.

```js
import { filterBrightness } from 'culori';

let brighten = filterBrightness(2, 'lrgb');
brighten('salmon');
// ⇒ { mode: 'rgb', r: 1.32…, g: 0.68…, b: 0.61… }
```

<a id="filterContrast" href="#filterContrast">#</a> **filterContrast**(_amount = 1_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`contrast()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/contrast) filter. An _amount_ of `1` leaves the color unchanged. Smaller values decrease the contrast (with `0` being fully gray), while larger values increase it.

<a id="filterSepia" href="#filterSepia">#</a> **filterSepia**(_amount = 1_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`sepia()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/sepia) filter. An _amount_ of `0` leaves the color unchanged, and `1` applies the sepia effect fully.

<a id="filterGrayscale" href="#filterGrayscale">#</a> **filterGrayscale**(_amount = 1_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`grayscale()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/grayscale) filter. An _amount_ of `0` leaves the color unchanged, and `1` makes the color fully achromatic.

<a id="filterSaturate" href="#filterSaturate">#</a> **filterSaturate**(_amount = 1_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`saturate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/saturate) filter. An _amount_ of `1` leaves the color unchanged. Smaller values desaturate the color (with `0` being fully achromatic), while larger values saturate it.

<a id="filterInvert" href="#filterInvert">#</a> **filterInvert**(_amount = 1_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`invert()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/invert) filter. An _amount_ of `0` leaves the color unchanged, and `1` makes the color fully inverted.

<a id="filterHueRotate" href="#filterHueRotate">#</a> **filterHueRotate**(_degrees = 0_, _mode = 'rgb'_)

<span aria-label='Source:'>☞</span> [src/filter.js]({{codebase}}/src/filter.js)

The [`hue-rotate()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/hue-rotate) filter.

```js
import { samples, interpolate, filterSepia, formatHex } from 'culori';

samples(5)
	.map(interpolate(['red', 'green', 'blue']))
	.map(filterSepia(0.5))
	.map(formatHex);

// ⇒ ["#751800", "#664200", "#576c00", "#1a3e82", "#0010ff"];
```

Some of the effects may be obtained more straightforwardly with simple calculations in other color spaces. For example, [hue rotation](#filterHueRotate) can just as well be implemented as `color.h += angle` in a cylindrical color space such as HSL.

### Color vision deficiency (CVD) simulation

Simulate how a color may be perceived by people with color vision deficiencies (CVD).

<a id="filterDeficiencyProt" href="#filterDeficiencyProt">#</a> **filterDeficiencyProt**(_severity = 1_) → _function (color)_

<span aria-label='Source:'>☞</span> [src/deficiency.js]({{codebase}}/src/deficiency.js)

Simulate protanomaly and protanopia. The `severity` parameter is in the interval `[0, 1]`, where `0` corresponds to normal vision and `1` (the default value) corresponds to protanopia.

<a id="filterDeficiencyDeuter" href="#filterDeficiencyDeuter">#</a> **filterDeficiencyDeuter**(_severity = 1_) → _function (color)_

<span aria-label='Source:'>☞</span> [src/deficiency.js]({{codebase}}/src/deficiency.js)

Simulate deuteranomaly and deuteranopia. The `severity` parameter is in the interval `[0, 1]`, where `0` corresponds to normal vision and `1` (the default value) corresponds to deuteranopia.

<a id="filterDeficiencyTrit" href="#filterDeficiencyTrit">#</a> **filterDeficiencyTrit**(_severity = 1_) → _function (color)_

<span aria-label='Source:'>☞</span> [src/deficiency.js]({{codebase}}/src/deficiency.js)

Simuate tritanomaly and tritanopia. The `severity` parameter is in the interval `[0, 1]`, where `0` corresponds to normal vision and `1` (the default value) corresponds to tritanopia.

Examples:

```js
import { interpolate, filterDeficiencyProt, formatHex } from 'culori';
culori
	.samples(5)
	.map(interpolate(['red', 'green', 'blue']))
	.map(filterDeficiencyProt(0.5))
	.map(formatHex);

// ⇒ ["#751800", "#664200", "#576c00", "#1a3e82", "#0010ff"];
```

Based on the work of Machado, Oliveira and Fernandes (2009), using [precomputed matrices](https://www.inf.ufrgs.br/~oliveira/pubs_files/CVD_Simulation/CVD_Simulation.html) provided by the authors. References thanks to the [`colorspace` package for R](http://colorspace.r-forge.r-project.org/reference/simulate_cvd.html).

> G. M. Machado, M. M. Oliveira and L. A. F. Fernandes, _"A Physiologically-based Model for Simulation of Color Vision Deficiency,"_ in IEEE Transactions on Visualization and Computer Graphics, vol. 15, no. 6, pp. 1291-1298, Nov.-Dec. 2009, [doi: 10.1109/TVCG.2009.113](https://doi.ieeecomputersociety.org/10.1109/TVCG.2009.113).

## Miscellaneous

<a id="colorsNamed" href="#colorsNamed">#</a> **colorsNamed**

<span aria-label='Source:'>☞</span> [src/colors/named.js]({{codebase}}/src/colors/named.js)

An object whose keys are all the CSS named colors.

<a id="round" href="#round">#</a> **round**(_n = 8_)

<span aria-label='Source:'>☞</span> [src/round.js]({{codebase}}/src/round.js)

Returns a _rounder_: a function with which to round numbers to at most _n_ digits of precision.

```js
import { round } from 'culori';

let approx = round(4);
approx(0.38393993);
// ⇒ 0.3839
```

<h2 id='color-spaces'>
  <a href='#color-spaces'>#</a>
  Available color spaces
</h2>

The default import (`culori`) comes with all the color spaces pre-registered into the library. For convenience, you can also import directly `mode` as a shortcut to [`converter(mode)`](#converter). For example, instead of [`converter('hsl')`](#converter), you can import `hsl`:

```js
// Instead of this:
import { converter } from 'culori';
const hsl = converter('hsl');

// You can do this:
import { hsl } from 'culori';
```

On the other hand, when importing the [tree-shaken version](/guides/tree-shaking) (`culori/fn`), color spaces need to be registered manually with [`useMode()`](#useMode) based on their __definition object__: 

```js
import { useMode, modeHsl } from 'culori/fn';
const hsl = useMode(modeHsl);
```

The table below summarizes two pieces of information:

* What the `mode` is for a specific color space built into Culori, which is also the name of the shortcut to the converter for that color space.
* What the definition object for a color space is called.

The available color spaces are discussed into more detail on the [Color Spaces](/color-spaces) page.

Mode | Color space | Definition object
---- | ----------- | -----------------
`a98` | A98 RGB color space, compatible with Adobe RGB (1998) | `modeA98`
`cubehelix` | Cubehelix color space | `modeCubehelix`
`dlab` | DIN99o Lab color space | `modeDlab`
`dlch` | DIN99o LCh color space | `modeDlch`
`hsi` | HSI color space | `modeHsi`
`hsl` | HSL color space | `modeHsl`
`hsv` | HSV color space | `modeHsv`
`hwb` | HWB color space | `modeHwb`
`itp` | IC<sub>t</sub>C<sub>p</sub> color space | `modeItp`
`jab` | J<sub>z</sub>a<sub>z</sub>b<sub>z</sub> color space | `modeJab`
`jch` | J<sub>z</sub>a<sub>z</sub>b<sub>z</sub> in cylindrical form | `modeJch`
`lab` | CIELAB color space (D50 Illuminant) | `modeLab`
`lab65` | CIELAB color space (D65 Illuminant) | `modeLab65`
`lch` | CIELCh color space (D50 Illuminant) | `modeLch`
`lch65` | CIELCh color space (D65 Illuminant) | `modeLch65`
`lchuv` | CIELCHuv color space (D50 Illuminant) | `modeLchuv`
`lrgb` | Linear-light sRGB color space | `modeLrgb`
`luv` | CIELUV color space (D50 Illuminant) | `modeLuv`
`oklab` | Oklab color space | `modeOklab`
`oklch` | Oklab color space, cylindrical form | `modeOklch`
`p3` | Display P3 color space | `modeP3`
`prophoto` | ProPhoto RGB color space | `modeProphoto`
`rec2020` | Rec. 2020 RGB color space | `modeRec2020`
`rgb` | sRGB color space | `modeRgb`
`xyb` | XYB color space | `modeXyb`
`xyz50` | XYZ with D50 white-point | `modeXyz50`
`xyz65` | XYZ with D65 white-point | `modeXyz65`
`yiq` | YIQ color space | `modeYiq`

## Extending culori

<a id="useMode" href="#useMode">#</a> **useMode**(_definition_) → _function_.

<span aria-label='Source:'>☞</span> [src/modes.js]({{codebase}}/src/modes.js)

Defines a new color space based on its _definition_. See [Color mode definition](#color-mode-def) for the expected object shape.

Returns a converter function for the newly defined mode.

```js
import { useMode } from 'culori';

const hsl = useMode({
	mode: 'hsl'
	// ...
});

hsl('hsl(50 100% 100% / 100)');
```

<a id="getMode" href="#getMode">#</a> **getMode**(_mode_)

<span aria-label='Source:'>☞</span> [src/modes.js]({{codebase}}/src/modes.js)

Returns the definition object for the _mode_ color space.

<h3 id='color-mode-def'>
  <a href='#color-mode-def'>#</a>
  Color mode definition
</h3>

The properties a definition needs are the following:

#### `mode` (_string_)

The string identifier for the color space.

#### `channels` (_array_)

A list of channels for the color space.

#### `toMode` (_object_)

A set of functions to convert from the color space we're defining to other color spaces. At least `rgb` needs to be included; in case a specific conversion pair between two color spaces is missing, RGB is used as the "buffer" for the conversion.

#### `fromMode` (_object_)

The opposite of `toMode`. A set of function to convert from various color spaces to the color space we're defining. At least `rgb` needs to be included.

#### `ranges` (_object_, optional)

The reference ranges for values in specific channels; if left unspecified, defaults to `[0, 1]`.

#### `parse` (_array_, optional)

Any parsers for the color space that can transform strings into colors. These can be either functions, or strings — the latter is used as the color space's identifier to parse the `color(<ident>)` CSS syntax.

#### `serialize` (_function_ or _string_, optional)

Defines how to serialize the color space to a CSS string with [`formatCss()`](#formatCss).

If you pass in a function, it receives a color object as its only argument, and should return a string that can be used in CSS. If you pass in a string, it's used as a color profile identifier, and the color is serialized using the `color()` CSS syntax. When omitted altogether, the default color profile identifier is `--${mode}`.

#### `interpolate`

The default interpolations for the color space, one for each channel. Each interpolation is defined by its interpolator (the `use` key) and its fixup function (the `fixup` key). When defined as a function, a channel interpolation is meant to define its interpolator, with the fixup being a no-op.

#### `difference`

The default Euclidean distance method for each channel in the color space; mostly used for the `h` channel in cylindrical color spaces.

#### `average`

The default average function for each channel in the color space; when left unspecified, defaults to [`averageNumber`](#averageNumber).

All built-in color spaces follow these conventions in regards to the `channels` array follows:

-   there are four channels in the color space;
-   the fourth channel is always `alpha`.

This makes sure [`differenceEuclidean()`](#differenceEuclidean) works as expected, but there may be more hidden assumptions in the codebase.

Here's a sample definition for the HSL color space:

```js
{
  mode: 'hsl',
  fromMode: {
    rgb: convertRgbToHsl
  },
  toMode: {
    rgb: convertHslToRgb
  },
  channels: ['h', 's', 'l', 'alpha'],
  ranges: {
    h: [0, 360]
  },
  parse: [parseHsl],
  serialize: serializeHsl,
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
  },
  average: {
    h: averageAngle
  }
};
```

<a id="useParser" href="#useParser">#</a> **useParser**(_parser_, _mode_)

<span aria-label='Source:'>☞</span> [src/modes.js]({{codebase}}/src/modes.js)

Register a new parser. The parser can be:

* a function, in which case the _mode_ argument is not necessary.
* a string representing the identifier to match in the `color()` syntax, in which case the _mode_ argument is required.

```js
import { useParser } from 'culori';

// Register custom parser
useParser(function(str) => {
  let color = {};
  // parse the string
  return color;
});

// Register `color(--oklab)` syntax
useParser('--oklab', 'oklab');
```

<a id="removeParser" href="#removeParser">#</a> **removeParser**(_parser_)

<span aria-label='Source:'>☞</span> [src/modes.js]({{codebase}}/src/modes.js)

Remove a previously registered parser function or string, including parsers registered by default.

```js
import { parse, parseNamed, removeParser } from 'culori';

parse('tomato');
// ⇒ Object { mode: "rgb", r: 1, g: 0.38823529411764707, b: 0.2784313725490196 }

removeParser(parseNamed);
parse('tomato');
// ⇒ undefined
```

<h2 id='low-level-api'>
  <a href='#low-level-api'>#</a>
  Low-level API
</h2>

<h3 id='parsing-functions'>
  <a id="parsing-functions" href="#parsing-functions">#</a>
  Parsing functions
</h3>

<a id="parseHex" href="#parseHex">#</a> __parseHex__(_string_) → _color_

Parses hex strings of 3, 4, 6, or 8 characters, with or without the `#` prefix, and returns `rgb` color objects.

```js
import { parseHex } from 'culori';

parseHex('#abc');
parseHex('#abcd');
parseHex('#abcdef');
parseHex('#abcdef12');
```

<a id="parseHsl" href="#parseHsl">#</a> __parseHsl__(_string_) → _color_

Parses `hsl(…)` strings in the modern format and returns `hsl` color objects.

<a id="parseHslLegacy" href="#parseHslLegacy">#</a> __parseHslLegacy__(_string_) → _color_

Parses `hsl(…)` / `hsla(…)` strings in the legacy (comma-separated) format and returns `hsl` color objects.

<a id="parseHwb" href="#parseHwb">#</a> __parseHwb__(_string_) → _color_

Parses `hwb(…)` strings and returns `hwb` color objects.

<a id="parseLab" href="#parseLab">#</a> __parseLab__(_string_) → _color_

Parses `lab(…)` strings and returns `lab` color objects.

<a id="parseLch" href="#parseLch">#</a> __parseLch__(_string_) → _color_

Parses `lch(…)` strings and returns `lch` color objects.

<a id="parseNamed" href="#parseNamed">#</a> __parseNamed__(_string_) → _color_

Parses named CSS colors (eg. `tomato`) and returns `rgb` color objects.

<a id="parseOklab" href="#parseOklab">#</a> __parseOklab__(_string_) → _color_

Parses `oklab(…)` strings and returns `oklab` color objects.

<a id="parseOklch" href="#parseOklch">#</a> __parseOklch__(_string_) → _color_

Parses `oklch(…)` strings and returns `oklch` color objects.

<a id="parseRgb" href="#parseRgb">#</a> __parseRgb__(_color_) → _color_

Parses `rgb(…)` strings in the modern syntax and returns `rgb` color objects.

<a id="parseRgbLegacy" href="#parseRgbLegacy">#</a> __parseRgbLegacy__(_color_) → _color_

Parses `rgb(…)` / `rgba(…)` strings in the legacy (comma-separated) syntax and returns `rgb` color objects.

<a id="parseTransparent" href="#parseTransparent">#</a>__parseTransparent__(_string_) → _color_

Parses the `transparent` string and returns a transparent black `rgb` color object.

### Serialization functions

<a id="serializeHex" href="#serializeHex">#</a>__serializeHex__(_color_)

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Serialize a `rgb` _color_ to a 6-character hex code. See [`formatHex()`](#formatHex) for details.

<a id="serializeHex8" href="#serializeHex8">#</a>__serializeHex8__(_color_)

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Serialize a `rgb` _color_ to a 8-character hex code. See [`formatHex8()`](#formatHex8) for details.

<a id="serializeHsl" href="#serializeHsl">#</a>__serializeHsl__(_color_)

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Serialize a `hsl` _color_ to a `hsl(…)` string. See [`formatHsl()`](#formatHsl) for details.

<a id="serializeRgb" href="#serializeRgb">#</a>__serializeRgb__(_color_)

<span aria-label='Source:'>☞</span> [src/formatter.js]({{codebase}}/src/formatter.js)

Serialize a `rgb` _color_ to a `rgb(…)` string. See [`formatRgb()`](#formatRgb) for details.

### Conversion functions

Function | Conversion
-------- | ----------
__convertA98ToXyz65__(_color_) → _color_ | `a98` → `xyz65`
__convertCubehelixToRgb__(_color_) → _color_ |  `cubehelix` → `rgb`
__convertDlchToLab65__(_color_) → _color_ | `dlch` → `lab65`
__convertHsiToRgb__(_color_) → _color_ | `hsi` → `rgb`
__convertHslToRgb__(_color_) → _color_ | `hsl` → `rgb`
__convertHsvToRgb__(_color_) → _color_ | `hsv` → `rgb`
__convertHwbToRgb__(_color_) → _color_ | `hwb` → `rgb`
__convertJabToJch__(_color_) → _color_ | `jab` → `jch`
__convertJabToRgb__(_color_) → _color_ | `jab` → `rgb`
__convertJabToXyz65__(_color_) → _color_ | `jab` → `xyz65`
__convertJchToJab__(_color_) → _color_ | `jch` → `jab`
__convertLab65ToDlch__(_color_) → _color_ | `lab65` → `dlch`
__convertLab65ToRgb__(_color_) → _color_ | `lab65` → `rgb`
__convertLab65ToXyz65__(_color_) → _color_ | `lab65` → `xyz65`
__convertLabToLch__(_color_) → _color_ | `lab` → `lch`
__convertLabToRgb__(_color_) → _color_ | `lab` → `rgb`
__convertLabToXyz50__(_color_) → _color_ | `lab` → `xyz50`
__convertLchToLab__(_color_) → _color_ | `lch` → `lab`
__convertLchuvToLuv__(_color_) → _color_ | `lchuv` → `luv`
__convertLrgbToOklab__(_color_) → _color_ | `lrgb` → `oklab`
__convertLrgbToRgb__(_color_) → _color_ | `lrgb` → `rgb`
__convertLuvToLchuv__(_color_) → _color_ | `luv` → `lchuv`
__convertLuvToXyz50__(_color_) → _color_ | `luv` → `xyz50`
__convertOkhslToOklab__(_color_) → _color_ | `okhsl` → `oklab`
__convertOkhsvToOklab__(_color_) → _color_ | `okhsv` → `oklab`
__convertOklabToLrgb__(_color_) → _color_ | `oklab` → `lrgb`
__convertOklabToOkhsl__(_color_) → _color_ | `oklab` → `okhsl`
__convertOklabToOkhsv__(_color_) → _color_ | `oklab` → `okhsv`
__convertOklabToRgb__(_color_) → _color_ | `oklab` → `rgb`
__convertP3ToXyz65__(_color_) → _color_ | `p3` → `xyz65`
__convertProphotoToXyz50__(_color_) → _color_ | `prophoto` → `xyz50`
__convertRec2020ToXyz65__(_color_) → _color_ | `rec2020` → `xyz65`
__convertRgbToCubehelix__(_color_) → _color_ | `rgb` → `cubehelix`
__convertRgbToHsi__(_color_) → _color_ | `rgb` → `hsi`
__convertRgbToHsl__(_color_) → _color_ | `rgb` → `hsl`
__convertRgbToHsv__(_color_) → _color_ | `rgb` → `hsv`
__convertRgbToHwb__(_color_) → _color_ | `rgb` → `hwb`
__convertRgbToJab__(_color_) → _color_ | `rgb` → `jab`
__convertRgbToLab65__(_color_) → _color_ | `rgb` → `lab65`
__convertRgbToLab__(_color_) → _color_ | `rgb` → `lab`
__convertRgbToLrgb__(_color_) → _color_ | `rgb` → `lrgb`
__convertRgbToOklab__(_color_) → _color_ | `rgb` → `oklab`
__convertRgbToXyb__(_color_) → _color_ | `rgb` → `xyb`
__convertRgbToXyz50__(_color_) → _color_ | `rgb` → `xyz50`
__convertRgbToXyz65__(_color_) → _color_ | `rgb` → `xyz65`
__convertRgbToYiq__(_color_) → _color_ | `rgb` → `yiq`
__convertXybToRgb__(_color_) → _color_ | `xyb` → `rgb`
__convertXyz50ToLab__(_color_) → _color_ | `xyz50` → `lab`
__convertXyz50ToLuv__(_color_) → _color_ | `xyz50` → `luv`
__convertXyz50ToProphoto__(_color_) → _color_ | `xyz50` → `prophoto`
__convertXyz50ToRgb__(_color_) → _color_ | `xyz50` → `rgb`
__convertXyz50ToXyz65__(_color_) → _color_ | `xyz50` → `xyz65`
__convertXyz65ToA98__(_color_) → _color_ | `xyz65` → `a98`
__convertXyz65ToJab__(_color_) → _color_ | `xyz65` → `jab`
__convertXyz65ToLab65__(_color_) → _color_ | `xyz65` → `lab65`
__convertXyz65ToP3__(_color_) → _color_ | `xyz65` → `p3`
__convertXyz65ToRec2020__(_color_) → _color_ | `xyz65` → `rec2020`
__convertXyz65ToRgb__(_color_) → _color_ | `xyz65` → `rgb`
__convertXyz65ToXyz50__(_color_) → _color_ | `xyz65` → `xyz50`
__convertYiqToRgb__(_color_) → _color_ | `yiq` → `rgb`


[css-images-4]: https://drafts.csswg.org/css-images-4/#color-stop-syntax
[css-easing-1]: http://drafts.csswg.org/css-easing-1
[smoothstep]: https://en.wikipedia.org/wiki/Smoothstep
[cie76]: https://en.wikipedia.org/wiki/Color_difference#CIE76
[cie94]: https://en.wikipedia.org/wiki/Color_difference#CIE94
[ciede2000]: https://en.wikipedia.org/wiki/Color_difference#CIEDE2000
[cmc]: https://en.wikipedia.org/wiki/Color_difference#CMC_l:c_(1984)
[kotsarekno-ramos]: http://www.progmat.uaem.mx:8080/artVol2Num2/Articulo3Vol2Num2.pdf
[din99ode]: https://de.wikipedia.org/wiki/DIN99-Farbraum#Farbabstandsformel
[midpoint]: https://github.com/w3c/csswg-drafts/issues/3935
[eitp-difference]: https://www.itu.int/rec/R-REC-BT.2124/en
