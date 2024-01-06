import { YW } from './constants.js';
import { transferPqDecode } from '../hdr/transfer.js';

const convertItpToXyz65 = ({ i, t, p, alpha }) => {
	const [l, m, s] = [
		i + 0.008609037037932761 * t + 0.11102962500302593 * p,
		i - 0.00860903703793275 * t - 0.11102962500302599 * p,
		i + 0.5600313357106791 * t - 0.32062717498731885 * p
	].map(transferPqDecode);

	const [x, y, z] = [
		2.0701522183894219 * l -
			1.3263473389671556 * m +
			0.2066510476294051 * s,
		0.3647385209748074 * l + 0.680566024947227 * m - 0.0453045459220346 * s,
		-0.049747207535812 * l - 0.0492609666966138 * m + 1.1880659249923042 * s
	].map(c => Math.max(c / YW, 0));

	const res = { mode: 'xyz65', x, y, z };
	if (alpha !== undefined) {
		res.alpha = alpha;
	}

	return res;
};

export default convertItpToXyz65;
