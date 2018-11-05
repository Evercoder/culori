import convertDlabToLab from './convertDlabToLab';
import convertDlabToRgb from './convertDlabToRgb';
import convertLabToDlab from './convertLabToDlab';
import convertRgbToDlab from './convertRgbToDlab';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
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
		l: interpolateLinear(interpolateNumber()),
		a: interpolateLinear(interpolateNumber()),
		b: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
