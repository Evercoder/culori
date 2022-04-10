import type { Dlch } from './types';
import type { Lab65WithMode } from '../lab65/types';

declare function convertDlchToLab65(color: Dlch): Lab65WithMode;

export default convertDlchToLab65;
