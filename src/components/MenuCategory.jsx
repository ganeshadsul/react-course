import MenuItemCard from './MenuItemCard';

const MenuCategory = (props) => {
	const { menuItems } = props;
	return (
		<>
			<div className="menu-category-container">
				<div className="category">{menuItems.category}</div>
				<hr className="category-separator" />
				{menuItems.items.map((menu) => (
					<MenuItemCard key={menu.id} menu={menu} />
				))}
			</div>
		</>
	);
};

export default MenuCategory;
