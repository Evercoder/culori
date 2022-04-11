import type { Jab } from '../jab/types';
import type { JchWithMode } from './types';

declare function convertJabToJch(color: Jab): JchWithMode;

export default convertJabToJch;
