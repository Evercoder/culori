import convertDlabToDlch from '../dlch/convertDlabToDlch.js';
import convertDlchToLab65 from '../dlch/convertDlchToLab65.js';

const convertDlabToLab65 = c => convertDlchToLab65(convertDlabToDlch(c));

export default convertDlabToLab65;
