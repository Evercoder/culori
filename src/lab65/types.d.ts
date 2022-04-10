interface Lab65Mode {
	mode: 'lab65';
}

export interface Lab65 {
	l: number;
	a: number;
	b: number;
	alpha?: number;
}

export interface Lab65WithMode extends Lab65, Lab65Mode {}
