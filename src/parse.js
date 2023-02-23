import { parsers, colorProfiles, getMode } from './modes.js';

/* eslint-disable-next-line no-control-regex */
const IdentStartCodePoint = /[^\x00-\x7F]|[a-zA-Z_]/;

/* eslint-disable-next-line no-control-regex */
const IdentCodePoint = /[^\x00-\x7F]|[-\w]/;

export const Tokens = {
	Comma: 'comma',
	Delim: 'delim',
	Dimension: 'dimension',
	Function: 'function',
	Ident: 'ident',
	Number: 'number',
	Whitespace: ' ',
	Percentage: 'percentage',
	ParenClose: ')',
	None: 'none',
	Solidus: '/',
	Hue: 'hue'
};

/* 
	Consume an escape sequence.
	TODO: handle newlines and hex digits
*/
function esc(chars) {
	let v = '';
	if (!chars.length) {
		throw new Error(
			'Unexpected end of input, unterminated escape sequence'
		);
	} else {
		// Consume escaped character
		v += chars.shift();
	}
	return v;
}

/*
	4.3.10. Check if three code points would start a number
	https://drafts.csswg.org/css-syntax/#starts-with-a-number
 */
function is_num(chars) {
	let ch = chars[0];
	let ch1 = chars[1];
	if (ch === '-' || ch === '+') {
		return /\d/.test(ch1) || (ch1 === '.' && /\d/.test(chars[2]));
	}
	if (ch === '.') {
		return /\d/.test(ch1);
	}
	return /\d/.test(ch);
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
	if (/[+-]/.test(chars[0])) {
		value += chars.shift();
	}
	value += digits(chars);
	if (chars[0] === '.' && /\d/.test(chars[1])) {
		value += chars.shift() + digits(chars);
	}
	if (/e/i.test(chars[0])) {
		if (/[+-]/.test(chars[1]) && /\d/.test(chars[2])) {
			value += chars.shift() + chars.shift() + digits(chars);
		} else if (/\d/.test(chars[1])) {
			value += chars.shift() + digits(chars);
		}
	}
	if (is_ident(chars)) {
		let id = ident(chars);
		// if (id === 'deg' || id === 'rad' || id === 'turn' || id === 'grad') {
		if (/deg|rad|turn|grad/.test(id)) {
			return [Tokens.Hue, value * huenits[id]];
		}
		return [Tokens.Dimension, +value, id];
	}
	if (chars[0] === '%') {
		chars.shift();
		return [Tokens.Percentage, +value];
	}
	return +value;
}

/*
	Consume digits
 */
function digits(chars) {
	let v = '';
	while (/\d/.test(chars[0])) {
		v += chars.shift();
	}
	return v;
}

/*
	Check if the stream starts with an identifier.
 */

function is_ident(chars) {
	if (!chars.length) {
		return false;
	}
	let ch = chars[0];
	if (ch.match(IdentStartCodePoint)) {
		return true;
	}
	if (ch === '-') {
		if (chars.length < 2) {
			return false;
		}
		let ch1 = chars[1];
		if (ch1.match(IdentStartCodePoint) || ch1 === '-') {
			return true;
		}
		if (ch1 === '\\') {
			return !!esc(chars);
		}
		return false;
	}
	if (ch === '\\') {
		return !!esc(chars);
	}
	return false;
}

/*
	Consume an identifier.
 */
function ident(chars) {
	let v = '',
		ch;
	while (
		chars.length &&
		(chars[0].match(IdentCodePoint) || chars[0] === '\\')
	) {
		v += (ch = chars.shift()) === '\\' ? esc(chars) : ch;
	}
	return v;
}

/*
	Consume an ident-like token.
 */
function identlike(chars) {
	let v = ident(chars);
	// TODO: handle URLs?
	if (chars[0] === '(') {
		chars.shift();
		return [Tokens.Function, v];
	}
	if (v === 'none') {
		return Tokens.None;
	}
	return [Tokens.Ident, v];
}

