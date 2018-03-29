import {
	rgb_legacy, 
	rgb_current
} from '../util/regex';

export default color => {
	var match;
	return (match = color.match(rgb_legacy) || color.match(rgb_current)) ? [
		match[1] === undefined ? match[2] / 255 : match[1] / 100, 
		match[3] === undefined ? match[4] / 255 : match[3] / 100, 
		match[5] === undefined ? match[6] / 255 : match[5] / 100,
		match[7] === undefined ? match[8] === undefined ? undefined : +match[8] : match[7] / 100
	] : undefined;
};