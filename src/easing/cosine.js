/* 
	Cosine easing, used for cosine interpolation
	
	Reference:

		http://paulbourke.net/miscellaneous/interpolation/
*/
export default t => (1 - Math.cos(t * Math.PI)) / 2;
