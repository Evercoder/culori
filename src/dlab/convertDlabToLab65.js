import convertDlabToDlch from '../dlch/convertDlabToDlch';
import convertDlchToLab65 from '../dlch/convertDlchToLab65';

export default c => convertDlchToLab65(convertDlabToDlch(c));
