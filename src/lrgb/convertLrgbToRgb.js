const fn = c => c > 0.0031308 ? 1.055 * Math.pow(c, 1/2.4) - 0.055 : 12.92 * c;

export default ({ r, g, b, alpha }) => {
	let res = {
		mode: 'rgb',
		r: fn(r),
		g: fn(g),
		b: fn(b)
	};
	if (alpha !== undefined) res.alpha = alpha;
	return res;
}