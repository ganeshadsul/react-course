import { useParams } from 'react-router';
import MenuCategory from './MenuCategory';
import useRestaurantMenu, {
	groupMenuItems,
} from '../utils/hooks/useRestaurantMenu';
import useRestaurantDetails from '../utils/hooks/useRestaurantDetails';
import '../styles/restaurant-menu.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { useState } from 'react';

const RestaurantMenu = () => {
	const { id } = useParams();

	const restaurantDetails = useRestaurantDetails(id);
	const menuDetails = useRestaurantMenu(id);
	let groupedMenuDetails = [];
	if (menuDetails) {
		groupedMenuDetails = groupMenuItems(menuDetails, 'category');
	}
	const [expandedCategory, setExpandedCategory] = useState(0);
	const toggleMenuCategoryAccordion = (catId) => {
		if (catId == expandedCategory) {
			setExpandedCategory(null);
		} else {
			setExpandedCategory(catId);
		}
	};

	return (
		<>
			<div className="restaurant-menu-info flex flex-col justify-center items-center m-2.5">
				<div className="res-name text-5xl">
					{restaurantDetails.name}
				</div>
				<div className="res-image h-75 m-2.5">
					<img
						className="size-full"
						src={restaurantDetails.imageSrc}
						alt={restaurantDetails.name}
					/>
				</div>
				<div className="res-meta border-gray-950 w-175 p-5 rounded flex justify-between items-center">
					<div className="res-addr-container flex items-center">
						<FaMapMarkerAlt color="red" size={20} />
						<div className="res-addr">
							{restaurantDetails.address}
						</div>
					</div>
					<div className="res-contact-container flex items-center">
						<FaPhoneAlt color="red" size={16} />
						<div className="res-contact ml-1">
							{restaurantDetails.contactNumber}
						</div>
					</div>
				</div>
				<div className="menu-header w-1/2 flex justify-center items-center">
					<hr className="hr-header flex-1" />
					<span className="menu-span w-auto p-3.5 text-3xl">
						Menu
					</span>
					<hr className="hr-header flex-1" />
				</div>
				{groupedMenuDetails.map((menuItems, index) => (
					<MenuCategory
						key={index}
						menuItems={menuItems}
						showMenuItems={expandedCategory === index ?? false}
						toggleMenuCategoryAccordion={() =>
							toggleMenuCategoryAccordion(index)
						}
					/>
				))}
			</div>
		</>
	);
};

export default RestaurantMenu;
