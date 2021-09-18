import tape from 'tape';
import {
	filterDeficiencyProt,
	filterDeficiencyDeuter,
	filterDeficiencyTrit,
	formatHex
} from '../src/index.js';

tape('0 severity', t => {
	t.equal(formatHex(filterDeficiencyProt(0)('red')), '#ff0000');
	t.equal(formatHex(filterDeficiencyDeuter(0)('red')), '#ff0000');
	t.equal(formatHex(filterDeficiencyTrit(0)('red')), '#ff0000');
	t.end();
});

tape('0.55 severity', t => {
	t.equal(formatHex(filterDeficiencyProt(0.55)('blue')), '#0012ff');
	t.equal(formatHex(filterDeficiencyDeuter(0.55)('blue')), '#000afa');
	t.equal(formatHex(filterDeficiencyTrit(0.55)('blue')), '#000fae');
	t.end();
});

tape('1 severity', t => {
	t.equal(formatHex(filterDeficiencyProt(1)('green')), '#876500');
	t.equal(formatHex(filterDeficiencyDeuter(1)('green')), '#6e5605');
	t.equal(formatHex(filterDeficiencyTrit(1)('green')), '#007758');
	t.end();
});
