import React from 'react';
import ReactDOM from 'react-dom/client';
import { FaStar } from 'react-icons/fa';

const root = ReactDOM.createRoot(document.getElementById('root'));
const RestuarantCardComponent = ({
	restuarantName = 'Lorem, ipsum.',
	restuarantCuisine = ['tasty'],
	restuarantAverageCost = '',
	restuarantDiscount = '',
	restuarantImageLink = 'https://picsum.photos/200/300',
}) => {
	return (
		<div className="restaurant-card">
			<div className="restaurant-logo-container">
				<img
					src={restuarantImageLink}
					alt={`${restuarantName}-logo`}
					className="restaurant-image"
					loading="lazy"
				/>
				<div className="restaurant-discount-info">
					{restuarantDiscount ? `₹${restuarantDiscount} OFF` : ''}
				</div>
			</div>
			<div className="restaurant-info-container">
				<div className="restaurant-info">
					<div className="restaurant-name">{restuarantName}</div>
					<div className="restaurant-rating-container">
						<div className="restuarant-rating">4</div> <FaStar />
					</div>
				</div>
				<div className="restaurant-meta">
					<div className="restaurant-cuisine">
						{restuarantCuisine.join(', ')}
					</div>
					<div className="restaurant-average-cost">
						{restuarantAverageCost}
					</div>
				</div>
			</div>
		</div>
	);
};
const HeaderComponent = () => {
	return (
		<>
			<nav className="header">
				<div className="logo-continer">
					<img
						className="logo"
						src="https://static.vecteezy.com/system/resources/previews/021/953/308/large_2x/food-ordering-app-logo-with-points-and-fork-shapes-in-the-center-free-vector.jpg"
						alt="logo"
					/>
				</div>
				<div className="nav-items">
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Contact us</li>
						<li>Cart</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

const BodyComponent = () => {
	return (
		<>
			<div className="search">Search bar</div>
			<div className="restuarant-container">
				<RestuarantCardComponent restuarantName="Mumbai Darbar" />
				<RestuarantCardComponent
					restuarantName="Parsian Darbar"
					restuarantCuisine={['Chinese', 'Momos']}
					restuarantAverageCost="₹400 for one"
					restuarantDiscount={500}
					restuarantImageLink="https://picsum.photos/200/300"
				/>
				<RestuarantCardComponent
					restuarantName="Parsian Darbar"
					restuarantCuisine={['Chinese', 'Momos']}
					restuarantAverageCost="₹400 for one"
					restuarantDiscount={500}
					restuarantImageLink="https://picsum.photos/200/300"
				/>
				<RestuarantCardComponent
					restuarantName="Parsian Darbar"
					restuarantCuisine={['Chinese', 'Momos']}
					restuarantAverageCost="₹400 for one"
					restuarantDiscount={500}
					restuarantImageLink="https://picsum.photos/200/300"
				/>
				<RestuarantCardComponent />
				<RestuarantCardComponent />
				<RestuarantCardComponent />
			</div>
		</>
	);
};

const AppLayout = () => {
	return (
		<>
			<div className="app">
				<HeaderComponent />
				<BodyComponent />
			</div>
		</>
	);
};

root.render(<AppLayout />);
