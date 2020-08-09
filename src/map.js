import converter from './converter';
import identity from './util/identity';
import _prepare from './_prepare';
import { getModeDefinition } from './modes';

const mapper = (fn, mode = 'rgb') => {
	let channels = mode ? getModeDefinition(mode).channels : null;
	let conv = mode ? converter(mode) : _prepare;
	return color => {
		let conv_color = conv(color);
		return (channels || getModeDefinition(color.mode).channels).reduce(
			(res, ch) => {
				let v = fn(conv_color[ch], ch, conv_color, mode);
				if (v !== undefined && !isNaN(v)) {
					res[ch] = v;
				}
				return res;
			},
			{ mode }
		);
	};
};

const mapAlphaMultiply = (v, ch, c) => {
	if (ch !== 'alpha') {
		return (v || 0) * (c.alpha !== undefined ? c.alpha : 1);
	}
	return v;
};

const mapAlphaDivide = (v, ch, c) => {
	if (ch !== 'alpha' && c.alpha !== 0) {
		return (v || 0) / (c.alpha !== undefined ? c.alpha : 1);
	}
	return v;
};

const mapTransferLinear = (slope = 1, intercept = 0) => (v, ch) => {
	if (ch !== 'alpha') {
		return v * slope + intercept;
	}
	return v;
};

const mapTransferGamma = (amplitude = 1, exponent = 1, offset = 0) => (
	v,
	ch
) => {
	if (ch !== 'alpha') {
		return amplitude * pow(v, exponent) + offset;
	}
	return v;
};

export {
	mapper,
	mapAlphaMultiply,
	mapAlphaDivide,
	mapTransferLinear,
	mapTransferGamma
};
