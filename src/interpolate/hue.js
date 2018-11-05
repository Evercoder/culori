import normalizeHue from '../util/normalizeHue';

export default arr => {
	let res = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === undefined) {
			res.push(undefined);
			continue;
		}

		let normalized = normalizeHue(arr[i]);
		let prev;

		if (i === 0 || (prev = res[res.length - 1]) === undefined) {
			res.push(normalized);
			continue;
		}

		res.push(
			Math.abs(normalized - prev) > 180
				? normalized - 360 * Math.sign(normalized - prev)
				: normalized
		);
	}

	return res;
};
