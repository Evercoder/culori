import convertRgbToLab from '../lab/convertRgbToLab';
import convertLabToDlab from './convertLabToDlab';

export default c => convertLabToDlab(convertRgbToLab(c));