import convertLabToXyz from './convertLabToXyz';
import convertXyzToRgb from '../xyz/convertXyzToRgb';

const convertLabToRgb = lab => convertXyzToRgb(convertLabToXyz(lab));

export default convertLabToRgb;
