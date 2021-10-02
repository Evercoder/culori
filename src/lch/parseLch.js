import hueToDeg from '../util/hue.js';
import { hue, num, num_per, s } from '../util/regex.js';

const lch = new RegExp(
	`^lch\\(\\s*${num}%?${s}${num}${s}${hue}\\s*(?:\\/\\s*${num_per}\\s*)?\\)$`
);

const parseLch = color => {
	let match = color.match(lch);

	if (!match) {
		return undefined;
	}

	let res = {
		mode: 'lch',
		l: +match[1],
		c: Math.max(0, +match[2]),
		h: match[5] === undefined ? hueToDeg(match[3], match[4]) : +match[5]
	};

	if (match[6] !== undefined) {
		res.alpha = match[6] / 100;
	} else if (match[7] !== undefined) {
		res.alpha = +match[7];
	}

	return res;
};

export default parseLch;
