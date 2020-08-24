import convertLab65ToRgb from './convertLab65ToRgb';
import convertLab65ToXyz65 from './convertLab65ToXyz65';
import convertRgbToLab65 from './convertRgbToLab65';
import convertXyz65ToLab65 from './convertXyz65ToLab65';
import { interpolatorLinear } from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

export default {
	mode: 'lab65',
	alias: ['lab-d65'],
	output: {
		xyz65: convertLab65ToXyz65,
		rgb: convertLab65ToRgb
	},
	input: {
		xyz65: convertXyz65ToLab65,
		rgb: convertRgbToLab65
	},
	channels: ['l', 'a', 'b', 'alpha'],
	ranges: {
		l: [0, 100],
		a: [-79.167, 93.408],
		b: [-111.859, 93.246]
	},
	parsers: [],
	interpolate: {
		l: interpolatorLinear,
		a: interpolatorLinear,
		b: interpolatorLinear,
		alpha: { use: interpolatorLinear, fixup: fixupAlpha }
	}
};
