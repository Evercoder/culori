interface JchMode {
	mode: 'jch';
}

export interface Jch {
	j: number;
	c: number;
	h: number;
	alpha?: number;
}

export interface JchWithMode extends Jch, JchMode {}
