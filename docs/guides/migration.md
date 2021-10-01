---
title: 'Migration guide'
---

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
