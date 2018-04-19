import convertLabToDlch from '../dlch/convertLabToDlch';
import convertDlchToDlab from '../dlch/convertDlchToDlab';

export default c => convertDlchToDlab(convertLabToDlch(c));