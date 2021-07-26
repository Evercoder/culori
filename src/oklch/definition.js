import lch from '../lch/definition';
import convertLabToLch from '../lch/convertLabToLch';
import convertLchToLab from '../lch/convertLchToLab';
import convertOklabToRgb from '../oklab/convertOklabToRgb';
import convertRgbToOklab from '../oklab/convertRgbToOklab';

const definition = {
	...lch,
	mode: 'oklch',
	alias: [],

	output: {
		oklab: c => convertLchToLab(c, 'oklab'),
		rgb: c => convertOklabToRgb(convertLchToLab(c, 'oklab'))
	},

	input: {
		rgb: c => convertLabToLch(convertRgbToOklab(c), 'oklch'),
		oklab: c => convertLabToLch(c, 'oklch')
	},

	parsers: [],

	ranges: {
		l: [0, 0.999],
		c: [0, 0.322],
		h: [0, 360]
	}
};

export default definition;
