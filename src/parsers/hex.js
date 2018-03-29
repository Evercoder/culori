import parseNumber from './number';

export default color => {
	let match = typeof color === 'string' && color.match(/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{3})$/i);
	return match ? parseNumber(parseInt(match[1], 16)) : undefined;
}