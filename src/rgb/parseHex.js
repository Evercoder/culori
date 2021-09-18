import parseNumber from './parseNumber.js';
import { hex } from '../util/regex.js';

const parseHex = color => {
	let match;
	// eslint-disable-next-line no-cond-assign
	return (match = color.match(hex))
		? parseNumber(parseInt(match[1], 16), match[1].length)
		: undefined;
};

export default parseHex;
