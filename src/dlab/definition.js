import convertDlabToLab from './convertDlabToLab';
import convertDlabToRgb from './convertDlabToRgb';
import convertLabToDlab from './convertLabToDlab';
import convertRgbToDlab from './convertRgbToDlab';
import interpolateLinear from '../interpolate/linear';
import { fixupAlpha } from '../fixup/alpha';

export default {
	mode: 'dlab',
	output: {
		lab: convertDlabToLab,
		rgb: convertDlabToRgb
	},
	input: {
		lab: convertLabToDlab,
		rgb: convertRgbToDlab
	},
	channels: ['l', 'a', 'b', 'alpha'],
	ranges: {
		l: [0, 100],
		a: [-39.229, 45.166],
		b: [-43.002, 44.424]
	},
	interpolate: {
		l: interpolateLinear(),
		a: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear(fixupAlpha)
	}
};
