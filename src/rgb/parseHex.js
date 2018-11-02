import parseNumber from './parseNumber';
import { hex } from '../util/regex';

export default color => {
	let match;
	return (match = color.match(hex))
		? parseNumber(parseInt(match[1], 16), match[1].length)
		: undefined;
};
