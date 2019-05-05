import convertDlchToDlab from './convertDlchToDlab';
import convertDlchToLab from './convertDlchToLab';
import convertDlchToRgb from './convertDlchToRgb';

import convertLabToDlch from './convertLabToDlch';
import convertDlabToDlch from './convertDlabToDlch';
import convertRgbToDlch from './convertRgbToDlch';

import interpolateHue from '../interpolate/hue';
import interpolateAlpha from '../interpolate/alpha';
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
	ranges: {
		l: [0, 100],
		c: [0, 50.944],
		h: [0, 360]
	},
	interpolate: {
		l: interpolateLinear(),
		c: interpolateLinear(),
		h: interpolateLinear(interpolateHue),
		alpha: interpolateLinear(interpolateAlpha)
	}
};
