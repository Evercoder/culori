import lab_to_rgb from '../converters/lab_to_rgb';
import rgb_to_lab from '../converters/rgb_to_lab';
import parseLab from '../parsers/lab';

import { defineConverter } from './convert';
import { registerParser } from './parse';

const converter = defineConverter({
	mode: 'lab',
	output: { 
		rgb: lab_to_rgb 
	},
	input: {
		rgb: rgb_to_lab
	},
	keys: ['l', 'a', 'b', 'alpha']
});

registerParser(parseLab);

export default converter;