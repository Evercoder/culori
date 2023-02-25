---
title: 'Migration guide'
---

## From v2 to v3

### Custom identifiers removed from the `color()` syntax

For better alignment with the CSS Color Level 4 specification, support for the following formats has changed:

* `color(--oklab)` removed in favor of `oklab()`
* `color(--oklch)` removed in favor of `oklch()`
* `color(--srgb-linear)` removed in favor of `color(srgb-linear)`
* `color(--xyz-d50)` removed in favor of `color(xyz-d50)`
* `color(--xyz-d65)` removed in favor of `color(xyz)` and `color(xyz-d65)`

The custom identifiers removed in this release can be re-registered with [`useParser()`](/api/#useParser), using string arguments:

```js
import { useParser } from 'culori';

useParser('--oklab', 'oklab');
useParser('--oklch', 'oklch');
useParser('--srgb-linear', 'lrgb');
useParser('--xyz-d50', 'xyz50');
useParser('--xyz-d65', 'xyz65');
```

### Parsing modern vs. legacy syntaxes for `rgb()` and `hsl()`

The parsing of the [modern syntax](https://w3c.github.io/csswg-drafts/css-color-4/#color-syntax-modern) (space-separated) and the [legacy syntax](https://w3c.github.io/csswg-drafts/css-color-4/#color-syntax-legacy) (comma-separated) for the `rgb` and `hsl` color spaces has been split to separate functions:

* `parseRgb()` now parses just the modern `rgb()` / `rgba()` syntax
* `parseHsl()` now parses just the modern `hsl()` / `hsla()` syntax
* `parseRgbLegacy()` has been added to the API to parse the legacy `rgb()` / `rgba()` syntax
* `parseHslLegacy()` has been added to the API to parse the legacy `hsl()` / `hsla()` syntax

## From v1 to v2

* all color components in all CSS color syntaxes now accept the `none` keyword. ([w3c/csswg-drafts#6107](https://github.com/w3c/csswg-drafts/issues/6107))

### XYZ D50 vs. D65

The CSS Color Module Level 4 specification has been updated to include separate predefined color profiles for the XYZ color space for the two most common white points: `xyz-d50` for the D50 illuminant, and `xyz-d65` for the D65 illuminant. The `xyz` predefined color profile is now an alias for the D65-relative XYZ color space. ([w3c/csswg-drafts#6722](https://github.com/w3c/csswg-drafts/issues/6722)). 

In Culori, the D50-relative XYZ color space has been changed to use `mode: 'xyz50'` instead of `mode: 'xyz'`. __The latter mode is no longer supported.__ If you store color objects in your application, they will have to have their `mode` property updated accordingly:

```js
import { formatHex } from 'culori';

let color = getFavoriteColor();

if (color.mode === 'xyz') {
	color.mode = 'xyz50';
}

formatHex(color);
```

When parsing strings, CSS colors in the `color(xyz x y z)` format will be parsed as `mode: 'xyz65'` instead of `mode: 'xyz'`:

```js
import { parse } from 'culori';

// In culori@1.x:
parse('color(xyz 0.5 0.25 1)');
// ⇒ { mode: 'xyz', x: 0.5, y: 0.25, z: 1 }

// In culori@2.0:
parse('color(xyz 0.5 0.25 1)');
// ⇒ { mode: 'xyz65', x: 0.5, y: 0.25, z: 1 }
```

When serializing with the [`formatCss()`](/api#formatCss) method, the `xyz50` and `xyz65` modes now use the predefined identifiers `xyz-d50` and `xyz-d65`, as opposed to the custom identifiers `--xyz-d50` and `--xyx-d65` from 1.x:

```js
import { formatCss } from 'culori';

// In culori@1.x:
formatCss({ mode: 'xyz65', x: 0.5, y: 0.25, z: 1 });
// ⇒ color(--xyz-d65 0.5 0.25 1)

// In culori@2.0:
formatCss({ mode: 'xyz65', x: 0.5, y: 0.25, z: 1 });
// ⇒ color(xyz-d65 0.5 0.25 1)
```

The following exports have been renamed in [all applicable entry points](/guides/tree-shaking):

* <code>modeXyz</code> → <code>modeXyz<strong>50</strong></code>
* <code>xyz</code> → <code>xyz<strong>50</strong></code>
* <code>convertLabToXyz</code> → <code>convertLabToXyz<strong>50</strong></code>
* <code>convertLuvToXyz</code> → <code>convertLuvToXyz<strong>50</strong></code>
* <code>convertProphotoToXyz</code> → <code>convertProphotoToXyz<strong>50</strong></code>
* <code>convertRgbToXyz</code> → <code>convertRgbToXyz<strong>50</strong></code>
* <code>convertXyz65ToXyz</code> → <code>convertXyz65ToXyz<strong>50</strong></code>
* <code>convertXyzToLab</code> → <code>convertXyz<strong>50</strong>ToLab</code>
* <code>convertXyzToLuv</code> → <code>convertXyz<strong>50</strong>ToLuv</code>
* <code>convertXyzToProphoto</code> → <code>convertXyz<strong>50</strong>ToProphoto</code>
* <code>convertXyzToRgb</code> → <code>convertXyz<strong>50</strong>ToRgb</code>
* <code>convertXyzToXyz65</code> → <code>convertXyz<strong>50</strong>ToXyz65</code>

### `<number>` for L no longer valid in `lab()` and `lch()`

CSS defines the `lab` syntax as `lab(<percentage> <number> <number>)`, for example:

```css
lab(75% 40 30)
```

...and the `lch` syntax as `lch(<percentage> <number> <hue>)`:

```css
lch(75% 50 15deg)
```

Culori used to support `<number>` as the L channel, so these colors used to be also valid:

```css
lab(75 40 30)
lch(75 50 15deg)
```

In version 2.0, we drop this quirk and bring Culori in line with the specification.


## From v0.x to v1

### Using the library

Starting with version 1.0, Culori will be published to npm as an ES Module (ESM) package, with `type: module` and a set of `exports` in its `package.json` file.

If you're using Node.js 10, you should be able to continue using Culori as before. 

If you're on Node.js 12 or later, and you've switched to native ES modules (by adding `type: module` to your `package.json`), you need to use `import`:

```js
import * as culori from 'culori';
```

If you're on Node.js 12 or later, and you're still using CommonJS modules, there's a separate export that can be used with `require()` calls:

```js
const culori = require('culori/require');
```

### Removed methods

The `clamp(method)` function has been removed. Use `clampRgb()` and `clampChroma()` instead.

The `formatter(method)` function has been removed. Use `formatHex()`, `formatRgb()` etc. instead.

The following undocumented interpolation functions have been removed (note the `interpolate` prefix):

-   `interpolateLinear()`
-   `interpolateCosine()`
-   `interpolateSplineBasis()`
-   `interpolateSplineNatural()`
-   `interpolateSplineMonotone()`

The `differenceDino99()` color difference function has been removed. Use `differenceEuclidean('dlab')` instead.

The methods `deficiencyProt`, `deficiencyDeuter`, and `deficiencyTrit` have been removed. Use `filterDeficiencyProt`, `filterDeficiencyDeuter`, and `filterDeficiencyTrit` instead.

### Renamed methods

The following methods have been renamed:

-   `defineMode()` → `useMode()`;
-   `getModeDefinition()` → `getMode()`.

### Color space definitions

A few properties on the [color space definition object](/api#color-space-def) have been changed for better clarity.

-   `input` → `fromMode`
-   `output` → `toMode`
-   `parsers` → `parse`
-   `serialize` as string now only includes the color profile identifier, without the `color(` prefix, eg. from `serialize: "color(--hsv "` to `serialize: "--hsv"`.
