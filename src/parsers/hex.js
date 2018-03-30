import parseNumber from './number';
import { hex } from '../util/regex';
import { IS_FORMAT_HEX } from '../api/flags';

export default color => {
	var match;
	return (match = color.match(hex)) ? parseNumber(parseInt(match[1], 16), IS_FORMAT_HEX) : undefined;
}