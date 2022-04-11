interface OklchMode {
	mode: 'oklch';
}

export interface Oklch {
	l: number;
	c: number;
	h: number;
	alpha?: number;
}

export interface OklchWithMode extends Oklch, OklchMode {}
