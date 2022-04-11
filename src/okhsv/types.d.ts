interface OkhsvMode {
	mode: 'okhsv';
}

export interface Okhsv {
	h: number;
	s: number;
	v: number;
	alpha?: number;
}

export interface OkhsvWithMode extends Okhsv, OkhsvMode {}
