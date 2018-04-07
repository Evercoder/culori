import { degToRad, M } from './constants';

export default ({ h, s, l, alpha }) => {
	let res = { mode: 'rgb' };

	h = (h === undefined ? 0 : h + 120) * degToRad;
	
	let amp = s * l * (1 - l);

	let cosh = Math.cos(h);
	let sinh = Math.sin(h);

	res.r = l + amp * (M[0] * cosh + M[1] * sinh);
	res.g = l + amp * (M[2] * cosh + M[3] * sinh);
	res.b = l + amp * (M[4] * cosh + M[5] * sinh);

	if (alpha !== undefined) res.alpha = alpha;
	return res;
};