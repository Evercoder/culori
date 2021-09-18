import { luminance, contrast } from '../src/wcag.js';
import tape from 'tape';

tape('luminance', t => {
	t.equal(luminance('white'), 1);
	t.equal(luminance('black'), 0);
	t.equal(luminance('#999'), 0.31854677812509186);
	t.end();
});

tape('contrast', t => {
	t.equal(contrast('black', 'white'), 21);
	t.equal(contrast('white', 'black'), 21);
	t.equal(contrast('red', 'red'), 1);
	t.end();
});
