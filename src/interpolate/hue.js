import normalizeHue from '../util/normalizeHue';

export default arr =>
	arr.map((val, idx, arr) => {
		let a = arr[idx - 1];
		let b = arr[idx];
		if (a !== undefined && b !== undefined) {
			let na = normalizeHue(a);
			let nb = normalizeHue(b);
			return Math.abs(nb - na) > 180
				? normalizeHue(nb - 360 * Math.sign(nb - na))
				: val;
		}
		return val;
	});
