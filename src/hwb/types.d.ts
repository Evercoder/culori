interface HwbMode {
	mode: 'hwb';
}

export interface Hwb {
	h: number;
	s: number;
	v: number;
	alpha?: number;
}

export interface HwbWithMode extends Hwb, HwbMode {}
