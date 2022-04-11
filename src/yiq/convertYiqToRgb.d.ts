import type { Yiq } from './types';
import type { RgbWithMode } from '../rgb/types';

declare function convertYiqToRgb(color: Yiq): RgbWithMode;

export default convertYiqToRgb;
