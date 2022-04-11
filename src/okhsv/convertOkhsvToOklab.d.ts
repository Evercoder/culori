import type { Okhsv } from './types';
import type { OklabWithMode } from '../oklab/types';

declare function convertOkhsvToOklab(color: Okhsv): OklabWithMode;

export default convertOkhsvToOklab;
