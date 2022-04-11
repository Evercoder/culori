import type { Oklab } from '../oklab/types';
import type { OkhsvWithMode } from './types';

declare function convertOklabToOkhsv(color: Oklab): OkhsvWithMode;

export default convertOklabToOkhsv;
