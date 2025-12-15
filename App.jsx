import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = <h1 id="heading">This is h1 tag inside jsx</h1>;
console.log(heading);
// root.render(heading);

// Creating title using functional Component
const TitleComponent = () => {
	return <h1>This is Title Component🔥</h1>;
};
root.render(<TitleComponent />);

// Creating nested component
const HeadingComponent = () => {
	return (
		<>
			<TitleComponent />
			{heading}
			<h1 className="heading">
				This is heading from functional component
			</h1>
		</>
	);
};
root.render(<HeadingComponent />);
