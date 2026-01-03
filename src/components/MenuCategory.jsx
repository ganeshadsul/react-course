import MenuItemCard from './MenuItemCard';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const MenuCategory = (props) => {
	const { menuItems, showMenuItems, toggleMenuCategoryAccordion } = props;
	const handleClick = () => {
		toggleMenuCategoryAccordion();
	};
	return (
		<>
			<div
				className="menu-category-container w-1/2 m-3 p-2.5 shadow-xl bg-gray-50 rounded flex flex-col"
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

				<div
					className={`menu-category-body transition-opacity duration-150 ease-in ${
						showMenuItems ? 'opacity-100' : 'opacity-0'
					}`}
				>
					{showMenuItems
						? menuItems.items.map((menu) => (
								<MenuItemCard key={menu.id} menu={menu} />
						  ))
						: ''}
				</div>
			</div>
		</>
	);
};

export default MenuCategory;
