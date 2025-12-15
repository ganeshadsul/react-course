# React

## Episode 1

### 1. How do you use react?

One of the way to use react is using CDNs, which allows us to use React and ReactDOM

This CDN's are injected/imported usually towards the end but inside of the body tag.

eg.

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React</title>
	</head>
	<body>
		<!-- Your HTML Code -->
		<script
			crossorigin
			src="https://unpkg.com/react@18/umd/react.development.js"
		></script>
		<script
			crossorigin
			src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
		></script>
		<script src="./App.js"></script>
	</body>
</html>
```

### 2. How to use React

React can be used can either for a small part of the web page or the entier project.

It needs a container in which react can render/print the html.

> Creating a simple element

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>React</title>
	</head>
	<body>
		<div class="root"></div>
		<script
			crossorigin
			src="https://unpkg.com/react@18/umd/react.development.js"
		></script>
		<script
			crossorigin
			src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
		></script>
		<script src="./App.js"></script>
	</body>
</html>
```

Here we are going to use `<div class="root"></div>` for rendering our react into

**App.js**

Pointing react to the root div

```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
```

**Creating heading tag(H1) using react**

```javascript
const heading = React.createElement(
	'h1',
	{ id: 'heading', className: 'h1-tag' },
	'Hello World from React!'
);
root.render(heading);
```

`React.createElement` takes 3 parameters

1. Tag Name (e.g. h1, div, span, img,.....)
2. Tag parameters (e.g. id, className(class),.....) or you can call it as attributes of a tag
3. Content of which is put inside the tag (Content can be a normal text and it also can be another react element)

`root.render` converts the react element into html code.

> Creating nested elements

```javascript
const child = React.createElement(
	'div',
	{
		id: 'child1',
	},
	React.createElement('h1', {}, 'This is Child 1 H1 Tag')
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
	child
);
root.render(parent);
```

> Adding multple elements in a parent element

```javascript
const child1 = React.createElement(
	'div',
	{
		id: 'child1',
	},
	React.createElement('h1', {}, 'This is Child 1 H1 Tag')
);
const child2 = React.createElement(
	'div',
	{
		id: 'child1',
	},
	React.createElement('h1', {}, 'This is Child 1 H1 Tag')
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
	[child1, child2]
);
root.render(parent);
```

> `console.log(heading)`
>
> When you console the any element which we created it does shows us that it does not print html code of the element, but it actual it shows us that the element is object of `react.element`
