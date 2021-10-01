import rgb from '../rgb/definition.js';

import convertXyzToProphoto from './convertXyzToProphoto.js';
import convertProphotoToXyz from './convertProphotoToXyz.js';

import convertXyzToRgb from '../xyz/convertXyzToRgb.js';
import convertRgbToXyz from '../xyz/convertRgbToXyz.js';

/*
	ProPhoto RGB Color space

	References:
		* https://en.wikipedia.org/wiki/ProPhoto_RGB_color_space
 */

const definition = {
	...rgb,
	mode: 'prophoto',
	parse: ['prophoto-rgb'],
	serialize: 'prophoto-rgb',

	fromMode: {
		xyz: convertXyzToProphoto,
		rgb: color => convertXyzToProphoto(convertRgbToXyz(color))
	},

	toMode: {
		xyz: convertProphotoToXyz,
		rgb: color => convertXyzToRgb(convertProphotoToXyz(color))
	}
};

export default definition;
