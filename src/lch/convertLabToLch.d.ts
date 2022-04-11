import type { Lab } from '../lab/types';
import type { LchWithMode } from './types';

declare function convertLabToLch(color: Lab): LchWithMode;

export default convertLabToLch;
