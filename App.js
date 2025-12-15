const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement(
	'h1',
	{ id: 'heading', className: 'h1-tag' },
	'Hello World from React!'
);

const parent = React.createElement(
	'div',
	{
		id: 'parent',
		style: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
	},
	[
		React.createElement(
			'div',
			{
				id: 'child1',
				style: {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'end',
				},
			},
			[
				React.createElement('h1', {}, 'This is Child 1 H1 Tag'),
				React.createElement('h2', {}, 'This is Child 1 H2 Tag'),
			]
		),
		React.createElement(
			'div',
			{
				id: 'child2',
				style: {
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					alignItems: 'start',
				},
			},
			[
				React.createElement('h1', {}, 'This is Child 2 H1 Tag'),
				React.createElement('h2', {}, 'This is Child 2 H2 Tag'),
			]
		),
		React.createElement(
			'img',
			{
				src: 'https://picsum.photos/seed/picsum/200/300',
				alt: 'random-image',
				loading: 'lazy',
				height: '200px',
				width: '300px',
				style: {
					margin: '10px 25px',
				},
			},
			null
		),
	]
);
console.table(parent);
// root.render(heading);
root.render(parent);
