import MenuItemCard from './MenuItemCard';

const MenuCategory = (props) => {
	const { menuItems } = props;
	return (
		<>
			<div className="menu-category-container flex flex-col justify-center items-center w-1/2 m-3.5 text-2xl p-5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.2)]">
				<div className="category m-3.5">{menuItems.category}</div>
				<hr className="category-separator size-full m-2.5" />
				{menuItems.items.map((menu) => (
					<MenuItemCard key={menu.id} menu={menu} />
				))}
			</div>
		</>
	);
};

export default MenuCategory;
