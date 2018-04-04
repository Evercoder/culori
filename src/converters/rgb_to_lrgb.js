const fn = c => c < 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

export default ({ r, g, b, alpha }) => {
	let res = {
		mode: 'lrgb',
		r: fn(r),
		g: fn(g),
		b: fn(b)
	};
	if (alpha !== undefined) res.alpha = alpha;
	return res;
}