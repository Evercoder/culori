import type { A98WithMode } from './a98/types';
import type { CubehelixWithMode } from './cubehelix/types';
import type { DlabWithMode } from './dlab/types';
import type { DlchWithMode } from './dlch/types';
import type { HsiWithMode } from './hsi/types';
import type { HslWithMode } from './hsl/types';
import type { HsvWithMode } from './hsv/types';
import type { HwbWithMode } from './hwb/types';
import type { JabWithMode } from './jab/types';
import type { JchWithMode } from './jch/types';
import type { LabWithMode } from './lab/types';
import type { Lab65WithMode } from './lab65/types';
import type { LchWithMode } from './lch/types';
import type { Lch65WithMode } from './lch65/types';
import type { LchuvWithMode } from './lchuv/types';
import type { LrgbWithMode } from './lrgb/types';
import type { LuvWithMode } from './luv/types';
import type { OkhslWithMode } from './okhsl/types';
import type { OkhsvWithMode } from './okhsv/types';
import type { OklabWithMode } from './oklab/types';
import type { OklchWithMode } from './oklch/types';
import type { P3WithMode } from './p3/types';
import type { ProphotoWithMode } from './prophoto/types';
import type { Rec2020WithMode } from './rec2020/types';
import type { RgbWithMode } from './rgb/types';
import type { Xyz50WithMode } from './xyz50/types';
import type { Xyz65WithMode } from './xyz65/types';
import type { YiqWithMode } from './yiq/types';

export type Color =
	| A98WithMode
	| CubehelixWithMode
	| DlabWithMode
	| DlchWithMode
	| HsiWithMode
	| HslWithMode
	| HsvWithMode
	| HwbWithMode
	| JabWithMode
	| JchWithMode
	| LabWithMode
	| Lab65WithMode
	| LchWithMode
	| Lch65WithMode
	| LchuvWithMode
	| LrgbWithMode
	| LuvWithMode
	| OkhslWithMode
	| OkhsvWithMode
	| OklabWithMode
	| OklchWithMode
	| P3WithMode
	| ProphotoWithMode
	| Rec2020WithMode
	| RgbWithMode
	| Xyz50WithMode
	| Xyz65WithMode
	| YiqWithMode;

export type Mode = Pick<Color, 'mode'>['mode'];

export type Find<C, M extends Mode> = C extends { mode: M } ? C : never;

export type TakeColorChannels<M extends Mode> = Omit<Find<Color, M>, 'mode'>;

export type OverridesFunction = (values: number[], channel: string) => number;

export type OverridesObject<M extends Mode> = Partial<{
	[P in keyof TakeColorChannels<M>]: OverridesFunction;
}>;
