import { lab, gray } from '../../util/regex';

export default color => {
	let match, res;

	if (match = color.match(lab)) {
		res = {
			mode: 'lab',
			l: +match[1],
			a: +match[2],
			b: +match[3]
		};
	} else if (match = color.match(gray)) {
		res = {
			mode: 'lab',
			l: +match[1],
			a: 0,
			b: 0
		}
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