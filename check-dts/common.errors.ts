import type { TakeColorChannels } from '../src/common';

// THROWS Property 'l' is missing in type '{ h: number; s: number; }' but required in type 'TakeColorChannels<"hsl">'.
const hsl1: TakeColorChannels<'hsl'> = { h: 30, s: 0.5 };

// THROWS Property 'h' is missing in type '{ s: number; l: number; }' but required in type 'TakeColorChannels<"hsl">'.
const hsl2: TakeColorChannels<'hsl'> = { s: 0.5, l: 1 };
