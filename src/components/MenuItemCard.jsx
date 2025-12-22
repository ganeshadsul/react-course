const MenuItemCard = (props) => {
	const { menu } = props;
	return (
		<>
			<div className="menu-item">
				<div className="menu-image-container">
					<img className="menu-image" src={menu.imageSrc} alt="" />
				</div>
				<div className="menu-meta">
					<div className="menu-info">
						<div className="menu-name">{menu.name}</div>
						<div className="dotted-line"></div>
						<div className="menu-price">&#8377; {menu.price}</div>
					</div>
					<div className="menu-desc-container">
						<div className="menu-desc">{menu.description}</div>
					</div>
					<div className="food-type-container">
						<div className="food-type">
							{menu.isVeg ? 'Veg' : 'Non-Veg'}
						</div>
						<div className="dotted-line"></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default MenuItemCard;
