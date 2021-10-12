---
title: 'Migration guide'
---

## Migrating from version 1.x to 2.0

* all color components in all CSS color syntaxes now accept the `none` keyword. ([w3c/csswg-drafts#6107](https://github.com/w3c/csswg-drafts/issues/6107))

### XYZ D50 vs. D65

The CSS Color Module Level 4 specification has been updated so that the `xyz` predefined color profile refers to the D65-relative XYZ color space, rather than the D50-relative XYZ color space. ([w3c/csswg-drafts#6722](https://github.com/w3c/csswg-drafts/issues/6722)). 

In Culori, this has resulted in the D50-relative XYZ color space being changed to use `mode: 'xyz50'` instead of `mode: 'xyz'`. The latter is no longer supported. In addition:

* colors in the `xyz50` mode will be serialized as `color(xyz-d50 x y z / alpha)` when using the [`formatCss()`](/api#formatCss) method, instead of `color(--xyz-d50 x y z)`, to reflect the addition of `xyz-d50` to the list of predefined CSS color profiles.
* colors in the `xyz65` mode will be serialized as `color(xyz-d65 x y z / alpha)` instead of `color(--xyz-d65 x y z / alpha)`, to reflect the addition of `xyz-d65` to the list of predefined CSS color profiles.
* CSS colors in the `color(xyz x y z / alpha)` format will be parsed as `mode: 'xyz65'` instead of `mode: 'xyz50'`.

As a result of this rename, the following exports have been renamed in [all applicable entry points](/guides/tree-shaking):

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


## Migrating from version 0.x to 1.0

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
