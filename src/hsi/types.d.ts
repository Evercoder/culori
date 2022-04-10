interface HsiMode {
	mode: 'hsi';
}

export interface Hsi {
	h: number;
	s: number;
	i: number;
	alpha?: number;
}

export interface HsiWithMode extends Hsi, HsiMode {}
