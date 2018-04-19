import convertRgbToLab from '../lab/convertRgbToLab';
import convertLabToDin from './convertLabToDin';

export default c => convertLabToDin(convertRgbToLab(c));