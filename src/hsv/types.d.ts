interface HsvMode {
	mode: 'hsv';
}

export interface Hsv {
	h: number;
	s: number;
	v: number;
	alpha?: number;
}

export interface HsvWithMode extends Hsv, HsvMode {}
