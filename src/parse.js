import { parsers, colorProfiles, getMode } from './modes.js';

/* eslint-disable-next-line no-control-regex */
const IdentStartCodePoint = /[^\x00-\x7F]|[a-zA-Z_]/;

/* eslint-disable-next-line no-control-regex */
const IdentCodePoint = /[^\x00-\x7F]|[-\w]/;

export const Tokens = {
	Function: 'function',
	Ident: 'ident',
	Number: 'number',
	Percentage: 'percentage',
	ParenClose: ')',
	None: 'none',
	Hue: 'hue',
	Alpha: 'alpha'
};

/*
	4.3.10. Check if three code points would start a number
	https://drafts.csswg.org/css-syntax/#starts-with-a-number
 */
function is_num(chars) {
	let ch = chars[chars._i];
	let ch1 = chars[chars._i + 1];
	if (ch === '-' || ch === '+') {
		return (
			/\d/.test(ch1) || (ch1 === '.' && /\d/.test(chars[chars._i + 2]))
		);
	}
	if (ch === '.') {
		return /\d/.test(ch1);
	}
	return /\d/.test(ch);
}

/*
	Check if the stream starts with an identifier.
 */

function is_ident(chars) {
	if (chars._i >= chars.length) {
		return false;
	}
	let ch = chars[chars._i];
	if (ch.match(IdentStartCodePoint)) {
		return true;
	}
	if (ch === '-') {
		if (chars.length - chars._i < 2) {
			return false;
		}
		let ch1 = chars[chars._i + 1];
		if (ch1.match(IdentStartCodePoint) || ch1 === '-') {
			return true;
		}
		return false;
	}
	return false;
}

/*
	4.3.3. Consume a numeric token
	https://drafts.csswg.org/css-syntax/#consume-numeric-token
 */

const huenits = {
	deg: 1,
	rad: 180 / Math.PI,
	grad: 9 / 10,
	turn: 360
};

function num(chars) {
	let value = '';
	if (/[+-]/.test(chars[chars._i])) {
		value += chars[chars._i++];
	}
	value += digits(chars);
	if (chars[chars._i] === '.' && /\d/.test(chars[chars._i + 1])) {
		value += chars[chars._i++] + digits(chars);
	}
	if (/e/i.test(chars[chars._i])) {
		if (
			/[+-]/.test(chars[chars._i + 1]) &&
			/\d/.test(chars[chars._i + 2])
		) {
			value += chars[chars._i++] + chars[chars._i++] + digits(chars);
		} else if (/\d/.test(chars[chars._i + 1])) {
			value += chars[chars._i++] + digits(chars);
		}
	}
	if (is_ident(chars)) {
		let id = ident(chars);
		if (/deg|rad|turn|grad/.test(id)) {
			return { type: Tokens.Hue, value: value * huenits[id] };
		}
		return undefined;
	}
	if (chars[chars._i] === '%') {
		chars._i++;
		return { type: Tokens.Percentage, value: +value };
	}
	return { type: Tokens.Number, value: +value };
}

/*
	Consume digits.
 */
function digits(chars) {
	let v = '';
	while (/\d/.test(chars[chars._i])) {
		v += chars[chars._i++];
	}
	return v;
}

/*
	Consume an identifier.
 */
function ident(chars) {
	let v = '';
	while (chars._i < chars.length && chars[chars._i].match(IdentCodePoint)) {
		v += chars[chars._i++];
	}
	return v;
}

/*
	Consume an ident-like token.
 */
function identlike(chars) {
	let v = ident(chars);
	if (chars[chars._i] === '(') {
		chars._i++;
		return { type: Tokens.Function, value: v };
	}
	if (v === 'none') {
		return { type: Tokens.None, value: undefined };
	}
	return { type: Tokens.Ident, value: v };
}

