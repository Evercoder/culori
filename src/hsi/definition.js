import convertHsiToRgb from './convertHsiToRgb';
import convertRgbToHsi from './convertRgbToHsi';
import interpolateNumber from '../interpolate/number';
import interpolateAlpha from '../interpolate/alpha';
import interpolateHue from '../interpolate/hue';
import interpolateLinear from '../interpolate/linear';

export default {
	mode: 'hsi',
	output: {
		rgb: convertHsiToRgb
	},
	input: {
		rgb: convertRgbToHsi
	},
	channels: ['h', 's', 'i', 'alpha'],
	interpolate: {
		h: interpolateLinear(interpolateHue()),
		s: interpolateLinear(interpolateNumber()),
		i: interpolateLinear(interpolateNumber()),
		alpha: interpolateLinear(interpolateAlpha())
	}
};
