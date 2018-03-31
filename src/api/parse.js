import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';
import parseHsl from '../parsers/hsl';

const parse = color => {
	return (
		parseHex(color) || 
		parseRgb(color) || 
		parseHsl(color) ||
		parseNamed(color) || 
		(color === 'transparent' ? parseNumber(0, 8) : undefined)
	);
};

Object.assign(parse, {
	number: parseNumber,
	named: parseNamed,
	hex: parseHex,
	rgb: parseRgb,
	hsl: parseHsl
});

export default parse;