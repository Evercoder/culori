import convertLuvToXyz from './convertLuvToXyz';
import convertXyzToRgb from '../xyz/convertXyzToRgb';

const convertLuvToRgb = luv => convertXyzToRgb(convertLuvToXyz(luv));

export default convertLuvToRgb;
