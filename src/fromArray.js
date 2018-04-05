import { getChannels } from './modes';

export default (color, mode) => {
	let res = { mode: mode };
	getChannels(mode).forEach((k, idx) => {
		if (color[idx] !== undefined) {
			res[k] = color[idx];
		}
	});
	return res;
}