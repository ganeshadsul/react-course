import { FaLeaf } from 'react-icons/fa';
import { TbMeat } from 'react-icons/tb';
const MenuItemCard = (props) => {
	const { menu } = props;
	return (
		<>
			<div className="menu-item w-full m-1 p-2 flex justify-between rounded hover:shadow-[0_0_15px_rgba(0,0,0,0.2)] transition-shadow duration-150">
				<div className="menu-image-container p-2.5 w-50">
					<img
						className="menu-image size-full object-cover"
						src={menu.imageSrc}
						alt=""
					/>
				</div>
				<div className="menu-meta flex flex-col justify-between flex-1 p-2.5">
					<div className="menu-info flex justify-between items-center">
						<div className="menu-name text-xl">{menu.name}</div>
						<div className="dotted-line mx-2.5 my-auto flex-1 border-2 border-dotted border-black"></div>
						<div className="menu-price text-xl">
							&#8377; {menu.price}
						</div>
					</div>
					<div className="menu-desc-container text-base text-gray-500">
						<div className="menu-desc">{menu.description}</div>
					</div>
					<div className="food-type-container flex justify-between items-center">
						<div className="food-type flex text-base">
							{menu.isVeg ? (
								<FaLeaf color="green" />
							) : (
								<TbMeat color="red" size={20} />
							)}
						</div>
						<div className="dotted-line mx-2.5 my-auto flex-1 border-2 border-dotted border-black"></div>
					</div>
				</div>
			</div>
		</>
	);
};
export default MenuItemCard;
