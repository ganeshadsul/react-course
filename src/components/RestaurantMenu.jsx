import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../styles/restaurant-menu.css';
import MenuCategory from './MenuCategory';

const RestaurantMenu = () => {
	const { id } = useParams();
	const [restaurantDetails, setRestaurantDetails] = useState({});
	const [groupedMenuDetails, setGroupedMenuDetails] = useState([]);

	const fetchRestaurantDetails = async (id) => {
		const response = await fetch(`/api/restaurants/${id}`);
		const data = await response.json();
		setRestaurantDetails(data);
	};

	const fetchMenuDetails = async (id) => {
		const response = await fetch(`/api/menu?restaurantId=${id}`);
		const data = await response.json();
		const grouped = data.reduce((acc, item) => {
			acc[item.category] = acc[item.category] || [];
			acc[item.category].push(item);
			return acc;
		}, {});
		const groupedMenuList = Object.entries(grouped).map(
			([category, items]) => ({
				category,
				items,
			})
		);
		setGroupedMenuDetails(groupedMenuList);
	};
	useEffect(() => {
		fetchRestaurantDetails(id);
		fetchMenuDetails(id);
	}, []);

	return (
		<>
			<div className="restaurant-menu-info">
				<div className="res-name">{restaurantDetails.name}</div>
				<div className="res-image">
					<img
						src={restaurantDetails.imageSrc}
						alt={restaurantDetails.name}
					/>
				</div>
				<div className="res-addr">{restaurantDetails.address}</div>
				<div className="res-contact">
					{restaurantDetails.contactNumber}
				</div>
				<div className="menu-header">
					<hr className="hr-header" />
					<span className="menu-span">Menu</span>
					<hr className="hr-header" />
				</div>
				{groupedMenuDetails.map((menuItems, index) => (
					<MenuCategory key={index} menuItems={menuItems} />
				))}
			</div>
		</>
	);
};

export default RestaurantMenu;
