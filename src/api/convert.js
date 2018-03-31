import hsl_to_rgb from '../converters/hsl_to_rgb';
import hsv_to_rgb from '../converters/hsv_to_rgb';
import hsi_to_rgb from '../converters/hsi_to_rgb';
import rgb_to_hsl from '../converters/rgb_to_hsl';
import rgb_to_hsv from '../converters/rgb_to_hsv';
import rgb_to_hsi from '../converters/rgb_to_hsi';

const convert = (color, mode) => {

	if (color === undefined) {
		return undefined;
	}

	// If the color's in the same mode as needed, just return the color.
	if (color.mode === mode) {
		return color;
	}

	// Otherwise convert it to RGB, which is the intermediary format
	// for converting between formats.
	let rgb;
	switch(color.mode) {
		case 'rgb': rgb = color; break;
		case 'hsl': rgb = hsl_to_rgb(color); break;
		case 'hsv': rgb = hsv_to_rgb(color); break;
		case 'hsi': rgb = hsi_to_rgb(color); break;
		default: return undefined;
	}

	switch(mode) {
		case 'rgb': return rgb;
		case 'hsl': return rgb_to_hsl(rgb);
		case 'hsv': return rgb_to_hsv(rgb);
		case 'hsi': return rgb_to_hsi(rgb);
		default: return undefined;
	};

};

export default convert;