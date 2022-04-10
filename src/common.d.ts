import { RgbWithMode } from './rgb/types';
import { HslWithMode } from './hsl/types';
import { LabWithMode } from './lab/types';
import type { LrgbWithMode } from './lrgb/types';
import type { Xyz50WithMode } from './xyz50/types';

export type Color =
	| RgbWithMode
	| HslWithMode
	| LabWithMode
	| LrgbWithMode
	| Xyz50WithMode;

export type Mode = Pick<Color, 'mode'>['mode'];

export type Find<C, M extends Mode> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<Find<Color, M>, 'mode'>;
