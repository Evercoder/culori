import convertLab65ToDlch from '../dlch/convertLab65ToDlch';
import convertDlchToDlab from '../dlch/convertDlchToDlab';

const convertLab65ToDlab = c => convertDlchToDlab(convertLab65ToDlch(c));

export default convertLab65ToDlab;
