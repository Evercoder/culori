interface OklabMode {
	mode: 'oklab';
}

export interface Oklab {
	l: number;
	a: number;
	b: number;
	alpha?: number;
}

export interface OklabWithMode extends Oklab, OklabMode {}
