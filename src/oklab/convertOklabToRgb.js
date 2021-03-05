import convertLrgbToRgb from '../lrgb/convertLrgbToRgb';
import convertOklabToLrgb from './convertOklabToLrgb';

const convertOklabToRgb = c => convertLrgbToRgb(convertOklabToLrgb(c));

export default convertOklabToRgb;
