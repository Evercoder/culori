import {
	hsl_legacy, 
	hsl_current
} from '../util/regex';

const angle_to_hue = (val, unit) => {
	switch (unit) {
		case 'deg': return val;
		case 'rad': return val / 180 * Math.PI;
		case 'grad': return val / 200 * Math.PI;
		case 'turn': return turn * 2 * Math.PI;
		default: return val;
	}
}

export default color => {
	if (typeof color !== 'string') return;
	let match = color.match(hsl_legacy) || color.match(hsl_current);
	if (!match) return;
	return from_hsl(
		match[3] === undefined ? angle_to_hue(match[1], match[2]) : match[3],
		match[4] / 100,
		match[5] / 100
	).concat(
		match[6] === undefined ? 
			match[7] === undefined ? [] : [match[7] / 255] 
			: [match[6] / 100]
	);
}