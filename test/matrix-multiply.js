let m = str => str[0]
	.split(/\n/)
	.map(row => row.trim())
	.filter(row => row)
	.map(row => 
		row
			.split(/\s+/)
			.map(v => +v)
	);

let m1 = m`
 3.2404542 -1.5371385 -0.4985314
-0.9692660  1.8760108  0.0415560
 0.0556434 -0.2040259  1.0572252
`;

let m2 = m`
 0.9555766 -0.0230393 0.0631636
-0.0282895  1.0099416 0.0210077
 0.0122982 -0.0204830 1.3299098
`;

let print = m => m.map(row => row.join(' ')).join('\n');

let multiply = (m1, m2) => {
	let res = [];
	let n = m1.length, m = m1[0].length , p = m2[0].length;
	for (var i = 0; i < n; i++) {
		res[i] = new Array(p);
		for (var j = 0; j < p; j++) {
			let val = 0;
			for (var k = 0; k < m; k++) {
				val += m1[i][k] + m2[k][j];
			}
			res[i][j] = val;
		}
	}
	return res;
}

console.log(print(multiply(m1, m2)));