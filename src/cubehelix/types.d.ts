interface CubehelixMode {
	mode: 'cubehelix';
}

export interface Cubehelix {
	h: number;
	s: number;
	l: number;
	alpha?: number;
}

export interface CubehelixWithMode extends Cubehelix, CubehelixMode {}
