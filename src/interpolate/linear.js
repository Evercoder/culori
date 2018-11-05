import identity from '../util/identity';

const get_classes = arr => {
	let classes = [];
	for (let i = 0; i < arr.length - 1; i++) {
		let a = arr[i];
		let b = arr[i + 1];

		if (a === undefined && b === undefined) {
			classes.push(undefined);
		} else if (a !== undefined && b !== undefined) {
			classes.push([a, b]);
		} else {
			classes.push(a !== undefined ? [a, a] : [b, b]);
		}
	}

	return classes;
};

export default (normalize = identity, γ = 1) => arr => {
	let normalized_arr = normalize(arr);
	let classes = get_classes(normalized_arr);

	return t => {
		t = Math.pow(t, γ);

		let cls = t * classes.length;
		let idx = t === 1 ? classes.length - 1 : Math.floor(cls);
		let pair = classes[idx];

		return pair === undefined
			? undefined
			: pair[0] + (cls - idx) * (pair[1] - pair[0]);
	};
};
