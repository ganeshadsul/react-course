import { useEffect, useRef, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

const Body = () => {
	const resRef = useRef();
	const [restaurants, setRestaurants] = useState([]);

	useEffect(() => {
		fetchData();
		console.log('useEffect called');
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('/api/restaurants');
			const data = await response.json();
			resRef.restaurantsList = data;
			setRestaurants(data);
		} catch (error) {
			console.log('Error: ' + error.message);
			setRestaurants([]);
		}
	};

	const handleSearchInput = (e) => {
		if (e.target.value === '') {
			return setRestaurants(resRef.restaurantsList);
		}
		const filteredRestaurants = resRef.restaurantsList.filter(
			(restaurant) =>
				restaurant.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
		);
		setRestaurants(filteredRestaurants);
	};

	if (restaurants.length === 0) {
		return (
			<>
				<Shimmer />
			</>
		);
	}
	return (
		<>
			<div className="search">
				<input
					type="text"
					className="search-restaurants"
					placeholder="Search restuarants"
					onChange={(e) => handleSearchInput(e)}
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
