import { formatHex, interpolate } from '../src/index.js';

const it = interpolate([
	function backInOut(t) {
		let s = 1.70158 * 1.525;
		return (t *= 2) < 1
			? 0.5 * (t * t * ((s + 1) * t - s))
			: 0.5 * ((t -= 2) * t * ((s + 1) * t + s) + 2);
	},
	'#ff0000',
	'#cc8833',
	'#3344cc'
]);

for (let i = 0; i <= 1; i = Number((i + 0.05).toFixed(2))) {
	let color = formatHex(it(i));
	console.log({
		t: i,
		color
	});
}
