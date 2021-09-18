import { hwb } from '../util/regex.js';
import { hue } from '../util/hue.js';

const parseHwb = color => {
	let match = color.match(hwb);
	if (!match) return undefined;
	let res = {
		mode: 'hwb',
		h: match[3] === undefined ? hue(match[1], match[2]) : +match[3],
		w: match[4] / 100,
		b: match[5] / 100
	};

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}
	return res;
};

export default parseHwb;
