import { useContext, useEffect, useRef, useState } from 'react';
import RestaurantCard, { withPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import UserContext from '../utils/contexts/UserContext';

const Body = () => {
	const [intialLoading, setIntialLoading] = useState(true);
	const [restaurants, setRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [isTop5RestaurantFilterActve, setIsTop5RestaurantFilterActve] =
		useState(false);
	const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
	const { setUserInfo, loggedInUser } = useContext(UserContext);

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

	const handleUserNameChange = (e) => {
		setUserInfo({ ...loggedInUser, fName: e.target.value });
	};
	const onlineStatus = useOnlineStatus();
	if (!onlineStatus) {
		return <h1>Looks like you are offline!!!</h1>;
	}

	if (intialLoading) {
		return (
			<>
				<Shimmer />
			</>
		);
	}
	return (
		<>
			<section className="flex justify-between items-center p-3">
				<div className="search">
					<input
						type="text"
						className="search-restaurants focus:outline-0 p-1 border rounded border-gray-700"
						placeholder="Search restuarants"
						onChange={(e) => handleSearchInput(e)}
					/>
					<input
						type="text"
						className="focus:outline-0 ml-2.5 p-1 border rounded border-gray-700"
						placeholder="Enter User Name"
						onChange={(e) => handleUserNameChange(e)}
						value={loggedInUser.fName}
					/>
				</div>
				<div>{filteredRestaurants.length} restaurants found.</div>
				<div className="filters">
					<button
						className={`top-rated-res-btn  ${
							isTop5RestaurantFilterActve
								? 'top-rated-res-btn-active bg-[#b73e4c] cursor-pointer text-white py-2 px-3 rounded hover:opacity-89 transition-opacity duration-150 border border-black'
								: 'bg-[#EF4F61] text-white cursor-pointer py-2 px-3 rounded hover:opacity-89 transition-opacity duration-150  border border-transparent'
						}`}
						onClick={() => {
							if (!isTop5RestaurantFilterActve) {
								setFilteredRestaurants(
									filteredRestaurants.filter(
										(restuarant) =>
											restuarant.ratings >= 4.5
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
				</div>
			</section>

			<div className="restuarant-container p-3 grid grid-cols-4 gap-5">
				{filteredRestaurants.map((restaurant, index) => (
					<Link
						className="restaurant-link"
						to={`/restaurants/${restaurant.id}`}
						key={index}
					>
						{restaurant.isPromoted ? (
							<RestaurantCardPromoted
								name={restaurant.name}
								cuisines={restaurant.cuisines}
								averageCost={restaurant.averageCost}
								ratings={restaurant.ratings}
								discount={restaurant.discount}
								imageSrc={restaurant.imageSrc}
							/>
						) : (
							<RestaurantCard
								name={restaurant.name}
								cuisines={restaurant.cuisines}
								averageCost={restaurant.averageCost}
								ratings={restaurant.ratings}
								discount={restaurant.discount}
								imageSrc={restaurant.imageSrc}
							/>
						)}
					</Link>
				))}
			</div>
		</>
	);
};

export default Body;
