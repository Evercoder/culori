import parseNumber from './parseNumber';
import named from '../colors/named';

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
const parseNamed = color => {
	return parseNumber(named[color.toLowerCase()], 6);
};

export default parseNamed;
