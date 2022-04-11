import type { Color, Find, Mode } from './common';

export declare function clampRgb(color: string): Color;
export declare function clampRgb<C extends Find<Color, M>, M extends Mode>(
	color: C
): C;

export declare function clampChroma(color: string): Color;
export declare function clampChroma<C extends Color>(color: C): C;
export declare function clampChroma<
	C extends Find<Color, M>,
	M extends Mode = 'lch'
>(color: C, mode: M): C;

// export const clampChroma = (color, mode = 'lch') => {
// 	color = prepare(color);
//
// 	// if the color is undefined or displayable, return it directly
// 	if (color === undefined || displayable(color)) return color;
//
// 	// keep track of color's original mode
// 	let conv = converter(color.mode);
//
// 	// convert to the provided `mode` for clamping
// 	color = converter(mode)(color);
//
// 	// try with chroma = 0
// 	let clamped = { ...color, c: 0 };
//
// 	// if not even chroma = 0 is displayable
// 	// fall back to RGB clamping
// 	if (!displayable(clamped)) {
// 		return conv(fixup_rgb(clamped));
// 	}
//
// 	// By this time we know chroma = 0 is displayable and our current chroma is not.
// 	// Find the displayable chroma through the bisection method.
// 	let start = 0;
// 	let end = color.c;
// 	let range = getMode(mode).ranges.c;
// 	let resolution = (range[1] - range[0]) / Math.pow(2, 13);
// 	let _last_good_c;
//
// 	while (end - start > resolution) {
// 		clamped.c = start + (end - start) * 0.5;
// 		if (displayable(clamped)) {
// 			_last_good_c = clamped.c;
// 			start = clamped.c;
// 		} else {
// 			end = clamped.c;
// 		}
// 	}
//
// 	return conv(
// 		displayable(clamped) ? clamped : { ...clamped, c: _last_good_c }
// 	);
// };
