import rgb_to_lrgb from '../converters/rgb_to_lrgb';
import lrgb_to_rgb from '../converters/lrgb_to_rgb';

import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'lrgb',
	output: {
		rgb: lrgb_to_rgb
	},
	input: { 
		rgb: rgb_to_lrgb
	},
	keys: ['r', 'g', 'b', 'alpha']
});

export default converter;