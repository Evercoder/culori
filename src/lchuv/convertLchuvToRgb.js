import convertLuvToRgb from '../luv/convertLuvToRgb.js';
import convertLchuvToLuv from './convertLchuvToLuv.js';

const convertLchuvToRgb = c => convertLuvToRgb(convertLchuvToLuv(c));

export default convertLchuvToRgb;
