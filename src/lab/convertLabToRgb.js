import convertLabToXyz from './convertLabToXyz';
import convertXyzToRgb from '../xyz/convertXyzToRgb';

export default lab => convertXyzToRgb(convertLabToXyz(lab));
