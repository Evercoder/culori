/* 
	Dave Green's Cubehelix
	----------------------

	Green, D. A., 2011, "A colour scheme for the display of astronomical intensity images", 
	Bulletin of the Astronomical Society of India, 39, 289. (2011BASI...39..289G at ADS.) 

	https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/
	https://arxiv.org/pdf/1108.5083.pdf
*/

import { interpolateNumber, interpolateAlpha, interpolateHue, interpolateMethodLinear } from '../interpolate';
import convertRgbToCubehelix from './convertRgbToCubehelix';
import convertCubehelixToRgb from './convertCubehelixToRgb';

export default {
	mode: 'cubehelix',
	channels: ['h', 's', 'l', 'alpha'],
	input: {
		rgb: convertRgbToCubehelix
	},
	output: {
		rgb: convertCubehelixToRgb
	},
	interpolate: {
		'h': interpolateHue(),
		's': interpolateNumber(),
		'l': interpolateNumber(),
		'alpha': interpolateAlpha()
	}
};