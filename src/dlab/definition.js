import convertDlabToLab from './convertDlabToLab';
import convertDlabToRgb from './convertDlabToRgb';
import convertLabToDlab from './convertLabToDlab';
import convertRgbToDlab from './convertRgbToDlab';
import interpolateLinear from '../interpolate/linear';

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
	interpolate: {
		l: interpolateLinear(),
		a: interpolateLinear(),
		b: interpolateLinear(),
		alpha: interpolateLinear()
	}
};
