import hsv_to_rgb from '../converters/hsv_to_rgb';
import rgb_to_hsv from '../converters/rgb_to_hsv';

import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'hsv',
	output: { 
		rgb: hsv_to_rgb 
	},
	input: {
		rgb: rgb_to_hsv
	},
	keys: ['h', 's', 'v', 'alpha']
});

export default converter;