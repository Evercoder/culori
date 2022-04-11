import type { Rgb } from '../rgb/types';
import type { JabWithMode } from './types';

declare function convertRgbToJab(color: Rgb): JabWithMode;

export default convertRgbToJab;
