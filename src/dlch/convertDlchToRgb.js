import convertDlchToLab from './convertDlchToLab';
import convertLabToRgb from '../lab/convertLabToRgb';

export default c => convertLabToRgb(convertDlchToLab(c));