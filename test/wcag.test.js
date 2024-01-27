import { wcagLuminance, wcagContrast } from '../src/index.js';
import test from 'node:test';
import assert from 'node:assert';

test('wcagLuminance', t => {
	assert.equal(wcagLuminance('white'), 1);
	assert.equal(wcagLuminance('black'), 0);
	assert.equal(wcagLuminance('#999'), 0.31854677812509186);
});

test('wcagContrast', t => {
	assert.equal(wcagContrast('black', 'white'), 21);
	assert.equal(wcagContrast('white', 'black'), 21);
	assert.equal(wcagContrast('red', 'red'), 1);
});
