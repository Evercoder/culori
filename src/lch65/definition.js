import convertLabToLch from '../lch/convertLabToLch.js';
import convertLchToLab from '../lch/convertLchToLab.js';
import convertLab65ToRgb from '../lab65/convertLab65ToRgb.js';
import convertRgbToLab65 from '../lab65/convertRgbToLab65.js';
import lch from '../lch/definition.js';

const definition = {
	...lch,
	mode: 'lch65',

	parsers: ['--lch-d65'],
	serialize: 'color(--lch-d65 ',

	output: {
		lab65: c => convertLchToLab(c, 'lab65'),
		rgb: c => convertLab65ToRgb(convertLchToLab(c, 'lab65'))
	},

	input: {
		rgb: c => convertLabToLch(convertRgbToLab65(c), 'lch65'),
		lab65: c => convertLabToLch(c, 'lch65')
	},

	ranges: {
		l: [0, 100],
		c: [0, 133.807],
		h: [0, 360]
	}
};

export default definition;
