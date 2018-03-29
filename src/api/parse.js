import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';
import parseHsl from '../parsers/hsl';

const parsers = [
	parseNumber,
	parseNamed,
	parseHex,
	parseRgb,
	parseHsl
];

const parse = c => {
	let res;
	parsers.find(f => res = f(c));
	return res;
};

export default parse;