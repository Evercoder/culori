import tape from 'tape';
import { average, averageAngle, formatHex } from '../src/index.js';

tape('average', t => {
	t.equal(formatHex(average(['#ff0000', '#0000ff'])), '#800080');
	t.equal(formatHex(average(['#ff0000', '#0000ff'], 'lch')), '#f50086');
	t.end();
});

tape('averageAngle', t => {
	t.equal(averageAngle([270, 0]), 315);
	t.end();
});
