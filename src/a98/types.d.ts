interface A98Mode {
	mode: 'a98';
}

export interface A98 {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface A98WithMode extends A98, A98Mode {}
