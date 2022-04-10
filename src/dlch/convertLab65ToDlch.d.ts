import type { Lab65 } from '../lab65/types';
import type { DlchWithMode } from './types';

declare function convertLab65ToDlch(color: Lab65): DlchWithMode;

export default convertLab65ToDlch;
