import convertRgbToXyz from '../xyz/convertRgbToXyz';
import convertXyzToLuv from './convertXyzToLuv';

const convertRgbToLuv = rgb => convertXyzToLuv(convertRgbToXyz(rgb));

export default convertRgbToLuv;
