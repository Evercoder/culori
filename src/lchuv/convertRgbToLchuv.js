import convertRgbToLuv from '../luv/convertRgbToLuv';
import convertLuvToLchuv from './convertLuvToLchuv';

export default c => convertLuvToLchuv(convertRgbToLuv(c));
