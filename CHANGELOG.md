## Culori Changelog

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
