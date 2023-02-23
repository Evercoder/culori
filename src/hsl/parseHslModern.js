import { Tokens } from '../parse.js';

function parseHslModern(color, parsed) {
	if (!parsed) {
		return undefined;
	}
	if (parsed[0] !== 'hsl' && parsed[0] !== 'hsla') {
		return undefined;
	}
	const res = { mode: 'hsl' };
	const [_, h, s, l, alpha] = parsed;

	if (h.type !== Tokens.None) {
		if (h.type === Tokens.Percentage) {
			return undefined;
		}
		res.h = h.value;
	}

	if (s.type !== Tokens.None) {
		if (s.type === Tokens.Hue) {
			return undefined;
		}
		res.s = s.type === Tokens.Number ? s.value : s.value / 100;
	}

	if (l.type !== Tokens.None) {
		if (l.type === Tokens.Hue) {
			return undefined;
		}
		res.l = l.type === Tokens.Number ? l.value : l.value / 100;
	}

	if (alpha.type !== Tokens.None) {
		res.alpha =
			alpha.type === Tokens.Number ? alpha.value : alpha.value / 100;
	}

	return res;
}

export default parseHslModern;
