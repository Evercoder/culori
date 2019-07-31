---
layout: layouts/default
title: Color Spaces
---

## RGB

> 🕳 expand this section

## LRGB (Linear RGB)

> 🕳 expand this section

> 📖 See Jamie Wong's [excellent deep dive](http://jamie-wong.com/post/color/) into color.

## HSL / HSV / HSI

[HSL, HSV, and HSI](https://en.wikipedia.org/wiki/HSL_and_HSV) are a family of representations of the RGB color space, created in 1970 to provide color spaces more closely aligned to how humans perceive colors.

> 💡 In this family of color spaces, the _hue_ is undefined for achromatic colors (i.e. shades of gray).

### `hsl`

| Channel | Range      | Description       |
| ------- | ---------- | ----------------- |
| `h`     | `[0, 360)` | Hue               |
| `s`     | `[0, 1]`   | Saturation in HSL |
| `l`     | `[0, 1]`   | Lightness         |

The figure below shows a slice of the HSL color space for a particular hue:

![HSL Spectrum]({{"/img/hsl-spectrum.png" | url }})

### `hsv`

| Channel | Range      | Description       |
| ------- | ---------- | ----------------- |
| `h`     | `[0, 360)` | Hue               |
| `s`     | `[0, 1]`   | Saturation in HSV |
| `v`     | `[0, 1]`   | Value             |

The figure below shows a slice of the HSV color space for a particular hue:

![HSV Spectrum]({{"/img/hsv-spectrum.png" | url }})

### `hsi`

| Channel | Range      | Description       |
| ------- | ---------- | ----------------- |
| `h`     | `[0, 360)` | Hue               |
| `s`     | `[0, 1]`   | Saturation in HSI |
| `i`     | `[0, 1]`   | Intensity         |

The figure below shows a slice of the HSI color space for a particular hue:

![HSI Spectrum]({{"/img/hsi-spectrum.png" | url }})

> 💡 While the _hue_ in this family of color spaces retains its value in all of them, the _saturation_ in HSL is **not interchangeable** with the _saturation_ from HSV, nor HSI — they're computed differently, depending on the color space.

## HWB

[The HWB color space](https://en.wikipedia.org/wiki/HWB_color_model) was developed by Alvy Ray Smith, who also created the HSV color space. It's meant to be more intuitive for humans to use and faster to compute.

**References:**

-   Smith, Alvy Ray (1996) — ["HWB — A More Intuitive Hue-Based Color Model"](http://alvyray.com/Papers/CG/HWB_JGTv208.pdf), Journal of Graphics, GPU and Game tools.

## Lab / LCh (CIE)

> As defined in the [CSS Color Module Level 4 spec](https://drafts.csswg.org/css-color/#lab-colors), we use the [D50 illuminant](https://en.wikipedia.org/wiki/Standard_illuminant) as a reference white for these color spaces.

### `lab`

| Channel | Range                | Description           |
| ------- | -------------------- | --------------------- |
| `l`     | `[0, 100]`           | Lightness             |
| `a`     | `[-79.167, 93.408]`  | Green–red component   |
| `b`     | `[-111.859, 93.246]` | Blue–yellow component |

### `lch`

| Channel | Range          | Description |
| ------- | -------------- | ----------- |
| `l`     | `[0, 100]`     | Lightness   |
| `c`     | `[0, 131.008]` | Chroma      |
| `h`     | `[0, 360)`     | Hue         |

> 💡 The range for the `a` and `b` channels in Lab, and the `c` channel in LCh, depend on the specific implementation. I've obtained the ranges from the tables above by converting all sRGB colors defined by `r, g, b ∈ ℕ ⋂ [0, 255]` into Lab and LCh respectively.

## DIN99 Lab / LCh

The [DIN99][din99o] color space "squishes" the CIE Lab color space to obtain an [effective color difference](#culoriDifferenceDin99o) metric that can be expressed as a simple Euclidean distance. We implement the latest iteration of the the standard, DIN99o.

### `dlab`

| Channel | Range               | Description |
| ------- | ------------------- | ----------- |
| `l`     | `[0, 100]`          | Lightness   |
| `a`     | `[-39.229, 45.166]` |
| `b`     | `[-43.002, 44.424]` |

### `dlch`

| Channel | Range         | Description |
| ------- | ------------- | ----------- |
| `l`     | `[0, 100]`    | Lightness   |
| `c`     | `[0, 50.944]` | Chroma      |
| `h`     | `[0, 360)`    | Hue         |

**References:**

-   ["Industrial Color Physics"](https://www.springer.com/us/book/9781441911964), Georg A. Klein, Springer (2010)

## YIQ

[YIQ](yiq) is the color space used by the NTSC color TV system. It contains the following channels:

| Channel | Range             | Description                    |
| ------- | ----------------- | ------------------------------ |
| Y       | `[0, 1]`          | Luma                           |
| I       | `[-0.593, 0.593]` | In-phase (orange-blue axis)    |
| Q       | `[-0.520, 0.520]` | Quadrature (green-purple axis) |

## Cubehelix

[The Cubehelix color scheme](https://www.mrao.cam.ac.uk/~dag/CUBEHELIX/) was described by Dave Green in this paper:

-   Green, D. A., 2011, [_"A colour scheme for the display of astronomical intensity images"_](http://astron-soc.in/bulletin/11June/289392011.pdf), Bulletin of the Astronomical Society of India, 39, 289. ([2011BASI...39..289G](https://ui.adsabs.harvard.edu/#abs/2011BASI...39..289G) at [ADS](https://ui.adsabs.harvard.edu/))

It was expanded into a color space by [Mike Bostock](https://en.wikipedia.org/wiki/Mike_Bostock) and [Jason Davies](https://www.jasondavies.com/) in [D3](https://github.com/d3/d3-color).

### `cubehelix`

The channels in the `cubehelix` color space maintain the conventions from D3, namely:

| Channel | Range         | Description                                                              |
| ------- | ------------- | ------------------------------------------------------------------------ |
| `h`     | `[0, 360)`    | Hue (Based on _start color_ and _rotations_ as defined in Green's paper) |
| `s`     | `[0, 4.6143]` | Saturation (Called _hue_ in op. cit.)                                    |
| `l`     | `[0, 1]`      | Lightness                                                                |

[din99o]: https://de.wikipedia.org/wiki/DIN99-Farbraum
