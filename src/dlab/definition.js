import convertDlabToLab from './convertDlabToLab';
import convertDlabToRgb from './convertDlabToRgb';
import convertLabToDlab from './convertLabToDlab';
import convertRgbToDlab from './convertRgbToDlab';
import interpolateNumber from '../interpolate/interpolateNumber';
import interpolateAlpha from '../interpolate/interpolateAlpha';
import interpolateFunctionLinear from '../interpolate/interpolateFunctionLinear';

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
		l: interpolateFunctionLinear(interpolateNumber()),
		a: interpolateFunctionLinear(interpolateNumber()),
		b: interpolateFunctionLinear(interpolateNumber()),
		alpha: interpolateFunctionLinear(interpolateAlpha())
	}
};