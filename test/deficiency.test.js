import tape from 'tape';
import {
	deficiencyProt,
	deficiencyDeuter,
	deficiencyTrit,
	formatHex
} from '../src/index';

tape('0 severity', t => {
	t.equal(formatHex(deficiencyProt(0)('red')), '#ff0000');
	t.equal(formatHex(deficiencyDeuter(0)('red')), '#ff0000');
	t.equal(formatHex(deficiencyTrit(0)('red')), '#ff0000');
	t.end();
});

tape('0.55 severity', t => {
	t.equal(formatHex(deficiencyProt(0.55)('blue')), '#0012ff');
	t.equal(formatHex(deficiencyDeuter(0.55)('blue')), '#000afa');
	t.equal(formatHex(deficiencyTrit(0.55)('blue')), '#000fae');
	t.end();
});

tape('1 severity', t => {
	t.equal(formatHex(deficiencyProt(1)('green')), '#876500');
	t.equal(formatHex(deficiencyDeuter(1)('green')), '#6e5605');
	t.equal(formatHex(deficiencyTrit(1)('green')), '#007758');
	t.end();
});
