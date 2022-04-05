interface HslMode {
	mode: 'hsl';
}

export interface Hsl {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface HslWithMode extends Hsl, HslMode {}
