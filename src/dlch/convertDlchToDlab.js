const convertDlchToDlab = ({ l, c, h, alpha }) => {
	let res = {
		mode: 'dlab',
		l: l,
		a: c === 0 ? 0 : c * Math.cos((h / 180) * Math.PI),
		b: c === 0 ? 0 : c * Math.sin((h / 180) * Math.PI)
	};
	if (alpha !== undefined) res.alpha = alpha;
	return res;
};

export default convertDlchToDlab;
