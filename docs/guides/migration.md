---
title: 'Migration guide'
---

## Migrating from version 0.x to 1.0

### Using the library

Starting with version 1.0, Culori will be published to npm as an ES Module (ESM) package. That means that if you use the library via npm (with `npm install culori`), you will need to be running **Node.js version 12 or later**.

If you've switched your own project to ESM (by using `type: module` in your `package.json` file), you can import the library as usual:

```js
import * as culori from 'culori';
```

If you're not ready to switch to native ESM, we also provide a CommonJS export that can be used with `require()`:

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
