import convertRgbToXyz from '../xyz/convertRgbToXyz';
import convertXyzToLuv from './convertXyzToLuv';

export default rgb => convertXyzToLuv(convertRgbToXyz(rgb));
