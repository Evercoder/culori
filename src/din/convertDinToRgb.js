import convertLabToRgb from '../lab/convertLabToRgb';
import convertDinToLab from './convertDinToLab';

export default c => convertLabToRgb(convertDinToLab(c));