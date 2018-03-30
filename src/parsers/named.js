import parseNumber from './number';
import named_colors from '../colors/named';
import { IS_FORMAT_NAMED } from '../api/flags';

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
export default color => {
	return parseNumber(named_colors[color], IS_FORMAT_NAMED) || undefined;
}