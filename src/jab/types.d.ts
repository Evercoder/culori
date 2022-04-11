interface JabMode {
	mode: 'jab';
}

export interface Jab {
	j: number;
	a: number;
	b: number;
	alpha?: number;
}

export interface JabWithMode extends Jab, JabMode {}
