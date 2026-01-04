import { FaLeaf } from 'react-icons/fa';
import { TbMeat } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../store/slices/cartSlice';
import { FaTrashAlt } from 'react-icons/fa';
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
				</div>
			</div>
		</>
	);
};
export const withCartActions = (MenuItemCard) => {
	const cartItems = useSelector((store) => store.cart.items);
	return (props) => {
		const { menu } = props;
		const dispatch = useDispatch();
		const addToCart = (item) => {
			dispatch(addItem(item));
		};
		const removeFromCart = (item) => {
			dispatch(removeItem(item));
		};
		return (
			<>
				<div className="relative">
					<MenuItemCard {...props} />
					<div className="absolute bottom-2.5 right-16.5">
						{cartItems.find((cart) => cart.id === menu.id) ? (
							<button
								className=" bg-white cursor-pointer border-2 border-red-600 text-red-600 hover:bg-red-100 transition duration-150 rounded px-3 py-1"
								onClick={() => removeFromCart(menu)}
							>
								Remove
							</button>
						) : (
							<button
								className=" bg-white cursor-pointer border-2 border-red-600 text-red-600 hover:bg-red-100 transition duration-150 rounded px-3 py-1"
								onClick={() => addToCart(menu)}
							>
								Add
							</button>
						)}
					</div>
				</div>
			</>
		);
	};
};

export const withRemoveFromCartOption = (MenuItemCard) => {
	return (props) => {
		const { menu } = props;
		const dispatch = useDispatch();

		const removeFromCart = (item) => {
			dispatch(removeItem(item));
		};
		return (
			<>
				<div className="relative">
					<MenuItemCard {...props} />
					<button
						className="flex items-center absolute top-1 right-3.5 bg-red-600 hover:bg-red-700 active:bg-red-800 transition-colors duration-150 cursor-pointer text-white p-1.5 rounded-full"
						onClick={() => removeFromCart(menu)}
					>
						<FaTrashAlt size={12} />
					</button>
				</div>
			</>
		);
	};
};
export default MenuItemCard;
