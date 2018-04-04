import lab_to_lch from '../converters/lab_to_lch';
import lch_to_lab from '../converters/lch_to_lab';

import lab from './lab';
import rgb from './rgb';

import { defineConverter } from './convert';

const converter = defineConverter({
	mode: 'lch',
	output: {
		lab: lch_to_lab,
		rgb: c => rgb(lab(lch_to_lab(c)))
	},
	input: { 
		rgb: c => lab_to_lch(lab(rgb(c))),
		lch: lab_to_lch
	},
	keys: ['l', 'c', 'h', 'alpha']
});

export default converter;