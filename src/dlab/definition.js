import convertDlabToLab from './convertDlabToLab';
import convertDlabToRgb from './convertDlabToRgb';
import convertLabToDlab from './convertLabToDlab';
import convertRgbToDlab from './convertRgbToDlab';
import interpolateLinear from '../interpolate/linear';
import interpolateAlpha from '../interpolate/alpha';

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
	bounds: {
		l: [0, 100],
		a: [],
		b: []
	},
	interpolate: {
		l: interpolateLinear(),
		a: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear(interpolateAlpha)
	}
};
