import convertHsiToRgb from './convertHsiToRgb';
import convertRgbToHsi from './convertRgbToHsi';

export default {
	mode: 'hsi',
	output: { 
		rgb: convertHsiToRgb 
	},
	input: {
		rgb: convertRgbToHsi
	},
	channels: ['h', 's', 'i']
}