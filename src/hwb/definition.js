import convertHwbToRgb from './convertHwbToRgb';
import convertRgbToHwb from './convertRgbToHwb';
import parseHwb from './parseHwb';

export default {
	mode: 'hwb',
	output: { 
		rgb: convertHwbToRgb 
	},
	input: {
		rgb: convertRgbToHwb
	},
	channels: ['h', 'w', 'b'],
	parsers: [ parseHwb ]
};