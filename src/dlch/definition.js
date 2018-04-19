import convertDlchToDlab from './convertDlchToDlab';
import convertDlchToLab from './convertDlchToLab';
import convertDlchToRgb from './convertDlchToRgb';

import convertLabToDlch from './convertLabToDlch';
import convertDlabToDlch from './convertDlabToDlch';
import convertRgbToDlch from './convertRgbToDlch';

import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateHue from '../interpolate/interpolateHue';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';

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
		l: interpolateFunctionLinear(interpolateNumber()),
		c: interpolateFunctionLinear(interpolateNumber()),
		h: interpolateFunctionLinear(interpolateHue()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};