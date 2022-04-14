import type { TakeColorChannels } from '../src/common';

const okhsl1: TakeColorChannels<'okhsl'> = { h: 30, s: 0.5, l: 1, alpha: 0.25 };
const okhsl2: TakeColorChannels<'okhsl'> = { h: 30, s: 0.5, l: 1 };
const hsl1: TakeColorChannels<'hsl'> = { h: 30, s: 0.5 };
const hsl2: TakeColorChannels<'hsl'> = { s: 0.5, l: 1 };
