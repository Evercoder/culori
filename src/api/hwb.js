import hwb_to_rgb from '../converters/hwb_to_rgb';
import rgb_to_hwb from '../converters/rgb_to_hwb';
import parseHwb from '../parsers/hwb';

import { defineConverter } from './convert';
import { registerParser } from './parse';

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

registerParser(parseHwb);

export default converter;