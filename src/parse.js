import { parsers } from './modes';

const parse = color => {
	if (!color) {
		return undefined;
	}
	let result;
	let i = 0;
	let len = parsers.length;
	while (i < len) {
		if ((result = parsers[i++](color)) !== undefined) break;
	}
	return result;
};

export default parse;
