import {
	rgb_legacy, 
	rgb_current
} from '../util/regex';

export default color => {
	if (typeof color !== 'string') return;
	let match = color.match(rgb_legacy) || color.match(rgb_current);
	if (!match) return;

	return [
		match[1] === undefined ? match[2] / 255 : match[1] / 100, 
		match[3] === undefined ? match[4] / 255 : match[3] / 100, 
		match[5] === undefined ? match[6] / 255 : match[5] / 100
	].concat(
		match[7] === undefined ? 
			match[8] === undefined ? [] : [match[8] / 255] 
			: [match[7] / 100]
	);
}