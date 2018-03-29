import parseNumber from './number';

export default color => {
	if (typeof color !== 'string') {
		return;
	}
	let match = color.match(/^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i);
	return match ? parseNumber(parseInt(match[1], 16)) : undefined;
}