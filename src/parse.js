import { parsers, colorProfiles, getMode } from './modes.js';
import { num_per, s, so } from './util/regex.js';

const profiled = new RegExp(
	`^color\\(${so}([a-z0-9\\-]+)${s}${num_per}${s}${num_per}${s}${num_per}${so}(?:\\/${so}${num_per}${so})?\\)$`
);

function parseColorSyntax(color) {
	const m = color.match(profiled);
	if (!m) {
		return undefined;
	}
	const mode = colorProfiles[m[1]];
	if (!mode) {
		return undefined;
	}
	const res = { mode };
	let i = 2;
	getMode(mode).channels.forEach(ch => {
		if (m[i] !== undefined || m[i + 1] !== undefined) {
			res[ch] = m[i] !== undefined ? m[i] / 100 : +m[i + 1];
		}
		i += 2;
	});
	return res;
}

const parse = color => {
	if (typeof color !== 'string') {
		return undefined;
	}
	let result = undefined;
	let i = 0;
	let len = parsers.length;
	while (i < len) {
		if ((result = parsers[i++](color)) !== undefined) {
			return result;
		}
	}
	return parseColorSyntax(color);
};

export default parse;
