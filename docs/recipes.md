# Culori Recipes

## Relative luminance of a color

The [relative luminance](https://en.wikipedia.org/wiki/Relative_luminance) of a color is defined as:

```
L = 
```

Where R, G, and B are the components from the LRGB color space.

To compute it in Culori:

```js
function luminance(color) {
	let c = culori.lrgb(color);
	return 0.2126 * c.r + 0.7152 * c.g. + 0.0722 * c.b
}
```

## Contrast ratio

Using the `luminance()` function above, the `contrast()` ratio is simply the ratio between the luminances of two colors:

```js
function contrast(colorA, colorB) {
	let L1 = luminance(colorA);
	let L2 = luminance(colorB);
	let ratio = L1 / L2;
	return ratio < 1 ? 1 / ratio : ratio;
}
```

__Note:__ The WCAG defines contrast a bit differently, with:

```
let ratio = (L1 + 0.05) / (L2 + 0.05);
```

