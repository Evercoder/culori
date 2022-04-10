interface DlabMode {
	mode: 'dlab';
}

export interface Dlab {
	l: number;
	a: number;
	b: number;
	alpha?: number;
}

export interface DlabWithMode extends Dlab, DlabMode {}
