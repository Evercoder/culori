import { Tokens } from '../parse.js';

function parseRgbModern(color, parsed) {
	if (!parsed) {
		return undefined;
	}
	if (parsed[0] !== 'rgb' && parsed[0] !== 'rgba') {
		return undefined;
	}
	const res = { mode: 'rgb' };
	const [_, r, g, b, alpha] = parsed;
	if (
		r.type === Tokens.Hue ||
		g.type === Tokens.Hue ||
		b.type === Tokens.Hue
	) {
		return undefined;
	}
	if (r.type !== Tokens.None) {
		res.r = r.type === Tokens.Number ? r.value / 255 : r.value / 100;
	}
	if (g.type !== Tokens.None) {
		res.g = g.type === Tokens.Number ? g.value / 255 : g.value / 100;
	}
	if (b.type !== Tokens.None) {
		res.b = b.type === Tokens.Number ? b.value / 255 : b.value / 100;
	}
	if (alpha.type !== Tokens.None) {
		res.alpha =
			alpha.type === Tokens.Number ? alpha.value : alpha.value / 100;
	}

	return res;
}

export default parseRgbModern;
