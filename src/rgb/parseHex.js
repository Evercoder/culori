import parseNumber from './parseNumber';
import { hex } from '../util/regex';

const parseHex = color => {
	let match;
	return (match = color.match(hex))
		? parseNumber(parseInt(match[1], 16), match[1].length)
		: undefined;
};

export default parseHex;
