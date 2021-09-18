import convertLabToXyz from './convertLabToXyz.js';
import convertXyzToRgb from '../xyz/convertXyzToRgb.js';

const convertLabToRgb = lab => convertXyzToRgb(convertLabToXyz(lab));

export default convertLabToRgb;
