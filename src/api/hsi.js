import hsi_to_rgb from '../converters/hsi_to_rgb';
import rgb_to_hsi from '../converters/rgb_to_hsi';

import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'hsi',
	output: { 
		rgb: hsi_to_rgb 
	},
	input: {
		rgb: rgb_to_hsi
	},
	keys: ['h', 's', 'i', 'alpha']
});

export default converter;