import convertLab65ToRgb from './convertLab65ToRgb.js';
import convertLab65ToXyz65 from './convertLab65ToXyz65.js';
import convertRgbToLab65 from './convertRgbToLab65.js';
import convertXyz65ToLab65 from './convertXyz65ToLab65.js';
import lab from '../lab/definition.js';

const definition = {
	...lab,
	mode: 'lab65',

	parsers: ['--lab-d65'],
	serialize: 'color(--lab-d65 ',

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
		a: [-86.182, 98.234],
		b: [-107.86, 94.477]
	}
};

export default definition;
