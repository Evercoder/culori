import convertDlabToLab65 from './convertDlabToLab65.js';
import convertLab65ToDlab from './convertLab65ToDlab.js';
import convertLab65ToRgb from '../lab65/convertLab65ToRgb.js';
import convertRgbToLab65 from '../lab65/convertRgbToLab65.js';
import { interpolatorLinear } from '../interpolate/linear.js';
import { fixupAlpha } from '../fixup/alpha.js';

const definition = {
	mode: 'dlab',

	parse: ['--din99o-lab'],
	serialize: '--din99o-lab',

	toMode: {
		lab65: convertDlabToLab65,
		rgb: c => convertLab65ToRgb(convertDlabToLab65(c))
	},

	fromMode: {
		lab65: convertLab65ToDlab,
		rgb: c => convertLab65ToDlab(convertRgbToLab65(c))
	},

	channels: ['l', 'a', 'b', 'alpha'],

	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344]
	},

	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: {
			use: interpolatorLinear,
			fixup: fixupAlpha
		}
	}
};

export default definition;
