var start, end;
function startBench() {
	start = process.hrtime();
}

function endBench() {
	end = process.hrtime(start);
	return end[0] + 's ' + end[1] / 1000000 + 'ms';
}

export default function (name, fn) {
	startBench();
	fn();
	console.log(name, endBench());
}
