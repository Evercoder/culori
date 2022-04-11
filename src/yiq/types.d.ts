interface YiqMode {
	mode: 'yiq';
}

export interface Yiq {
	y: number;
	i: number;
	q: number;
	alpha?: number;
}

export interface YiqWithMode extends Yiq, YiqMode {}
