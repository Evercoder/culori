import parseNumber from './number';
import named_colors from '../colors/named';

export default color => named_colors[color] ? parseNumber(named_colors[color]) : undefined;