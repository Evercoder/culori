import converter from './converter';
import identity from './util/identity';
import { getModeDefinition } from './modes';

const mapper = (fn, mode = 'rgb') => {
	let channels = mode ? getModeDefinition(mode).channels : null;
	let conv = mode ? converter(mode) : identity;
	return color => {
		let conv_color = conv(color);
		return (channels || getModeDefinition(color.mode).channels).reduce(
			(res, ch) => {
				let v = fn(conv_color[ch], ch, conv_color, mode);
				if (v !== undefined) {
					res[ch] = v;
				}
				return res;
			},
			{ mode }
		);
	};
};

const mapAlphaMultiply = (v, ch, c) => {
	if (ch !== 'alpha' && v !== undefined) {
		return v * (c.alpha !== undefined ? c.alpha : 1);
	}
	return v;
};

const mapAlphaDivide = (v, ch, c) => {
	if (ch !== 'alpha' && v !== undefined) {
		return v === 0 ? 0 : v / (c.alpha !== undefined ? c.alpha : 1);
	}
	return v;
};

export { mapper, mapAlphaMultiply, mapAlphaDivide };
