import convert from './convert';
import prepare from './prepare';
import map from './map';

const interpolate = (a, b, t) => 
	a === undefined || b === undefined ? 
		undefined 
		: Math.min(a, b) + t * Math.abs(b - a);

export default (colors, mode = 'rgb') => {
	if (colors.length < 2) {
		return undefined;
	}
	let classes = colors.length - 1;
	let arr = colors.map(color => convert(prepare(color, mode), mode));
	return t => {
		let cls = Math.min(Math.max(0, t), 1) * classes, 
			i = Math.floor(cls),
			colorA = arr[i],
			colorB = arr[i + 1],
			tt = (cls - i) / classes;
		return map({ mode: mode }, k => i === classes ? colorA[k] : interpolate(colorA[k], colorB[k], tt));
	};
};