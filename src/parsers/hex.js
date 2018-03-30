import parseNumber from './number';
import { hex } from '../util/regex';
import { FORMAT_HEX } from '../api/flags';

export default color => {
	var match;
	return (match = color.match(hex)) ? parseNumber(parseInt(match[1], 16), FORMAT_HEX) : undefined;
}