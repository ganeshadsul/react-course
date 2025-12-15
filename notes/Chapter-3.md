# What is jsx?

jsx allows us to write `html` like code inside `javascript` file.

jsx is not `html` inside javascript

jsx allows a **`html` like syntax** inside `javascript` file

# What is Component?

Component is a reusabe piece of code that can be used to build elements on page.

Component helps us break down complex structure into smaller parts resulting in easier to manage, read and scale

It's just a javscript is function

There are 2 types of components

1. Class based Component (OLD)
2. Function based Component (New) - basically a function which return jsx

> Exmaple of functional component

```javascript
const HeadingComponent = () => {
	return (
		<h1 className="heading">This is heading from functional component</h1>
	);
};
// Rendering React Component
root.render(<HeadingComponent />);
```

> Component Composition is nothing but a nested component

> Nested Components

```javascript
const TitleComponent = () => {
	return <h1>This is Title Component🔥</h1>;
};
const HeadingComponent = () => {
	return (
		<>
			<TitleComponent />
			<h1 className="heading">
				This is heading from functional component
			</h1>
		</>
	);
};
root.render(<HeadingComponent />);
```
