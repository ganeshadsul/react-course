import MenuItemCard, { withCartActions } from './MenuItemCard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MenuCategory = (props) => {
	const MenuItemCardWithCartActions = withCartActions(MenuItemCard);
	const { menuItems, showMenuItems, toggleMenuCategoryAccordion } = props;
	const handleClick = () => {
		toggleMenuCategoryAccordion();
	};
	return (
		<>
			<div
				className="menu-category-container w-1/2 mx-3 mt-3 p-2.5 shadow-xl bg-gray-50 rounded flex flex-col"
				onClick={handleClick}
			>
				<div
					className={`menu-category-header flex justify-between items-center p-2.5 ${
						showMenuItems ? 'border-b' : ''
					}`}
				>
					<span className="text-l font-medium">
						{menuItems.category} ({menuItems?.items?.length})
					</span>

					{showMenuItems ? <FaChevronUp /> : <FaChevronDown />}
				</div>
			</div>
			<div
				className={`w-1/2 shadow-xl bg-gray-50 rounded flex flex-col menu-category-body transition-opacity duration-150 ease-in ${
					showMenuItems ? 'opacity-100' : 'opacity-0'
				}`}
			>
				{showMenuItems
					? menuItems.items.map((menu) => (
							<MenuItemCardWithCartActions
								key={menu.id}
								menu={menu}
							/>
					  ))
					: ''}
			</div>
		</>
	);
};

export default MenuCategory;
