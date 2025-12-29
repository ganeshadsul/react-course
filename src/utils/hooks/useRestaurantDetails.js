import { useEffect, useState } from 'react';

const useRestaurantDetails = (restaurantId) => {
	const [restaurantDetails, setRestaurantDetails] = useState({});

	const fetchRestaurantDetails = async (id) => {
		const response = await fetch(`/api/restaurants/${id}`);
		const data = await response.json();
		setRestaurantDetails(data);
	};
	useEffect(() => {
		fetchRestaurantDetails(restaurantId);
	}, []);
	return restaurantDetails;
};
export default useRestaurantDetails;
