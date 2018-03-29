import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';
import parseHsl from '../parsers/hsl';

const parse = color => {
	return (
		parseNumber(color) || 
		parseNamed(color) || 
		parseHex(color) || 
		parseRgb(color) || 
		parseHsl(color)
	);
};

export default parse;