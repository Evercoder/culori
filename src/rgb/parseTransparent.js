import parseNumber from './parseNumber.js';

const parseTransparent = c =>
	c === 'transparent' ? parseNumber(0x00000000, 8) : undefined;

export default parseTransparent;
