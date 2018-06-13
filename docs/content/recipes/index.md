# Culori Recipes

#### Relative luminance of a color

The [relative luminance](https://en.wikipedia.org/wiki/Relative_luminance) of a color is defined as:

```js
L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```

Where R, G, and B are the components from the LRGB color space.

To compute it in culori:

```js
function luminance(color) {
  let c = culori.lrgb(color);
  return 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
}
```

__Note:__ The WCAG defines the luminance using a [deprecated value](https://github.com/w3c/wcag/issues/236#issuecomment-379526596) for converting sRGB to LRGB. If you'd like a strict implementation, you'll need to write your own sRGB → LRGB conversion.

#### Contrast ratio

Using the `luminance()` function above, the `contrast()` ratio is simply the ratio between the luminances of two colors, with the values shifted by 0.05 to avoid division by zero when comparing against black.

```js
function contrast(colorA, colorB) {
  let L1 = luminance(colorA);
  let L2 = luminance(colorB);
  return (L1 + 0.05) / (L2 + 0.05);
}
```