interface Xyz50Mode {
	mode: 'xyz50';
}

export interface Xyz50 {
	x: number;
	y: number;
	z: number;
	alpha?: number;
}

export interface Xyz50WithMode extends Xyz50, Xyz50Mode {}
