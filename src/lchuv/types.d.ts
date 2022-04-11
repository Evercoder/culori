interface LchuvMode {
	mode: 'lchuv';
}

export interface Lchuv {
	l: number;
	c: number;
	h: number;
	alpha?: number;
}

export interface LchuvWithMode extends Lchuv, LchuvMode {}
