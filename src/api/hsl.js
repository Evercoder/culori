import convert from './convert';
import parse from './parse';

export default color => convert(
	typeof color !== 'object' ? parse(color) 
		: color.mode === undefined ? {...color, mode: 'hsl' } : color
	, 'hsl');