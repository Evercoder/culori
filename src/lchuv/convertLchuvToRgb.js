import convertLuvToRgb from '../luv/convertLuvToRgb';
import convertLchuvToLuv from './convertLchuvToLuv';

const convertLchuvToRgb = c => convertLuvToRgb(convertLchuvToLuv(c));

export default convertLchuvToRgb;
