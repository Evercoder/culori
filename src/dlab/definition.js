import convertDlabToLab65 from './convertDlabToLab65';
import convertLab65ToDlab from './convertLab65ToDlab';
import convertLab65ToRgb from '../lab65/convertLab65ToRgb';
import convertRgbToLab65 from '../lab65/convertRgbToLab65';
import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

const definition = {
	mode: 'dlab',

	output: {
		lab65: convertDlabToLab65,
		rgb: c => convertLab65ToRgb(convertDlabToLab65(c))
	},

	input: {
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
