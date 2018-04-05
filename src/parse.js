import { parsers } from './modes';

const parse = color => {
	let result, i = 0, len = parsers.length;
	while (i < len) {
		if ((result = parsers[i++](color)) !== undefined) break;
	}
	return result;
};

export default parse;