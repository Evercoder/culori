import from_hsl from '../converters/from_hsl';
import from_hsv from '../converters/from_hsv';
import from_hsi from '../converters/from_hsi';

import to_hsl from '../converters/to_hsl';
import to_hsv from '../converters/to_hsv';
import to_hsi from '../converters/to_hsi';

import isCulori from './isCulori';
import toMode from './toMode';

function spew(color, mode = 'rgb') {

	if (!isCulori(color)) {
		return undefined;
	}

	let culori_mode = toMode(color);

	// If the color's in the same mode as needed, just return the color.
	if (culori_mode === mode) {
		return color;
	}

	// If the mode's RGB, convert the color to RGB
	if (mode === 'rgb') {
		switch(culori_mode) {
			case 'hsi': return from_hsi(color);
			case 'hsv': return from_hsv(color);
			case 'hsl': return from_hsl(color);
			case 'rgb': return color;
		}
	}

	// Otherwise, obtain the RGB equivalent
	let rgb = spew(color);

	switch(mode) {
		case 'hsi': return to_hsi(color);
		case 'hsv': return to_hsv(color);
		case 'hsl': return to_hsl(color);
		case 'rgb': return color;
	}
}

export default spew;