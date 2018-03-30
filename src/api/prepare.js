import parse from './parse';

export default (color, mode) =>
	typeof color !== 'object' ? parse(color) 
		: color.mode === undefined ? {...color, mode: mode } : color;