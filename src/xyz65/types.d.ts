interface Xyz65Mode {
	mode: 'xyz65';
}

export interface Xyz65 {
	x: number;
	y: number;
	z: number;
	alpha?: number;
}

export interface Xyz65WithMode extends Xyz65, Xyz65Mode {}
