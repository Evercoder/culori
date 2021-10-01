import convertLabToRgb from './convertLabToRgb.js';
import convertLabToXyz from './convertLabToXyz.js';
import convertRgbToLab from './convertRgbToLab.js';
import convertXyzToLab from './convertXyzToLab.js';
import parseLab from './parseLab.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

const definition = {
	mode: 'lab',

	toMode: {
		xyz: convertLabToXyz,
		rgb: convertLabToRgb
	},

	fromMode: {
		xyz: convertXyzToLab,
		rgb: convertRgbToLab
	},

	channels: ['l', 'a', 'b', 'alpha'],

	ranges: {
		l: [0, 100],
		a: [-79.287, 93.55],
		b: [-112.029, 93.388]
	},

	parse: [parseLab],
	serialize: c =>
		`lab(${c.l}% ${c.a} ${c.b}${c.alpha < 1 ? ` / ${c.alpha}` : ''})`,

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};

export default definition;
