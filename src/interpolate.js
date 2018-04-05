import converter from './converter';
import transform from './transform';
import normalizeHue from './util/normalizeHue';

const linear = (a, b, t) => a + t * (b - a);

const generic = (a, b, t) => {
	if (a !== undefined && b !== undefined) return linear(a, b, t);
	return a === undefined ? b : a;
}

const hue = (a, b, t) => {
	if (a !== undefined && b !== undefined) {
		a = normalizeHue(a); b = normalizeHue(b);
		return Math.abs(b - a) > 180 ? 
			normalizeHue(linear(a, b - 360 * Math.sign(b - a), t))
			: linear(a, b, t);
	}
	return a === undefined ? b : a;
}

const alpha = (a, b, t) => {
	if (
		(a === undefined && b === undefined) ||
		(a === undefined && t === 0) ||
		(b === undefined && t === 1)
	) return undefined;
	return linear(a === undefined ? 1 : a, b === undefined ? 1: b, t);
}

export default (seeds, mode = 'rgb') => {
	if (seeds.length < 2) {
		return undefined;
	}

	let colors = seeds.map(converter(mode));

	return t => {

		// clamp t to [0, 1]
		t = Math.min(Math.max(0, t), 1);

		// at the end of the range, we don't have 
		// an endColor to interpolate with,
		// so just return a copy of the last color.
		if (t === 1) {
			return Object.assign({}, colors[colors.length - 1]);
		}

		// find out between which two colors we need to interpolate
		let cls = t * (colors.length - 1);
		let idx = Math.floor(cls);
		let startColor = colors[idx], endColor = colors[idx + 1];
		let t0 = (cls - idx);

		// create a new color in the mode given, and map its values
		return transform(key => (key === 'h' ? hue : (key === 'alpha' ? alpha : generic))(startColor[key], endColor[key], t0))({ mode: mode }) ;
	};
};