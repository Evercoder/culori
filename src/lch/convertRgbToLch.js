import convertRgbToLab from '../lab/convertRgbToLab';
import convertLabToLch from './convertLabToLch';

export default c => convertLabToLch(convertRgbToLab(c));