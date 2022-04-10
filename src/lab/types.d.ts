interface LabMode {
	mode: 'lab';
}

export interface Lab {
	l: number;
	a: number;
	b: number;
	alpha?: number;
}

export interface LabWithMode extends Lab, LabMode {}
