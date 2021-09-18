import convertLuvToXyz from './convertLuvToXyz.js';
import convertXyzToRgb from '../xyz/convertXyzToRgb.js';

const convertLuvToRgb = luv => convertXyzToRgb(convertLuvToXyz(luv));

export default convertLuvToRgb;
