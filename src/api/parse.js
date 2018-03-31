import parseNumber from '../parsers/number';
import parseNamed from '../parsers/named';
import parseHex from '../parsers/hex';
import parseRgb from '../parsers/rgb';
import parseHsl from '../parsers/hsl';
import parseHwb from '../parsers/hwb';
import parseLab from '../parsers/lab';
import parseLch from '../parsers/lch';

const parse = color => {
	return (
		parseHex(color) || 
		parseRgb(color) || 
		parseHsl(color) ||
		parseNamed(color) || 
		(color === 'transparent' ? parseNumber(0x00000000, 8) : undefined) ||
		parseHwb(color) ||
		parseLab(color) ||
		parseLch(color)
	);
};

export {
	parseNumber,
	parseNamed,
	parseHex,
	parseRgb,
	parseHsl,
	parseHwb,
	parseLab,
	parseLch
};

export default parse;