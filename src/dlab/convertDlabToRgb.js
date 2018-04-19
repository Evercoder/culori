import convertLabToRgb from '../lab/convertLabToRgb';
import convertDlabToLab from './convertDlabToLab';

export default c => convertLabToRgb(convertDlabToLab(c));