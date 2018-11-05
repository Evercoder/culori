/*
	Cosine interpolation
	------------------------------------
 */

import identity from '../util/identity';

export default (γ = 1) => (arr, normalize) => {
	return t => {
		t = Math.pow(t, γ);

		let cls = t * (arr.length - 1),
			idx = Math.floor(cls),
			a = arr[idx],
			b = arr[idx + 1],
			t0 = cls - idx;

		let values = normalize([a, b], t0);
		if (typeof values === 'object') {
			a = values[0];
			b = values[1];
			let c = (1 - Math.cos(t0 * Math.PI)) / 2;
			return a * (1 - c) + b * c;
		} else {
			return values;
		}
	};
};
