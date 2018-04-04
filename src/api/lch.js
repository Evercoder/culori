import lab_to_lch from '../converters/lab_to_lch';
import lch_to_lab from '../converters/lch_to_lab';
import lab_to_rgb from '../converters/lab_to_rgb';
import rgb_to_lab from '../converters/rgb_to_lab';

import convert, { defineConverter } from './convert';
defineConverter(
	'lch', 
	{
		lab: lch_to_lab,
		rgb: c => lab_to_rgb(lch_to_lab(c))
	}, 
	{ 
		rgb: c => lab_to_lch(rgb_to_lab(c)),
		lch: lab_to_lch
	},
	['l', 'c', 'h', 'alpha']
);
const converter = convert('lch');
export default color => coverter(color);