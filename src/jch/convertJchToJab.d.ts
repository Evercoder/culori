import type { Jch } from './types';
import type { JabWithMode } from '../jab/types';

declare function convertJchToJab(color: Jch): JabWithMode;

export default convertJchToJab;
