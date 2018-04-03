import convert from './convert';
import prepare from './prepare';
import map from './map';

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : a;
}

function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

const interpolate = (a, b, t, k) => 
	a === undefined || b === undefined ? undefined : (
		k === 'h' ? hue(a,b)(t) : (1 - t) * a + t * b
	);

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
			tt = (cls - i);
		return map({ mode: mode }, k => i === classes ? colorA[k] : interpolate(colorA[k], colorB[k], tt, k));
	};
};