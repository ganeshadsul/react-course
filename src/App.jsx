import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/contexts/UserContext';
import './styles/index.css';

const Grocery = lazy(() => import('./components/Grocery'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => {
	// dummy login
	const defaultUserContext = useContext(UserContext);
	const [userInfo, setUserInfo] = useState(defaultUserContext);
	useEffect(() => {
		const data = {
			fName: 'Ganesh',
			lName: 'Adsul',
			email: 'ganeshadsul@gmail.com',
			role: {
				name: 'Admin',
				value: 'admin',
			},
		};

		setUserInfo(data);
	}, []);

	return (
		<>
			<UserContext.Provider
				value={{ loggedInUser: userInfo, setUserInfo }}
			>
				<div className="app">
					<Header />
					<Outlet />
					{/* <Body /> */}
				</div>
			</UserContext.Provider>
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
			{
				path: '/restaurants/:id',
				element: <RestaurantMenu />,
			},
			{
				path: '/grocery',
				element: (
					<Suspense fallback="<h1>Loading Groceries!!!</h1>">
						<Grocery />
					</Suspense>
				),
			},
		],
	},
]);

root.render(<RouterProvider router={appRouter} />);
