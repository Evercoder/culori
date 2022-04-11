import type { Okhsl } from './types';
import type { OklabWithMode } from '../oklab/types';

declare function convertOkhslToOklab(hsl: Okhsl): OklabWithMode;

export default convertOkhslToOklab;
