interface HslMode {
	mode: 'hsl';
}

export interface Hsl {
	h: number;
	s: number;
	l: number;
	alpha?: number;
}

export interface HslWithMode extends Hsl, HslMode {}
