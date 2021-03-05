import convertRgbToLuv from '../luv/convertRgbToLuv';
import convertLuvToLchuv from './convertLuvToLchuv';

const convertRgbToLchuv = c => convertLuvToLchuv(convertRgbToLuv(c));

export default convertRgbToLchuv;
