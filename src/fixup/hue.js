import normalizeHue from '../util/normalizeHue';

const hue = (hues, fn) => {
	return hues
		.map((hue, idx, arr) => {
			if (hue === undefined) {
				return hue;
			}
			let normalized = normalizeHue(hue);
			if (idx === 0 || hues[idx - 1] === undefined) {
				return normalized;
			}
			return fn(normalized - arr[idx - 1]);
		})
		.reduce((acc, curr) => {
			if (
				!acc.length ||
				curr === undefined ||
				acc[acc.length - 1] === undefined
			) {
				acc.push(curr);
				return acc;
			}
			acc.push(curr + acc[acc.length - 1]);
			return acc;
		}, []);
};

const hueShorter = arr =>
	hue(arr, d => (Math.abs(d) <= 180 ? d : d - 360 * Math.sign(d)));
const hueLonger = arr =>
	hue(arr, d => (Math.abs(d) >= 180 || d === 0 ? d : d - 360 * Math.sign(d)));
const hueIncreasing = arr => hue(arr, d => (d >= 0 ? d : d + 360));
const hueDecreasing = arr => hue(arr, d => (d <= 0 ? d : d - 360));

export { hueShorter, hueLonger, hueIncreasing, hueDecreasing };
