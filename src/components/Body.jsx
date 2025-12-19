import { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import mockRestaurants from '../utils/mockData';

const Body = () => {
	const [restaurants, setRestaurants] = useState(mockRestaurants);
	return (
		<>
			<div className="search">
				<input
					type="text"
					className="search-restaurants"
					placeholder="Search restuarants"
					onChange={(e) => {
						if (e.target.value === '')
							return setRestaurants(mockRestaurants);
						const filteredRestaurants = mockRestaurants.filter(
							(restaurant) =>
								restaurant.name
									.toLowerCase()
									.includes(e.target.value.toLowerCase())
						);
						setRestaurants(filteredRestaurants);
					}}
				/>
			</div>
			<div className="filters">
				<button
					className="top-rated-res-btn"
					onClick={() => {
						const filteredRestaurants = restaurants.filter(
							(restuarant) => restuarant.ratings >= 4.5
						);
						setRestaurants(filteredRestaurants);
					}}
				>
					Above 4.5
				</button>
				<span>{restaurants.length} restaurants found.</span>
			</div>
			<div className="restuarant-container">
				{restaurants.map((restaurant, index) => (
					<RestaurantCard
						key={index}
						name={restaurant.name}
						cuisines={restaurant.cuisines}
						averageCost={restaurant.averageCost}
						ratings={restaurant.ratings}
						discount={restaurant.discount}
						imageSrc={restaurant.imageSrc}
					/>
				))}
			</div>
		</>
	);
};

export default Body;
