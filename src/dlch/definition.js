import convertDlchToDlab from './convertDlchToDlab';
import convertDlchToLab from './convertDlchToLab';
import convertDlchToRgb from './convertDlchToRgb';

import convertLabToDlch from './convertLabToDlch';
import convertDlabToDlch from './convertDlabToDlch';
import convertRgbToDlch from './convertRgbToDlch';

import interpolateHue from '../interpolate/hue';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'dlch',
	output: {
		lab: convertDlchToLab,
		dlab: convertDlchToDlab,
		rgb: convertDlchToRgb
	},
	input: {
		lab: convertLabToDlch,
		dlab: convertDlabToDlch,
		rgb: convertRgbToDlch
	},
	channels: ['l', 'c', 'h', 'alpha'],
	interpolate: {
		l: interpolateLinear(),
		c: interpolateLinear(),
		h: interpolateLinear(interpolateHue()),
		alpha: interpolateLinear()
	}
};
