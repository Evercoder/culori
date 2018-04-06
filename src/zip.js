import { getModeDefinition } from './modes';
import converter from './converter';

export default mode => {
	let channels = getModeDefinition(mode).channels;
	return colors => {
		let res = {
			mode: mode
		};
		channels.forEach(channel => {
			res[channel] = colors.map(c => c[channel]);
		});
		return res;
	}
}