export function tokenize(str = '') {
	let chars = str.trim().split('');
	chars._i = 0;
	let tokens = [];
	let ch;

	while (chars._i < chars.length) {
		ch = chars[chars._i++];

		/*
			Consume whitespace without emitting it
		 */
		if (ch === '\n' || ch === '\t' || ch === ' ') {
			while (
				chars._i < chars.length &&
				(chars[chars._i] === '\n' ||
					chars[chars._i] === '\t' ||
					chars[chars._i] === ' ')
			) {
				chars._i++;
			}
			continue;
		}

		if (ch === ',') {
			return undefined;
		}

		if (ch === ')') {
			tokens.push({ type: Tokens.ParenClose });
			continue;
		}

		if (ch === '+') {
			if (is_num(chars)) {
				chars._i--;
				tokens.push(num(chars));
				continue;
			}
			return undefined;
		}

		if (ch === '-') {
			if (is_num(chars)) {
				chars._i--;
				tokens.push(num(chars));
				continue;
			} else if (is_ident(chars)) {
				chars._i--;
				tokens.push({ type: Tokens.Ident, value: ident(chars) });
				continue;
			}
			return undefined;
		}

		if (ch === '.') {
			if (is_num(chars)) {
				chars._i--;
				tokens.push(num(chars));
				continue;
			}
			return undefined;
		}

		if (ch === '/') {
			while (
				chars._i < chars.length &&
				(chars[chars._i] === '\n' ||
					chars[chars._i] === '\t' ||
					chars[chars._i] === ' ')
			) {
				chars._i++;
			}
			let alpha;
			if (is_num(chars)) {
				alpha = num(chars);
				if (alpha.type !== Tokens.Hue) {
					tokens.push({ type: Tokens.Alpha, value: alpha });
					continue;
				}
			}
			if (is_ident(chars)) {
				if (ident(chars) === 'none') {
					tokens.push({
						type: Tokens.Alpha,
						value: { type: Tokens.None, value: undefined }
					});
					continue;
				}
			}
			return undefined;
		}

		if (ch.match(/\d/)) {
			chars._i--;
			tokens.push(num(chars));
			continue;
		}

		if (ch.match(IdentStartCodePoint)) {
			chars._i--;
			tokens.push(identlike(chars));
			continue;
		}

		/*
			Treat everything not already handled as an error.
		 */
		return undefined;
	}

	return tokens;
}

export function parseColorSyntax(tokens) {
	tokens._i = 0;
	let token = tokens[tokens._i++];
	if (!token || token.type !== Tokens.Function || token.value !== 'color') {
		return undefined;
	}
	token = tokens[tokens._i++];

	if (token.type !== Tokens.Ident) {
		return undefined;
	}
	const mode = colorProfiles[token.value];
	if (!mode) {
		return undefined;
	}
	const res = { mode };
	const modeDef = getMode(mode);
	if (!modeDef) {
		return undefined;
	}
	const coords = consumeCoords(tokens, false);
	if (!coords) {
		return undefined;
	}
	for (let ii = 0, c; ii < modeDef.channels.length; ii++) {
		c = coords[ii];
		if (c.type !== Tokens.None) {
			res[modeDef.channels[ii]] =
				c.type === Tokens.Number ? c.value : c.value / 100;
		}
	}

	return res;
}

function consumeCoords(tokens, includeHue) {
	const coords = [];
	let token;
	while (tokens._i < tokens.length) {
		token = tokens[tokens._i++];
		if (
			token.type === Tokens.None ||
			token.type === Tokens.Number ||
			token.type === Tokens.Alpha ||
			token.type === Tokens.Percentage ||
			token.type === Tokens.Hue
		) {
			coords.push(token);
			continue;
		}
		if (token.type === Tokens.ParenClose) {
			if (tokens._i < tokens.length) {
				return undefined;
			}
			continue;
		}
		return undefined;
	}

	if (coords.length < 3 || coords.length > 4) {
		return undefined;
	}

	if (coords.length === 4) {
		if (coords[3].type !== Tokens.Alpha) {
			return undefined;
		}
		coords[3] = coords[3].value;
	}
	if (coords.length === 3) {
		coords.push({ type: Tokens.None, value: undefined });
	}

	return coords.every(c => c.type !== Tokens.Alpha) ? coords : undefined;
}

export function parseModernSyntax(tokens, includeHue) {
	tokens._i = 0;
	let token = tokens[tokens._i++];
	if (!token || token.type !== Tokens.Function) {
		return undefined;
	}
	let coords = consumeCoords(tokens, includeHue);
	if (!coords) {
		return undefined;
	}
	coords.unshift(token.value);
	return coords;
}

const parse = color => {
	if (typeof color !== 'string') {
		return undefined;
	}
	const tokens = tokenize(color);
	const parsed = tokens ? parseModernSyntax(tokens, true) : undefined;
	let result = undefined;
	let i = 0;
	let len = parsers.length;
	while (i < len) {
		if ((result = parsers[i++](color, parsed)) !== undefined) {
			return result;
		}
	}
	return tokens ? parseColorSyntax(tokens) : undefined;
};

export default parse;
