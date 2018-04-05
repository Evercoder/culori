import convertLabToLch from './convertLabToLch';
import convertLchToLab from './convertLchToLab';
import convertLchToRgb from './convertLchToRgb';
import convertRgbToLch from './convertRgbToLch';
import parseLch from './parseLch';

export default {
	mode: 'lch',
	output: {
		lab: convertLchToLab,
		rgb: convertLchToRgb
	},
	input: { 
		rgb: convertRgbToLch,
		lch: convertLabToLch
	},
	keys: ['l', 'c', 'h', 'alpha'],
	parsers: [ parseLch ]
};