import { Color, FindColorByMode, Mode } from './common';

export interface ConvertFn<M extends Mode = 'rgb'> {
	(color: Color, target_mode?: M): FindColorByMode<M>;
	(color: string, target_mode?: M): FindColorByMode<M> | undefined;
}

declare function converter(): ConvertFn;
declare function converter<M extends Mode>(target_mode: M): ConvertFn<M>;

export default converter;
