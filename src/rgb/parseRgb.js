import {
	rgb_num_old,
	rgb_num_new,
	rgb_per_old,
	rgb_per_new
} from '../util/regex.js';

const parseRgb = color => {
	let match, res;

	if ((match = color.match(rgb_num_old) || color.match(rgb_num_new))) {
		res = {
			mode: 'rgb',
			r: match[1] / 255,
			g: match[2] / 255,
			b: match[3] / 255
		};
	} else if ((match = color.match(rgb_per_old) || color.match(rgb_per_new))) {
		res = {
			mode: 'rgb',
			r: match[1] / 100,
			g: match[2] / 100,
			b: match[3] / 100
		};
	} else {
		return undefined;
	}

	if (match[4] !== undefined) {
		res.alpha = match[4] / 100;
	} else if (match[5] !== undefined) {
		res.alpha = +match[5];
	}

	return res;
};

export default parseRgb;
