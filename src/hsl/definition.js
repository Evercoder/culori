import convertHslToRgb from './convertHslToRgb';
import convertRgbToHsl from './convertRgbToHsl';
import parseHsl from './parseHsl';

export default {
	mode: 'hsl',
	output: { 
		rgb: convertHslToRgb 
	},
	input: {
		rgb: convertRgbToHsl
	},
	channels: ['h', 's', 'l'],
	parsers: [ parseHsl ]
};