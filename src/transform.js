import { getChannels } from './modes';

const invariant = (k,v) => v;

export default (fn = invariant) => 
	color => {
		let res = { mode: color.mode }, mapped;
		getChannels(color.mode).forEach(key => {
			if ((mapped = fn(key, color[key])) !== undefined) {
				res[key] = mapped;
			}
		});
		return res;
	}