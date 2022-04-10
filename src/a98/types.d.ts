interface A98Mode {
	mode: 'a98';
}

export interface A98 {
	x: number;
	y: number;
	z: number;
	alpha?: number;
}

export interface A98WithMode extends A98, A98Mode {}
