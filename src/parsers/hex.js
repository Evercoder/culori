import parseNumber from './number';
import { hex } from '../util/regex';

export default color => {
	var match;
	return (match = color.match(hex)) ? parseNumber(parseInt(match[1], 16)) : undefined;
}