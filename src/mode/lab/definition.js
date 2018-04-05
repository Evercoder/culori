import convertLabToRgb from './convertLabToRgb';
import convertRgbToLab from './convertRgbToLab';
import parseLab from './parseLab';

export default {
	mode: 'lab',
	output: { 
		rgb: convertLabToRgb 
	},
	input: {
		rgb: convertRgbToLab
	},
	keys: ['l', 'a', 'b', 'alpha'],
	parsers: [ parseLab ]
};