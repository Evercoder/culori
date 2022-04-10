import type { HwbWithMode } from './types';

declare function parseHwb(color: string): HwbWithMode | undefined;

export default parseHwb;
