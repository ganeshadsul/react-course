import { useEffect, useState } from 'react';

const useRestaurantMenu = (restaurantId) => {
	const [menuDetails, setMenuDetails] = useState(null);

	useEffect(() => {
		fetchMenuDetails(restaurantId);
	}, []);
	const fetchMenuDetails = async (id) => {
		const response = await fetch(`/api/menu?restaurantId=${id}`);
		let data = await response.json();
		setMenuDetails(data);
	};
	return menuDetails;
};

export const groupMenuItems = (data, key) => {
	const grouped = data.reduce((acc, item) => {
		acc[item[key]] = acc[item[key]] || [];
		acc[item[key]].push(item);
		return acc;
	}, {});
	return Object.entries(grouped).map(([category, items]) => ({
		category,
		items,
	}));
};
export default useRestaurantMenu;
