import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';

const parsers = [
	parseNumber,
	parseNamed,
	parseHex,
	parseRgb
];

const parse = c => {
	let res;
	parsers.find(f => res = f(c));
	return res;
};

export default parse;