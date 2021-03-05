import convertLab65ToRgb from './convertLab65ToRgb';
import convertLab65ToXyz65 from './convertLab65ToXyz65';
import convertRgbToLab65 from './convertRgbToLab65';
import convertXyz65ToLab65 from './convertXyz65ToLab65';
import lab from '../lab/definition';

const definition = {
	...lab,
	mode: 'lab65',
	alias: ['lab-d65'],

	output: {
		xyz65: convertLab65ToXyz65,
		rgb: convertLab65ToRgb
	},

	input: {
		xyz65: convertXyz65ToLab65,
		rgb: convertRgbToLab65
	},

	ranges: {
		l: [0, 100],
		a: [-86.183, 98.234],
		b: [-107.86, 94.478]
	},

	parsers: []
};

export default definition;
