import parseNumber from './parseNumber';
import named from '../colors/named';

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
const parseNamed = color => {
	return (
		(typeof color === 'string' &&
			parseNumber(named[color.toLowerCase()], 6)) ||
		undefined
	);
};

export default parseNamed;
