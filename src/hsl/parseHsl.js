import { Tok } from '../parse.js';

function parseHsl(color, parsed) {
	if (!parsed || (parsed[0] !== 'hsl' && parsed[0] !== 'hsla')) {
		return undefined;
	}
	const res = { mode: 'hsl' };
	const [, h, s, l, alpha] = parsed;

	if (h.type !== Tok.None) {
		if (h.type === Tok.Percentage) {
			return undefined;
		}
		res.h = h.value;
	}

	if (s.type !== Tok.None) {
		if (s.type === Tok.Hue) {
			return undefined;
		}
		res.s = s.type === Tok.Number ? s.value : s.value / 100;
	}

	if (l.type !== Tok.None) {
		if (l.type === Tok.Hue) {
			return undefined;
		}
		res.l = l.type === Tok.Number ? l.value : l.value / 100;
	}

	if (alpha.type !== Tok.None) {
		res.alpha = alpha.type === Tok.Number ? alpha.value : alpha.value / 100;
	}

	return res;
}

export default parseHsl;
