interface LrgbMode {
	mode: 'lrgb';
}

export interface Lrgb {
	r: number;
	g: number;
	b: number;
	alpha?: number;
}

export interface LrgbWithMode extends Lrgb, LrgbMode {}
