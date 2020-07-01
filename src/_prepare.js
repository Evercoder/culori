import parse from './parse';

export default (color, mode) =>
	color === undefined
		? undefined
		: typeof color !== 'object'
		? parse(color)
		: color.mode !== undefined
		? color
		: mode
		? { ...color, mode }
		: undefined;
