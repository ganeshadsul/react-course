import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
	return (
		<>
			<div className="app">
				<Header />
				<Outlet />
				{/* <Body /> */}
			</div>
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Body />,
			},
			{
				path: '/about-us',
				element: <About />,
			},
			{
				path: '/contact-us',
				element: <ContactUs />,
			},
		],
	},
]);

root.render(<RouterProvider router={appRouter} />);
