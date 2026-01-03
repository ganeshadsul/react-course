import { FaLeaf } from 'react-icons/fa';
import { TbMeat } from 'react-icons/tb';
const MenuItemCard = (props) => {
	const { menu } = props;
	return (
		<>
			<div className="menu-item m-2 p-1 flex justify-between hover:bg-gray-200 transition-colors duration-150">
				<div className="menu-meta flex flex-col flex-1 p-2.5">
					<div className="menu-info flex justify-between items-center">
						<div className="menu-name text-l flex">
							{menu.name}
							<div className="food-type flex text-base">
								{menu.isVeg ? (
									<FaLeaf className="ml-1.5" color="green" />
								) : (
									<TbMeat
										className="ml-1.5"
										color="red"
										size={20}
									/>
								)}
							</div>
						</div>
						{/* <div className="dotted-line mx-2.5 my-auto flex-1 border-2 border-dotted border-black"></div> */}
						<div className="menu-price text-l">
							&#8377; {menu.price}
						</div>
					</div>
					<div className="menu-desc-container text-sm text-gray-500">
						<div className="menu-desc">{menu.description}</div>
					</div>
				</div>
				<div className="menu-image-container p-2.5 w-1/5 relative">
					<img
						className="menu-image size-full object-cover"
						src={menu.imageSrc}
						alt=""
					/>
					<button className="absolute bg-white cursor-pointer border-2 border-red-600 text-red-600 hover:bg-red-100 transition duration-150 rounded bottom-0.5 left-1/2 -translate-x-1/2 px-3 py-1">
						Add+
					</button>
				</div>
			</div>
		</>
	);
};
export default MenuItemCard;
