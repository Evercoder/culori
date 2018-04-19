import convertDlabToDlch from '../dlch/convertDlabToDlch';
import convertDlchToLab from '../dlch/convertDlchToLab';

export default c => convertDlchToLab(convertDlabToDlch(c));