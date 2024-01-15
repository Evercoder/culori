import tape from 'tape';
import {
	differenceEuclidean,
	differenceCie76,
	differenceCie94,
	differenceCiede2000,
	differenceCmc,
	differenceHyab,
	differenceKotsarenkoRamos,
	differenceItp,
	rgb,
	lab65,
	round,
	hsl
} from '../src/index.js';

tape('euclidean distance in RGB', function (test) {
	let delta = differenceEuclidean();

	test.equal(
		delta(
			rgb({ r: 1, g: 0, b: 0, alpha: 0.5 }),
			rgb({ r: 0, g: 1, b: 0, alpha: 0.75 })
		),
		1.4142135623730951
	);

	test.equal(delta('red', 'red'), 0);

	test.end();
});

tape('euclidean distance in HSL', function (test) {
	let delta = differenceEuclidean('hsl');

	test.equal(
		delta(hsl({ h: 0, s: 1, l: 1 }), hsl({ h: 180, s: 1, l: 1 })),
		2
	);

	test.equal(
		delta(hsl({ h: 0, s: 1, l: 1 }), hsl({ h: 360, s: 1, l: 1 })),
		2.4492935982947064e-16
	);

	test.equal(
		delta(hsl({ h: 60, s: 1, l: 1 }), hsl({ h: -540, s: 1, l: 1 })),
		1.732050807568877
	);

	test.end();
});

tape('cie76 difference', function (test) {
	test.equal(
		differenceCie76()(
			lab65({ l: 1, a: 0, b: 0, alpha: 0.5 }),
			lab65({ l: 0, a: 1, b: 0, alpha: 0.75 })
		),
		1.4142135623730951
	);

	test.end();
});

tape('cie94 difference', function (test) {
	test.equal(
		differenceCie94()(
			lab65({ l: 1, a: 0, b: 0, alpha: 0.5 }),
			lab65({ l: 0, a: 1, b: 0, alpha: 0.75 })
		),
		1.4142135623730951
	);

	test.end();
});

tape('ciede2000 difference', function (test) {
	let approx = round(4);

	// Test data from: http://www2.ece.rochester.edu/~gsharma/ciede2000/
	let testdata = `50.0000	2.6772	-79.7751	50.0000	0.0000	-82.7485	2.0425
		50.0000	3.1571	-77.2803	50.0000	0.0000	-82.7485	2.8615
		50.0000	2.8361	-74.0200	50.0000	0.0000	-82.7485	3.4412
		50.0000	-1.3802	-84.2814	50.0000	0.0000	-82.7485	1.0000
		50.0000	-1.1848	-84.8006	50.0000	0.0000	-82.7485	1.0000
		50.0000	-0.9009	-85.5211	50.0000	0.0000	-82.7485	1.0000
		50.0000	0.0000	0.0000	50.0000	-1.0000	2.0000	2.3669
		50.0000	-1.0000	2.0000	50.0000	0.0000	0.0000	2.3669
		50.0000	2.4900	-0.0010	50.0000	-2.4900	0.0009	7.1792
		50.0000	2.4900	-0.0010	50.0000	-2.4900	0.0010	7.1792
		50.0000	2.4900	-0.0010	50.0000	-2.4900	0.0011	7.2195
		50.0000	2.4900	-0.0010	50.0000	-2.4900	0.0012	7.2195
		50.0000	-0.0010	2.4900	50.0000	0.0009	-2.4900	4.8045
		50.0000	-0.0010	2.4900	50.0000	0.0010	-2.4900	4.8045
		50.0000	-0.0010	2.4900	50.0000	0.0011	-2.4900	4.7461
		50.0000	2.5000	0.0000	50.0000	0.0000	-2.5000	4.3065
		50.0000	2.5000	0.0000	73.0000	25.0000	-18.0000	27.1492
		50.0000	2.5000	0.0000	61.0000	-5.0000	29.0000	22.8977
		50.0000	2.5000	0.0000	56.0000	-27.0000	-3.0000	31.9030
		50.0000	2.5000	0.0000	58.0000	24.0000	15.0000	19.4535
		50.0000	2.5000	0.0000	50.0000	3.1736	0.5854	1.0000
		50.0000	2.5000	0.0000	50.0000	3.2972	0.0000	1.0000
		50.0000	2.5000	0.0000	50.0000	1.8634	0.5757	1.0000
		50.0000	2.5000	0.0000	50.0000	3.2592	0.3350	1.0000
		60.2574	-34.0099	36.2677	60.4626	-34.1751	39.4387	1.2644
		63.0109	-31.0961	-5.8663	62.8187	-29.7946	-4.0864	1.2630
		61.2901	3.7196	-5.3901	61.4292	2.2480	-4.9620	1.8731
		35.0831	-44.1164	3.7933	35.0232	-40.0716	1.5901	1.8645
		22.7233	20.0904	-46.6940	23.0331	14.9730	-42.5619	2.0373
		36.4612	47.8580	18.3852	36.2715	50.5065	21.2231	1.4146
		90.8027	-2.0831	1.4410	91.1528	-1.6435	0.0447	1.4441
		90.9257	-0.5406	-0.9208	88.6381	-0.8985	-0.7239	1.5381
		6.7747	-0.2908	-2.4247	5.8714	-0.0985	-2.2286	0.6377
		2.0776	0.0795	-1.1350	0.9033	-0.0636	-0.5514	0.9082`
		.split('\n')
		.map(line => line.trim().split(/\s+/));

	for (var i = 0; i < testdata.length; i++) {
		let line = testdata[i];
		test.equal(
			approx(
				differenceCiede2000()(
					lab65({ l: +line[0], a: +line[1], b: +line[2] }),
					lab65({ l: +line[3], a: +line[4], b: +line[5] })
				)
			),
			+line[6]
		);

		// also test for symmetry
		test.equal(
			approx(
				differenceCiede2000()(
					lab65({ l: +line[3], a: +line[4], b: +line[5] }),
					lab65({ l: +line[0], a: +line[1], b: +line[2] })
				)
			),
			+line[6]
		);
	}

	test.end();
});

tape('differenceCmc', function (test) {
	test.equal(
		differenceCmc()(
			lab65({ l: 1, a: 0, b: 0, alpha: 0.5 }),
			lab65({ l: 0, a: 1, b: 0, alpha: 0.75 })
		),
		2.507265255284643
	);

	test.equal(
		differenceCmc()('rgb(55, 60, 48)', 'rgb(55, 65, 53)'),
		3.590406912120119
	);

	test.equal(
		differenceCmc(2, 1)('rgb(55, 60, 48)', 'rgb(55, 65, 53)'),
		2.82061249589761
	);

	test.equal(
		differenceCmc()('lab(50% 40 20)', 'lab(60% 20 100)'),
		53.10947821085943
	);

	test.end();
});

tape('differenceKotsarenkoRamos', function (test) {
	test.equal(
		differenceKotsarenkoRamos()('white', 'black'),
		0.7108445752103619
	);

	test.end();
});

tape('difference in LCh space', t => {
	t.equal(differenceEuclidean('lch')('red', 'green'), 130.3598834181675);
	t.end();
});

tape('differenceHyab', t => {
	t.equal(differenceHyab()('red', 'green'), 139.92805737622862);
	t.end();
});

tape('differenceItp', t => {
	t.equal(differenceItp()('red', 'green'), 238.28868759957626);
	t.end();
});
