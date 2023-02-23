import { Tokens } from '../parse.js';

function parseRgbModern(color, parsed) {
	if (!color.match(/^rgba?\(/)) {
		return undefined;
	}
	if (!parsed) {
		return undefined;
	}
	const res = { mode: 'rgb' };
	if (parsed[0] !== undefined) {
		if (parsed[0][0] === Tokens.Hue) {
			return undefined;
		}
		res.r =
			typeof parsed[0] === 'number'
				? parsed[0] / 255
				: parsed[0][1] / 100;
	}
	if (parsed[1] !== undefined) {
		if (parsed[1][0] === Tokens.Hue) {
			return undefined;
		}
		res.g =
			typeof parsed[1] === 'number'
				? parsed[1] / 255
				: parsed[1][1] / 100;
	}
	if (parsed[2] !== undefined) {
		if (parsed[2][0] === Tokens.Hue) {
			return undefined;
		}
		res.b =
			typeof parsed[2] === 'number'
				? parsed[2] / 255
				: parsed[2][1] / 100;
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

export default parseRgbModern;
