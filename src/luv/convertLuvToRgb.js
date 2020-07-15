import convertLuvToXyz from './convertLuvToXyz';
import convertXyzToRgb from '../xyz/convertXyzToRgb';

export default luv => convertXyzToRgb(convertLuvToXyz(luv));
