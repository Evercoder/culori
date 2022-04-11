interface Lch65Mode {
	mode: 'lch65';
}

export interface Lch65 {
	l: number;
	c: number;
	h: number;
	alpha?: number;
}

export interface Lch65WithMode extends Lch65, Lch65Mode {}
