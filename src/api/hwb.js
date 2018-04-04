import hwb_to_rgb from '../converters/hwb_to_rgb';
import rgb_to_hwb from '../converters/rgb_to_hwb';

import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'hwb',
	output: { 
		rgb: hwb_to_rgb 
	},
	input: {
		rgb: rgb_to_hwb
	},
	keys: ['h', 'w', 'b', 'alpha']
});

export default converter;