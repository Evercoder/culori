import test from 'node:test';
import assert from 'node:assert';
import { average, averageAngle, formatHex } from '../src/index.js';

test('average', t => {
	assert.equal(formatHex(average(['#ff0000', '#0000ff'])), '#800080');
	assert.equal(formatHex(average(['#ff0000', '#0000ff'], 'lch')), '#f50086');
});

test('averageAngle', t => {
	assert.equal(averageAngle([270, 0]), 315);
});
