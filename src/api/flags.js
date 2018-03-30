/*
	Basic flags
	---------------------------
 */

// Identifies a color that was processed with culori.
export const IS_CULORI = 1 << 32;

/*
	Color spaces
	---------------------------
 */

// A color in the RGB color space.
export const IS_RGB = 1 << 24;

// A color in the HSL color space.
export const IS_HSL = 1 << 23;

// A color in the HSV color space.
export const IS_HSV = 1 << 22;

// A color in the HSI color space.
export const IS_HSI = 1 << 21;

// A color in the HWB color space.
export const IS_HWB  = 1 << 20;

// A color in the CIELAB color space.
export const IS_LAB = 1 << 19;

// A color in the CIELCH color space.
export const IS_LCH = 1 << 18;

// A color in the Cubehelix color space.
export const IS_CUBEHELIX = 1 << 17;

// A grayscale color.
export const IS_GRAY = 1 << 16;

/*
	Color formats
	---------------------------
 */

// The RGB color originated from a hex format
export const IS_FORMAT_HEX = 1 << 15;

// The RGB color originated from a named color format.
export const IS_FORMAT_NAMED = 1 << 14;

/*
	Extra information
	---------------------------
 */

// Whether the hue is undefined in HSL / HSV / HSI color spaces.
export const IS_HUE_UNDEFINED = 1 << 8;

// Whether the (missing) alpha should be assumed to be 1.
export const IS_ALPHA_IMPLIED = 1 << 7;

// Whether the values have been normalized to their appropriate ranges,
// depending on the color space.
export const IS_NORMALIZED = 1 << 6;

// Whether a color is displayable on RGB devices.
export const IS_DISPLAYABLE = 1 << 5;

export default {

	IS_CULORI,

	IS_RGB,
	IS_HSL,
	IS_HSV,
	IS_HSI,
	IS_HWB,
	IS_LAB,
	IS_LCH,
	IS_CUBEHELIX,
	IS_GRAY,

	IS_HUE_UNDEFINED,
	IS_ALPHA_IMPLIED,
	IS_NORMALIZED,
	IS_DISPLAYABLE
	
};