import convertRgbToXyz from '../xyz/convertRgbToXyz.js';
import convertXyzToLuv from './convertXyzToLuv.js';

const convertRgbToLuv = rgb => convertXyzToLuv(convertRgbToXyz(rgb));

export default convertRgbToLuv;
