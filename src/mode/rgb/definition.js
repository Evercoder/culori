import parseNamed from './parseNamed';
import parseHex from './parseHex';
import parseRgb from './parseRgb';
import parseTransparent from './parseTransparent';

export default {
	mode: 'rgb',
	keys: ['r', 'g', 'b', 'alpha'],
	parsers: [ parseHex, parseRgb, parseNamed, parseTransparent ]
};