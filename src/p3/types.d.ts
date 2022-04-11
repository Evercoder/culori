interface P3Mode {
	mode: 'p3';
}

export interface P3 {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface P3WithMode extends P3, P3Mode {}
