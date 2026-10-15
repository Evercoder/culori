import test from 'node:test';
import assert from 'node:assert';
import {
	filterDeficiencyProt,
	filterDeficiencyDeuter,
	filterDeficiencyTrit,
	formatHex
} from '../src/index.js';

test('0 severity', t => {
	assert.equal(formatHex(filterDeficiencyProt(0)('red')), '#ff0000');
	assert.equal(formatHex(filterDeficiencyDeuter(0)('red')), '#ff0000');
	assert.equal(formatHex(filterDeficiencyTrit(0)('red')), '#ff0000');
});

test('0.55 severity', t => {
	assert.equal(formatHex(filterDeficiencyProt(0.55)('blue')), '#0011ff');
	assert.equal(formatHex(filterDeficiencyDeuter(0.55)('blue')), '#000afa');
	assert.equal(formatHex(filterDeficiencyTrit(0.55)('blue')), '#000eb6');
});

test('severity interpolates between matrices', t => {
	assert.equal(formatHex(filterDeficiencyProt(0.05)('#ff8800')), '#f98900');
});

test('1 severity', t => {
	assert.equal(formatHex(filterDeficiencyProt(1)('green')), '#876500');
	assert.equal(formatHex(filterDeficiencyDeuter(1)('green')), '#6e5605');
	assert.equal(formatHex(filterDeficiencyTrit(1)('green')), '#007758');
});
