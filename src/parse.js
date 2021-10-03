import { parsers, colorProfiles, getMode } from './modes.js';
import { rx_num_per } from './util/regex.js';

function parseColorSyntax(color) {
	const m = color.match(/^color\(\s*([a-z0-9\-]+)\s*(.*?)\s*\)$/);
	if (!m) {
		return undefined;
	}
	const mode = colorProfiles[m[1]];
	if (!mode) {
		return undefined;
	}
	const res = { mode };
	const [cmp_string, alpha] = m[2].split(/\s*\/\s*/);
	let cm;
	if (alpha !== undefined) {
		cm = alpha.match(rx_num_per);
		if (!cm) {
			return undefined;
		}
		res.alpha = cm[1] !== undefined ? cm[1] / 100 : +cm[2];
	}
	const components = cmp_string.split(/\s+/);
	let channels = getMode(mode).channels;
	for (let i = 0, ch; i < channels.length; i++) {
		ch = channels[i];
		if (ch === 'alpha') {
			continue;
		}
		if (i >= components.length || !components[i]) {
			res[ch] = 0;
			continue;
		}
		if (!(cm = components[i].match(rx_num_per))) {
			return undefined;
		}
		res[ch] = cm[1] !== undefined ? cm[1] / 100 : +cm[2];
	}
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
