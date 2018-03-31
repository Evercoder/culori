/* 
	References: 
		* https://drafts.csswg.org/css-color/#lab-to-lch
		* https://drafts.csswg.org/css-color/#color-conversion-code
*/
export default ({ l, a, b, alpha }) => {
	let res = {
		mode: 'lch',
		l: l,
		c: Math.sqrt(a * a + b * b),
		h: Math.atan2(b, a) * 180 / Math.PI
	}
	if (alpha !== undefined) res.alpha = alpha;
	return res;
};