import { components } from './modes';

const invariant = (k,v) => v;

export default (fn = invariant) => 
	color => {
		let c = components[color.mode].reduce(
			(result, k) => {
				let res = fn(k, color[k]);
				if (res !== undefined) {
					result[k] = res;
				}
				return result;
			}, 
			{}
		);
		c.mode = color.mode;
		return c;
	}