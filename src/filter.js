import { mapper, mapTransferLinear } from './map';
import converter from './converter';
import lerp from './util/lerp';
import { getModeDefinition } from './modes';

const matrixSepia = amount => {
	let a = 1 - Math.min(amount, 1);
	return [
		0.393 + 0.607 * a,
		0.769 - 0.769 * a,
		0.189 - 0.189 * a,
		0,
		0.349 - 0.349 * a,
		0.686 + 0.314 * a,
		0.168 - 0.168 * a,
		0,
		0.272 - 0.272 * a,
		0.534 - 0.534 * a,
		0.131 + 0.869 * a,
		0,
		0,
		0,
		0,
		1
	];
};

const matrixSaturate = sat => {
	return [
		0.213 + 0.787 * sat,
		0.715 - 0.715 * sat,
		0.072 - 0.072 * sat,
		0,
		0.213 - 0.213 * sat,
		0.715 + 0.285 * sat,
		0.072 - 0.072 * sat,
		0,
		0.213 - 0.213 * sat,
		0.715 - 0.715 * sat,
		0.072 + 0.928 * sat,
		0,
		0,
		0,
		0,
		1
	];
};

const matrixGrayscale = amount => {
	let a = 1 - Math.min(amount, 1);
	return [
		0.2126 + 0.7874 * a,
		0.7152 - 0.7152 * a,
		0.0722 - 0.0722 * a,
		0,
		0.2126 - 0.2126 * a,
		0.7152 + 0.2848 * a,
		0.0722 - 0.0722 * a,
		0,
		0.2126 - 0.2126 * a,
		0.7152 - 0.7152 * a,
		0.0722 + 0.9278 * a,
		0,
		0,
		0,
		0,
		1
	];
};

const matrix = (values, mode) => {
	let conv = converter(mode);
	let channels = getModeDefinition(mode).channels;
	return color => {
		let c = conv(color);
		let res = { mode };
		let ch,
			count = channels.length;
		for (let i = 0; i < values.length; i++) {
			ch = channels[Math.floor(i / count)];
			if (c[ch] === undefined) {
				continue;
			}
			res[ch] =
				(res[ch] || 0) + values[i] * (c[channels[i % count]] || 0);
		}
		return res;
	};
};

const filterBrightness = (amt = 1, mode = 'rgb') =>
	mapper(mapTransferLinear(amt), mode);
const filterContrast = (amt = 1, mode = 'rgb') =>
	mapper(mapTransferLinear(amt, (1 - amt) / 2), mode);
const filterSepia = (amt = 1, mode = 'rgb') => matrix(matrixSepia(amt), mode);
const filterSaturate = (amt = 1, mode = 'rgb') =>
	matrix(matrixSaturate(amt), mode);
const filterGrayscale = (amt = 1, mode = 'rgb') =>
	matrix(matrixGrayscale(amt), mode);
const filterInvert = (amt = 1, mode = 'rgb') =>
	mapper((v, ch) => (ch === 'alpha' ? v : lerp(amt, 1 - amt, v)), mode);

export {
	filterBrightness,
	filterContrast,
	filterSepia,
	filterSaturate,
	filterGrayscale,
	filterInvert
};
