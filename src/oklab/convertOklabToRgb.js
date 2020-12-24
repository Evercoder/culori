import convertLrgbToRgb from '../lrgb/convertLrgbToRgb';
import convertOklabToLrgb from './convertOklabToLrgb';

export default c => convertLrgbToRgb(convertOklabToLrgb(c));
