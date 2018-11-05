## Culori Changelog

### 0.7.1

Fixes a regretion in short path hue interpolation.

### 0.7.0

#### Breaking changes

Revamped the interpolation UI to be terser ([#55](https://github.com/Evercoder/culori/issues/55)). The interpolation functions have been renamed, and their implementation has been refactored.

### 0.6.0

Stop treating the _alpha_ channel specifically in the Euclidean distance formula. Instead, assume it's always the fourth channel and assign it a default weight of 0. This means that it's now possible to factor in the alpha into the distance, if needed.

There's also a change of handing `NaN` differences on a channel. In this case, the distance on that particular channel is considered to be zero. (Which kind of makes sense?)

Distances on the hue (`h` channel) are now computed with the _shortest hue distance_, taking into account the cyclical nature of this channel. ([#68](https://github.com/Evercoder/culori/issues/68)).

### 0.5.4

Fixed typo in CMC (l:c) color difference formula. ([#66](https://github.com/Evercoder/culori/issues/66))

### 0.5.3

**Breaking:** `nearest()` now returns the original color object. ([#67](https://github.com/Evercoder/culori/issues/67))

### 0.5.2

-   Adds YIQ color space and Kotsarenko/Ramos color difference function (thanks [@mourner](https://github.com/mourner) for the pointer!)
-   Adds the _weights_ argument to _differenceEuclidean_

### 0.5.1

**Breaking:** Removed the `culori()` function, which was an alias for `culori.rgb()`. This makes the build simpler and clarifies the API a bit.

Cleaned up the build process; added Prettier, ESLint.

### Previously

Lost in the Fog of Time.
