import convert from './convert';
import prepare from './prepare';

const interpolate = (a, b, t) => (t - a) / (b - a);

export default (colors, mode = 'rgb') => {
	if (colors.length < 2) {
		return undefined;
	}
	let arr = colors;
	// let arr = colors.map(c => convert(prepare(color, mode), mode));
	return t => {
		let cls = t * (colors.length - 1), i = Math.floor(cls);
		return interpolate(arr[i], arr[i+1], cls - i);
	};
};