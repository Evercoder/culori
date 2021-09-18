import lch from '../lch/definition.js';
import convertLabToLch from '../lch/convertLabToLch.js';
import convertLchToLab from '../lch/convertLchToLab.js';
import convertOklabToRgb from '../oklab/convertOklabToRgb.js';
import convertRgbToOklab from '../oklab/convertRgbToOklab.js';

const definition = {
	...lch,
	mode: 'oklch',

	output: {
		oklab: c => convertLchToLab(c, 'oklab'),
		rgb: c => convertOklabToRgb(convertLchToLab(c, 'oklab'))
	},

	input: {
		rgb: c => convertLabToLch(convertRgbToOklab(c), 'oklch'),
		oklab: c => convertLabToLch(c, 'oklch')
	},

	parsers: ['--oklch'],
	serialize: 'color(--oklch ',

	ranges: {
		l: [0, 0.999],
		c: [0, 0.322],
		h: [0, 360]
	}
};

export default definition;
