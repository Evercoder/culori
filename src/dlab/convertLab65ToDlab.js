import convertLab65ToDlch from '../dlch/convertLab65ToDlch.js';
import convertDlchToDlab from '../dlch/convertDlchToDlab.js';

const convertLab65ToDlab = c => convertDlchToDlab(convertLab65ToDlch(c));

export default convertLab65ToDlab;
