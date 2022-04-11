interface ProphotoMode {
	mode: 'prophoto';
}

export interface Prophoto {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface ProphotoWithMode extends Prophoto, ProphotoMode {}
