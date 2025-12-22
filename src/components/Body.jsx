import { useEffect, useRef, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
	const [intialLoading, setIntialLoading] = useState(true);
	const [restaurants, setRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [isTop5RestaurantFilterActve, setIsTop5RestaurantFilterActve] =
		useState(false);

	useEffect(() => {
		fetchData();
		setIntialLoading(false);
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('/api/restaurants');
			const data = await response.json();
			setRestaurants(data);
			setFilteredRestaurants(data);
		} catch (error) {
			console.log('Error: ' + error.message);
			setRestaurants([]);
			setFilteredRestaurants([]);
		}
	};

	const handleSearchInput = (e) => {
		if (e.target.value === '') {
			return setFilteredRestaurants([...restaurants]);
		}
		const filteredRestaurantsList = filteredRestaurants.filter(
			(restaurant) =>
				restaurant.name
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
		);
		setFilteredRestaurants(filteredRestaurantsList);
	};

	if (intialLoading) {
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
					className={`top-rated-res-btn ${
						isTop5RestaurantFilterActve
							? 'top-rated-res-btn-active'
							: ''
					}`}
					onClick={() => {
						if (!isTop5RestaurantFilterActve) {
							setFilteredRestaurants(
								filteredRestaurants.filter(
									(restuarant) => restuarant.ratings >= 4.5
								)
							);
						} else {
							setFilteredRestaurants(restaurants);
						}
						setIsTop5RestaurantFilterActve(
							!isTop5RestaurantFilterActve
						);
					}}
				>
					Above 4.5
				</button>
				<span>{filteredRestaurants.length} restaurants found.</span>
			</div>

			<div className="restuarant-container">
				{filteredRestaurants.map((restaurant, index) => (
					<Link
						className="restaurant-link"
						to={`/restaurants/${restaurant.id}`}
						key={index}
					>
						<RestaurantCard
							name={restaurant.name}
							cuisines={restaurant.cuisines}
							averageCost={restaurant.averageCost}
							ratings={restaurant.ratings}
							discount={restaurant.discount}
							imageSrc={restaurant.imageSrc}
						/>
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
