const convertRgbToYiq = ({ r, g, b, alpha }) => {
	const res = {
		mode: 'yiq',
		y: 0.29889531 * r + 0.58662247 * g + 0.11448223 * b,
		i: 0.59597799 * r - 0.2741761 * g - 0.32180189 * b,
		q: 0.21147017 * r - 0.52261711 * g + 0.31114694 * b
	};
	if (alpha !== undefined) res.alpha = alpha;
	return res;
};

export default convertRgbToYiq;
