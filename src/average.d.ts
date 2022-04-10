import type { Color, Find, Mode, TakeColorChannels } from './common';

declare function averageAngle(val: number[]): number;

declare function averageNumber(val: Array<number>): number;

type OverrideFn = (values: number[], channel: string) => number;

type Overrides<M extends Mode> =
	| OverrideFn
	| Partial<{
			[P in keyof TakeColorChannels<M>]: OverrideFn;
	  }>;

declare function average<M extends Mode>(
	colors: (Color | string)[],
	mode: M,
	overrides?: Overrides<M>
): Find<Color, M>;

export { average, averageAngle, averageNumber };
