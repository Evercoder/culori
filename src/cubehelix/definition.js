/* 
	Dave Green's Cubehelix
	----------------------

	Green, D. A., 2011, "A colour scheme for the display of astronomical intensity images", 
	Bulletin of the Astronomical Society of India, 39, 289. (2011BASI...39..289G at ADS.) 

	https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/
	https://arxiv.org/pdf/1108.5083.pdf

	Although Cubehelix was defined to be a method to obtain a colour scheme,
	it actually contains a definition of a colour space, as identified by 
	Mike Bostock and implemented in D3.js.

	Green's paper introduces the following terminology:

	* 	a `lightness` dimension in the interval [0, 1] 
		on which we interpolate to obtain the colour scheme
	*	a `start` colour that is analogous to a Hue in HSL space
	*	a number of `rotations` around the Hue cylinder.
	*	a `hue` parameter which should more appropriately be called `saturation`
	
	As such, the original definition of the Cubehelix scheme is actually an
	interpolation between two colors in the Cubehelix space:

	H: start 				H: start + 360 * rotations
	S: hue 			->		S: hue
	L: 0					L: 1

	We can therefore extend the interpolation to any two colors in this space,
	with a variable Saturation and a Lightness interval other than the fixed 0 -> 1.
*/

import interpolateHue from '../interpolate/hue';
import interpolateLinear from '../interpolate/linear';
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
		h: interpolateLinear(interpolateHue()),
		s: interpolateLinear(),
		l: interpolateLinear(),
		alpha: interpolateLinear()
	}
};
