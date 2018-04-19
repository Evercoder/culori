import convertRgbToLab from '../lab/convertRgbToLab';
import convertLabToDlch from './convertLabToDlch';

export default c => convertLabToDlch(convertRgbToLab(c));