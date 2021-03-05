import parse from './parse';

const prepare = (color, mode) =>
	color === undefined
		? undefined
		: typeof color !== 'object'
		? parse(color)
		: color.mode !== undefined
		? color
		: mode
		? { ...color, mode }
		: undefined;

export default prepare;
