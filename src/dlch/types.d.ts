interface DlchMode {
	mode: 'dlch';
}

export interface Dlch {
	l: number;
	c: number;
	h: number;
	alpha?: number;
}

export interface DlchWithMode extends Dlch, DlchMode {}
