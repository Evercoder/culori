import mixin from '../util/mixin';

import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';
import parseHsl from '../parsers/hsl';

const parse = color => {
	return (
		parseNumber(color) ||
		parseHex(color) || 
		parseRgb(color) || 
		parseHsl(color) ||
		parseNamed(color) || 
		(color === 'transparent' ? parseHex('#00000000') : undefined)
	);
};

mixin(parse, {
	number: parseNumber,
	named: parseNamed,
	hex: parseHex,
	rgb: parseRgb,
	hsl: parseHsl
});

export default parse;