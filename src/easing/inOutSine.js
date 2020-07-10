/* 
	Sinusoidal (cosine) in-out easing
*/
export default t => (1 - Math.cos(t * Math.PI)) / 2;
