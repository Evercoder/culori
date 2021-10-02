/*
	Basic building blocks for color regexes
	---------------------------------------

	These regexes are expressed as strings
	to be interpolated in the color regexes.
 */

export const num = '([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)'; // <number>
export const per = `${num}%`; // <percentage>
export const num_per = `(?:${num}%|${num})`; // <alpha-value> and <number-percentage>
export const hue = `(?:${num}(deg|grad|rad|turn)|${num})`; // hue
export const c = `\\s*,\\s*`; // comma
export const so = '\\s*'; // optional space
export const s = `\\s+`; // space
