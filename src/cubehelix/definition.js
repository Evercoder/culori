/* 
	Dave Green's Cubehelix
	----------------------

	Green, D. A., 2011, "A colour scheme for the display of astronomical intensity images", 
	Bulletin of the Astronomical Society of India, 39, 289. (2011BASI...39..289G at ADS.) 

	https://www.mrao.cam.ac.uk/%7Edag/CUBEHELIX/
	https://arxiv.org/pdf/1108.5083.pdf
*/

export default {
	mode: 'cubehelix',
	channels: [
		'l', // lightness
		's', // start color
		'r', // rotations
		'c' // chroma (defined as 'hue' in Green's paper)
	],
	input: {
		rgb: () => {}
	},
	output: {
		rgb: () => {}
	}
};