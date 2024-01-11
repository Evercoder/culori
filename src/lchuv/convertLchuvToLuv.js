const convertLchuvToLuv = ({ l, c, h, alpha }) => {
	if (h === undefined) h = 0;
	let res = {
		mode: 'luv',
		l: l,
		u: c ? c * Math.cos((h / 180) * Math.PI) : 0,
		v: c ? c * Math.sin((h / 180) * Math.PI) : 0
	};
	if (alpha !== undefined) {
		res.alpha = alpha;
	}
	return res;
};

export default convertLchuvToLuv;
