import type { Rgb } from '../rgb/types';
import type { LabWithMode } from './types';

declare function convertRgbToLab(color: Rgb): LabWithMode;

export default convertRgbToLab;
