import type {
	Color,
	Find,
	Mode,
	OverridesFunction,
	OverridesObject
} from './common';

declare function averageAngle(val: number[]): number;

declare function averageNumber(val: Array<number>): number;

declare function average<M extends Mode>(
	colors: (Color | string)[],
	mode: M,
	overrides?: OverridesFunction | OverridesObject<M>
): Find<Color, M>;

export { average, averageAngle, averageNumber };
