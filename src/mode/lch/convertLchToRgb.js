import convertLabToRgb from '../lab/convertLabToRgb';
import convertLchToLab from './convertLchToLab';

export default c => convertLabToRgb(convertLchToLab(c));