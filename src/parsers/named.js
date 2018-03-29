import parseNumber from './number';
import named_colors from '../colors/named';

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
export default color => {
	if (color === 'transparent') {
		return parseNumber(0x00000000)
	}
	let match = named_colors[color];
	return match ? parseNumber(match) : undefined;
}