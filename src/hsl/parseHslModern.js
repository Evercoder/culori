import { Tokens } from '../parse.js';

function parseHslModern(color, parsed) {
	if (!color.match(/^hsla?\(/)) {
		return undefined;
	}
	if (!parsed) {
		return undefined;
	}
	const res = { mode: 'hsl' };
	if (parsed[0] !== undefined) {
		if (parsed[0][0] === Tokens.Percentage) {
			return undefined;
		}
		res.h = typeof parsed[0] === 'number' ? parsed[0] : parsed[0][1];
	}
	if (parsed[1] !== undefined) {
		if (parsed[1][0] === Tokens.Hue) {
			return undefined;
		}
		res.s = typeof parsed[1] === 'number' ? parsed[1] : parsed[1][1] / 100;
	}
	if (parsed[2] !== undefined) {
		if (parsed[2][0] === Tokens.Hue) {
			return undefined;
		}
		res.l = typeof parsed[1] === 'number' ? parsed[2] : parsed[2][1] / 100;
	}
	if (parsed[3] !== undefined) {
		if (parsed[3][0] === Tokens.Hue) {
			return undefined;
		}
		res.alpha =
			typeof parsed[3] === 'number' ? parsed[3] : parsed[3][1] / 100;
	}
	return res;
}

export default parseHslModern;
