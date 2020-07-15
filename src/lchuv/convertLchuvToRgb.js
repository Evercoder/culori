import convertLuvToRgb from '../luv/convertLuvToRgb';
import convertLchuvToLuv from './convertLchuvToLuv';

export default c => convertLuvToRgb(convertLchuvToLuv(c));
