import parseNumber from './number';
import named_colors from '../colors/named';

// Also supports the `transparent` color as defined in:
// https://drafts.csswg.org/css-color/#transparent-black
export default color => color === 'transparent' ? 
	parseNumber(0x00000000) : 
	named_colors[color] ? parseNumber(named_colors[color]) : undefined;