import converter from '../converter';
import zip from '../zip';
import { getModeDefinition } from '../modes';

export default (colors, mode = 'rgb', interpolations) => {
	let zipped = zip(colors.map(converter(mode)), mode);
	interpolations = Object.assign({}, getModeDefinition(mode).interpolate, interpolations);
	let keys = Object.keys(interpolations);

	return t => {
		t = Math.min(Math.max(0, t), 1);
		let res = { mode: mode }, val;
		for (var i = 0; i < keys.length; i++) {
			if ((val = interpolations[keys[i]](zipped[keys[i]], t)) !== undefined) {
				res[keys[i]] = val;
			}
		}
		return res;
	}
};