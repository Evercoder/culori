/* 
	References: 
		* https://drafts.csswg.org/css-color/#lch-to-lab
		* https://drafts.csswg.org/css-color/#color-conversion-code
*/
export default ({ l, c, h, alpha }) => {
	let res = {
		mode: 'lab',
		l: l,
		a: c * Math.cos( h / 180 * Math.PI ),
		b: c * Math.sin( h / 180 * Math.PI )
	}
	if (alpha !== undefined) res.alpha = alpha;
	return res;
};