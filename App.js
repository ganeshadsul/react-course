import React from 'react';
import ReactDOM from 'react-dom/client';
// creating root node for react to inject
const root = ReactDOM.createRoot(document.getElementById('root'));

// creating heading tag to show
const heading = React.createElement(
	'h1',
	{ id: 'heading', className: 'h1-tag' },
	'Hello World from React!'
);
// Rendering (showing) heading inside the root
// root.render(heading);

// creating nested tags inside one parent div
const parent = React.createElement(
	'div',
	{
		id: 'parent',
		style: {
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
		},
		key: 'p1',
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
				key: 'c1',
			},
			React.createElement('h1', { key: 'c1h1' }, 'This is Child 1 H1 Tag')
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
				key: 'c2',
			},
			[
				React.createElement(
					'h1',
					{ key: 'c2h1' },
					'This is Child 2 H1 Tag'
				),
				React.createElement(
					'h2',
					{ key: 'c2h2' },
					'This is Child 2 H2 Tag'
				),
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
				key: 'c3',
			},
			null
		),
	]
);
console.log(parent);
//consoling a parent element show us that it is not a html code, but a react element which is in the form of object
root.render(parent);
