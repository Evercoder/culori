import { RgbWithMode } from './rgb/types';
import { HslWithMode } from './hsl/types';
import { LabWithMode } from './lab/types';
import type { LrgbWithMode } from './lrgb/types';
import type { Xyz50WithMode } from './xyz50/types';
import type { A98WithMode } from './a98/types';
import type { CubehelixWithMode } from './cubehelix/types';
import type { DlabWithMode } from './dlab/types';
import type { DlchWithMode } from './dlch/types';
import type { HsiWithMode } from './hsi/types';
import type { HsvWithMode } from './hsv/types';
import type { HwbWithMode } from './hwb/types';

export type Color =
	| A98WithMode
	| CubehelixWithMode
	| DlabWithMode
	| DlchWithMode
	| HsiWithMode
	| HslWithMode
	| HsvWithMode
	| HwbWithMode
	| RgbWithMode
	| LabWithMode
	| LrgbWithMode
	| Xyz50WithMode;

export type Mode = Pick<Color, 'mode'>['mode'];

export type Find<C, M extends Mode> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<Find<Color, M>, 'mode'>;

export type OverridesFunction = (values: number[], channel: string) => number;

export type OverridesObject<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: OverridesFunction;
}>;
