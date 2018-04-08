import { getModeDefinition } from './modes';
import converter from './converter';

const euclidean = mode => {
	let channels = getModeDefinition(mode).channels;
	let conv = converter(mode);
	return (colorA, colorB) => {
		let A = conv(colorA);
		let B = conv(colorB);
		return Math.sqrt(
			channels.reduce(
				(delta, k) => 
					// ignore alpha channel in computing the euclidean distance
					delta + (k === 'alpha' ? 0 : Math.pow(A[k] - B[k], 2)), 
					0
				)
		);
	}
};

const cie94 = (KL = 1, K1 = 0.045, K2 = 0.015) => {
	let lab = converter('lab'),
		lch = converter('lch');
	
	return (a, b) => {

		let colorA = lab(a), colorB = lab(b);
		let lchA = lch(colorA), lchB = lch(colorB);

		let deltaL_squared = (colorA.l - colorB.l) ** 2;
		let deltaC_squared = (lchA.c - lchB.c) ** 2;
		let deltaH_squared = ((colorA.a - colorB.a) ** 2) + ((colorA.b - colorB.b) ** 2) - deltaC_squared;

		return Math.sqrt(
			deltaL_squared / (KL ** 2) + 
			deltaC_squared / ((1 + K1 * lchA.c) ** 2) +
			deltaH_squared / ((1 + K2 * lchA.c) ** 2)
		);
	}
}

// todo
const ciede2000 = () => {
	let lab = converter('lab');
	return (colorA, colorB) => NaN
}

// todo
const cmc = () => {
	let lab = converter('lab');
	return (colorA, colorB) => NaN
}

const formulas = {
	cie76: () => euclidean('lab'),
	cie94: () => cie94(),
	ciede2000: () => ciede2000(),
	cmc: () => cmc(),
	euclidean: mode => euclidean(mode)
};

export default (formula = 'euclidean', mode = 'rgb') => {
	return formulas[formula](mode);
}