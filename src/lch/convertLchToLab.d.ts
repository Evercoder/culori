import type { Lch } from './types';
import type { LabWithMode } from '../lab/types';

declare function convertLchToLab(color: Lch): LabWithMode;

export default convertLchToLab;
