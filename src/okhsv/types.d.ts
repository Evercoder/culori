interface OkhsvMode {
	mode: 'okhsv';
}

export interface Okhsv {
	h: number;
	s: number;
	l: number;
	alpha?: number;
}

export interface OkhsvWithMode extends Okhsv, OkhsvMode {}
