/*
	Basic building blocks for color regexes
	---------------------------------------

	These regexes are expressed as strings
	to be interpolated in the color regexes.
 */

const num = (/([+-]?\d*\.?\d+(?:[eE][+-]?\d+)?)/ + '').replace(/^\/|\/$/g, ''); // <number>
const per = `${num}%`; // <percentage>
const num_per = `(?:${num}%|${num})`; // <alpha-value> and <number-percentage>
const hue = `(?:${num}(deg|grad|rad|turn)|${num})`; // hue
const c = `\\s*,\\s*`; // comma
const so = '\\s*'; // optional space
const s = `\\s+`; // space

/*
	rgb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#rgb-functions
 */
const rgb_num_old = new RegExp(
	`^rgba?\\(\\s*${num}${c}${num}${c}${num}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);
const rgb_per_old = new RegExp(
	`^rgba?\\(\\s*${per}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);
const rgb_num_new = new RegExp(
	`^rgba?\\(\\s*${num}${s}${num}${s}${num}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);
const rgb_per_new = new RegExp(
	`^rgba?\\(\\s*${per}${s}${per}${s}${per}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

/*
	hsl() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hsl-notation
 */
const hsl_old = new RegExp(
	`^hsla?\\(\\s*${hue}${c}${per}${c}${per}\\s*(?:,\\s*${num_per}\\s*)?\\)$`
);
const hsl_new = new RegExp(
	`^hsla?\\(\\s*${hue}${s}${per}${s}${per}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

/*
	hexadecimal regular expressions.
 */
const hex = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i;

/*
	hwb() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#the-hwb-notation
 */
const hwb = new RegExp(
	`^hwb\\(\\s*${hue}${s}${per}${s}${per}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

/*
	lab() and lch() regular expressions.
	Reference: https://drafts.csswg.org/css-color/#lab-colors
 */
const lab = new RegExp(
	`^lab\\(\\s*${num}%?${s}${num}${s}${num}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);
const lch = new RegExp(
	`^lch\\(\\s*${num}%?${s}${num}${s}${hue}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

const profiled = new RegExp(
	`^color\\(${so}([a-z0-9\\-]+)${s}${num_per}${s}${num_per}${s}${num_per}${so}(?:\\/${so}${num_per}${so})?\\)$`
);

export {
	rgb_num_old,
	rgb_num_new,
	rgb_per_old,
	rgb_per_new,
	hsl_old,
	hsl_new,
	hex,
	hwb,
	lab,
	lch,
	profiled
};
