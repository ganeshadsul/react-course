import { useParams } from 'react-router';
import MenuCategory from './MenuCategory';
import useRestaurantMenu, {
	groupMenuItems,
} from '../utils/hooks/useRestaurantMenu';
import useRestaurantDetails from '../utils/hooks/useRestaurantDetails';
import '../styles/restaurant-menu.css';

const RestaurantMenu = () => {
	const { id } = useParams();

	const restaurantDetails = useRestaurantDetails(id);
	const menuDetails = useRestaurantMenu(id);
	let groupedMenuDetails = [];
	if (menuDetails) {
		groupedMenuDetails = groupMenuItems(menuDetails, 'category');
	}

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
