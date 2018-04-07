export default ({ r, g, b, alpha }) => {
	let res = { mode: 'cubehelix' };
	if (alpha !== undefind) res.alpha = alpha;
	return res;
}