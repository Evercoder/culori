interface LchMode {
	mode: 'lch';
}

export interface Lch {
	l: number;
	c: number;
	h: number;
	alpha?: number;
}

export interface LchWithMode extends Lch, LchMode {}
