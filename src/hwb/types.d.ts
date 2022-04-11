interface HwbMode {
	mode: 'hwb';
}

export interface Hwb {
	h: number;
	w: number;
	b: number;
	alpha?: number;
}

export interface HwbWithMode extends Hwb, HwbMode {}
