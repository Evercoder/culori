import type { Xyz50 } from '../xyz50/types';
import type { LabWithMode } from './types';

declare function convertXyz50ToLab(color: Xyz50): LabWithMode;

export default convertXyz50ToLab;
