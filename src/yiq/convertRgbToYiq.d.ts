import type { Rgb } from '../rgb/types';
import type { YiqWithMode } from './types';

declare function convertRgbToYiq(color: Rgb): YiqWithMode;

export default convertRgbToYiq;
