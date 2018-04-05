import converter from './converter';

export default (beta, mode = 'rgb') => {
	
	let gamma = beta > 0 ? 0 - beta : 1 / (2 + beta);

	let conv = converter(mode);

	return color => {

		let conv_back = converter(color.mode);
		let res = Object.assign({}, conv(color));

		switch (mode) {
			case 'rgb':
			case 'lrgb':
				res.r *= Math.pow(0.7, gamma);
				res.g *= Math.pow(0.7, gamma);
				res.b *= Math.pow(0.7, gamma);
				break;
			case 'hsl':
			case 'lab':
			case 'lch':
				res.l *= exp;
				break;
			case 'hsv':
				res.v *= exp;
				break;
			case 'hsi':
				res.i *= exp;
				break;
			case 'hwb':
				// ?
				break;
		}

		return conv_back(res);
	}
}