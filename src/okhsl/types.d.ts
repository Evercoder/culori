interface OkhslMode {
	mode: 'okhsl';
}

export interface Okhsl {
	h: number;
	s: number;
	l: number;
	alpha?: number;
}

export interface OkhslWithMode extends Okhsl, OkhslMode {}
