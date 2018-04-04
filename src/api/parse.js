import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';
import parseHsl from '../parsers/hsl';

const parsers = [
	parseHex,
	parseRgb,
	parseNamed,
	parseHsl,
	c => (c === 'transparent' ? parseNumber(0x00000000, 8) : undefined)
];


const parse = color => {
	let result, i = 0, len = parsers.length;
	while (i++ < len) {
		if ((result = parsers[i](color)) !== undefined) break;
	}
	return result;
};

const registerParser = parser => {
	parsers.push(parser);
}

export {
	registerParser,
	parseNumber,
	parseNamed,
	parseHex,
	parseRgb,
	parseHsl
};

export default parse;