interface RgbMode {
	mode: 'rgb';
}

export interface Rgb {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface RgbWithMode extends Rgb, RgbMode {}
