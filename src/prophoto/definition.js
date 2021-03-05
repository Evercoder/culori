import rgb from '../rgb/definition';

import convertXyzToProphoto from './convertXyzToProphoto';
import convertProphotoToXyz from './convertProphotoToXyz';

import convertXyzToRgb from '../xyz/convertXyzToRgb';
import convertRgbToXyz from '../xyz/convertRgbToXyz';

/*
	ProPhoto RGB Color space

	References:
		* https://en.wikipedia.org/wiki/ProPhoto_RGB_color_space
 */

const definition = {
	...rgb,
	mode: 'prophoto',
	alias: ['prophoto-rgb'],
	parsers: [],

	input: {
		xyz: convertXyzToProphoto,
		rgb: color => convertXyzToProphoto(convertRgbToXyz(color))
	},

	output: {
		xyz: convertProphotoToXyz,
		rgb: color => convertXyzToRgb(convertProphotoToXyz(color))
	}
};

export default definition;
