interface LuvMode {
	mode: 'luv';
}

export interface Luv {
	l: number;
	u: number;
	v: number;
	alpha?: number;
}

export interface LuvWithMode extends Luv, LuvMode {}
