import hsl_to_rgb from '../converters/hsl_to_rgb';
import rgb_to_hsl from '../converters/rgb_to_hsl';

import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'hsl',
	output: { 
		rgb: hsl_to_rgb 
	},
	input: {
		rgb: rgb_to_hsl
	},
	keys: ['h', 's', 'l', 'alpha']
});

export default converter;