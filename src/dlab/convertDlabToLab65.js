import convertDlabToDlch from '../dlch/convertDlabToDlch';
import convertDlchToLab65 from '../dlch/convertDlchToLab65';

const convertDlabToLab65 = c => convertDlchToLab65(convertDlabToDlch(c));

export default convertDlabToLab65;
