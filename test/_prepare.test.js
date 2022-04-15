import tape from 'tape';
import prepare from '../src/_prepare.js';

tape('prepare', t => {
	t.equal(prepare(undefined), undefined);

	t.equal(
		prepare({
			r: 0.2549019607843137,
			g: 0.4117647058823529,
			b: 0.8823529411764706
		}),
		undefined
	);

	t.deepEqual(
		prepare(
			{
				r: 0.2549019607843137,
				g: 0.4117647058823529,
				b: 0.8823529411764706
			},
			'rgb'
		),
		{
			mode: 'rgb',
			r: 0.2549019607843137,
			g: 0.4117647058823529,
			b: 0.8823529411764706
		}
	);

	t.end();
});
