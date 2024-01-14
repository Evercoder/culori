import { converter, getMode } from '../src/index.js';

/*
	Find the channel value ranges (minimum & maximum)
	for a particular color space, by converting lots of
	RGB colors to that space.
 */
let ranges = (mode, step = 1 / 128) => {
	let conv = converter(mode);
	let chs = getMode(mode).channels;
	let res = chs.reduce(
		(acc, ch) => ((acc[ch] = [Infinity, -Infinity]), acc),
		{}
	);
	let r, g, b, c, v;
	for (r = 0; r <= 1; r += step) {
		for (g = 0; g <= 1; g += step) {
			for (b = 0; b <= 1; b += step) {
				c = conv({ mode: 'rgb', r, g, b });
				chs.forEach(ch => {
					v = c[ch];
					if (v < res[ch][0]) {
						res[ch][0] = v;
					}
					if (v > res[ch][1]) {
						res[ch][1] = v;
					}
				});
			}
		}
	}
	return res;
};

console.log(ranges(process.argv[2], 1 / 512));
