import normalizeHue from '../util/normalizeHue';

const hue = (arr, fn) => {
	let res = [];
	for (let i = 0; i < arr.length; i++) {
		// use undefined values as-is
		if (arr[i] === undefined) {
			res.push(undefined);
			continue;
		}

		let curr = normalizeHue(arr[i]);
		let prev = res[res.length - 1];

		if (prev === undefined) {
			res.push(curr);
			continue;
		}

		res.push(fn(curr, prev));
	}
	return res;
};

const hueShorter = arr =>
	hue(arr, (c, p) =>
		Math.abs(c - p) <= 180 ? c : c - 360 * Math.sign(c - p)
	);
const hueLonger = arr =>
	hue(arr, (c, p) =>
		Math.abs(c - p) >= 180 || c === p ? c : c - 360 * Math.sign(c - p)
	);

const hueIncreasing = arr =>
	hue(arr, (c, p) =>
		c >= p ? c : c + 360 * (1 + Math.floor(Math.abs(p - c) / 360))
	);
const hueDecreasing = arr =>
	hue(arr, (c, p) =>
		c <= p ? c : c - 360 * (1 + Math.floor(Math.abs(c - p) / 360))
	);

export { hueShorter, hueLonger, hueIncreasing, hueDecreasing };