export function tokenize(str = '') {
	let chars = str.trim().split('');
	let tokens = [];
	let ch;

	while (chars.length) {
		ch = chars.shift();

		/*
			Consume whitespace without emitting it
		 */
		if (ch.match(/[\n\t ]/)) {
			while (chars.length && chars[0].match(/[\n\t ]/)) {
				chars.shift();
			}
			continue;
		}

		if (ch === ')') {
			tokens.push(Tokens.ParenClose);
			continue;
		}

		if (ch === '+') {
			if (is_num(chars)) {
				chars.unshift(ch);
				tokens.push(num(chars));
			} else {
				tokens.push([Tokens.Delim, ch]);
			}
			continue;
		}

		if (ch === ',') {
			tokens.push(Tokens.Comma);
			continue;
		}

		if (ch === '-') {
			if (is_num(chars)) {
				chars.unshift(ch);
				tokens.push(num(chars));
			} else if (is_ident(chars)) {
				chars.unshift(ch);
				tokens.push([Tokens.Ident, ident(chars)]);
			} else {
				tokens.push([Tokens.Delim, ch]);
			}
			continue;
		}

		if (ch === '.') {
			if (is_num(chars)) {
				chars.unshift(ch);
				tokens.push(num(chars));
			} else {
				tokens.push([Tokens.Delim, ch]);
			}
			continue;
		}

		if (ch === '/') {
			tokens.push(Tokens.Solidus);
			continue;
		}

		if (ch === '\\') {
			if (chars.length && chars[0] !== '\n') {
				chars.unshift(ch);
				tokens.push(identlike(chars));
				continue;
			}
			throw new Error('Invalid escape');
		}

		if (ch.match(/\d/)) {
			chars.unshift(ch);
			tokens.push(num(chars));
			continue;
		}

		if (ch.match(IdentStartCodePoint)) {
			chars.unshift(ch);
			tokens.push(identlike(chars));
			continue;
		}

		/*
			Treat everything not already handled
			as a delimiter.
		 */
		tokens.push([Tokens.Delim, ch]);
	}

	return tokens;
}

export function parseColorSyntax(tokens) {
	let token = tokens.shift();
	if (!token || token[0] !== Tokens.Function || token[1] !== 'color') {
		return undefined;
	}
	token = tokens.shift();

	if (token[0] !== Tokens.Ident) {
		return undefined;
	}
	const mode = colorProfiles[token[1]];
	if (!mode) {
		return undefined;
	}
	const res = { mode };
	const modeDef = getMode(mode);
	if (!modeDef) {
		return undefined;
	}
	for (let i = 0, ch; i < modeDef.channels.length; i++) {
		ch = modeDef.channels[i];
		token = tokens.shift();
		if (ch === 'alpha') {
			if (token === Tokens.ParenClose) {
				continue;
			}
			if (token !== Tokens.Solidus) {
				return undefined;
			}
			token = tokens.shift();
		}
		if (typeof token === 'number') {
			res[ch] = token;
			continue;
		}
		if (token === 'none') {
			continue;
		}
		if (token[0] === Tokens.Percentage) {
			res[ch] = token[1] / 100;
			continue;
		}
		return undefined;
	}

	return res;
}

function consumeCoords(tokens, i, includeHue) {
	const coords = [];
	let token;
	while (i < tokens.length) {
		token = tokens[i++];
		if (token === 'none') {
			coords.push(undefined);
			continue;
		}
		if (
			token === Tokens.Solidus ||
			typeof token === 'number' ||
			token[0] === Tokens.Percentage ||
			token[0] === Tokens.Hue
		) {
			coords.push(token);
			continue;
		}
		if (token === Tokens.ParenClose) {
			if (i < tokens.length) {
				return undefined;
			}
			continue;
		}
		return undefined;
	}
	if (coords.length === 5) {
		if (coords[3] !== Tokens.Solidus) {
			return undefined;
		}
		coords.splice(3, 1);
	}
	if (
		coords.length < 3 ||
		coords.length > 4 ||
		coords.some(c => c === Tokens.Solidus)
	) {
		return undefined;
	}
	return coords;
}

export function parseModernSyntax(tokens, includeHue) {
	let i = 0;
	let token = tokens[i++];
	if (!token || token[0] !== Tokens.Function) {
		return undefined;
	}
	return consumeCoords(tokens, i, includeHue);
}

const parse = color => {
	if (typeof color !== 'string') {
		return undefined;
	}
	const tokens = tokenize(color);
	const parsed = parseModernSyntax(tokens, true);
	let result = undefined;
	let i = 0;
	let len = parsers.length;
	while (i < len) {
		if ((result = parsers[i++](color, parsed)) !== undefined) {
			return result;
		}
	}
	return parseColorSyntax(tokens);
};

export default parse;
