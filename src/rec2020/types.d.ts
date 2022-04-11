interface Rec2020Mode {
	mode: 'rec2020';
}

export interface Rec2020 {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface Rec2020WithMode extends Rec2020, Rec2020Mode {}
