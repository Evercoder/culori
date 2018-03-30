import parse from './parse';
import chew from './chew';

export default color => chew(typeof color === 'object' ? color : parse(color), 'hsv');