import lab_to_rgb from '../converters/lab_to_rgb';
import rgb_to_lab from '../converters/rgb_to_lab';

import { defineConverter } from './convert';

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

export default converter;