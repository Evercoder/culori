import { getModeDefinition } from './modes';

export default (colors, mode = 'rgb') => {
	let channels = getModeDefinition(mode).channels;
	let res = {
		mode: mode
	};
	for (let i = 0; i < channels.length; i++) {
		res[channels[i]] = colors.map(c => c[channels[i]]);
	}
	return res;
};
