import { parsers, colorProfiles, getMode } from './modes.js';
import { rx_num_per_none } from './util/regex.js';

function parseColorSyntax(color) {
	const m = color.match(/^color\(\s*([a-z0-9-]+)\s*(.*?)\s*\)$/);
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
		cm = alpha.match(rx_num_per_none);
		if (!cm) {
			return undefined;
		}
		if (cm[1] !== undefined) {
			res.alpha = cm[1] / 100;
		} else if (cm[2] !== undefined) {
			res.alpha = +cm[2];
		}
	}
	const components = cmp_string.split(/\s+/);
	const { channels, ranges } = getMode(mode);
	for (let i = 0, ch, v; i < channels.length; i++) {
		ch = channels[i];
		if (ch === 'alpha') {
			continue;
		}
		if (i >= components.length || !components[i]) {
			res[ch] = 0;
			continue;
		}
		if (!(cm = components[i].match(rx_num_per_none))) {
			return undefined;
		}
		if (cm[1] !== undefined) {
			if (ranges[ch][2]) {
				// Percentage against reference range
				v =
					ranges[ch][0] +
					(cm[1] / 100) * (ranges[ch][1] - ranges[ch][0]);
				if (Number.isFinite(v)) {
					res[ch] = v;
				}
			} else {
				// Percentage against approximate range,
				// fall back to 0, as if value was omitted
				res[ch] = 0;
			}
		} else if (cm[2] !== undefined) {
			res[ch] = +cm[2];
		}
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
