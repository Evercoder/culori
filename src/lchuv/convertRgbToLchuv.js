import convertRgbToLuv from '../luv/convertRgbToLuv.js';
import convertLuvToLchuv from './convertLuvToLchuv.js';

const convertRgbToLchuv = c => convertLuvToLchuv(convertRgbToLuv(c));

export default convertRgbToLchuv;
