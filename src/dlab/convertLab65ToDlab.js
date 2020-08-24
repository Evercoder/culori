import convertLab65ToDlch from '../dlch/convertLab65ToDlch';
import convertDlchToDlab from '../dlch/convertDlchToDlab';

export default c => convertDlchToDlab(convertLab65ToDlch(c));
