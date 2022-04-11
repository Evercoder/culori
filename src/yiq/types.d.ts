interface YiqMode {
	mode: 'yiq';
}

export interface Yiq {
	x: number;
	y: number;
	z: number;
	alpha?: number;
}

export interface YiqWithMode extends Yiq, YiqMode {}
