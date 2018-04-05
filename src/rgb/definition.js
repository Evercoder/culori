import parseNamed from './parseNamed';
import parseHex from './parseHex';
import parseRgb from './parseRgb';
import parseTransparent from './parseTransparent';

export default {
	mode: 'rgb',
	channels: ['r', 'g', 'b'],
	parsers: [ parseHex, parseRgb, parseNamed, parseTransparent ]
};