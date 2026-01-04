import { useSelector } from 'react-redux';
import MenuItemCard, { withRemoveFromCartOption } from './MenuItemCard';
import { useEffect } from 'react';

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);

	const MenuItemWithRemoveOption = withRemoveFromCartOption(MenuItemCard);

	useEffect(() => {
		document.title = 'Cart';
	}, []);
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<div className="flex flex-col justify-center items-center shadow w-1/2 p-2.5">
					<div className="cart-header text-3xl">Cart</div>
					<hr className="w-2/3  m-2.5" />
					{!cartItems.length ? <div>No items in cart</div> : ''}
					<div className="cart-body w-full">
						{cartItems.map((item) => (
							<MenuItemWithRemoveOption
								key={item.id}
								menu={item}
							/>
						))}
					</div>
				</div>
				{cartItems.length ? (
					<div className="flex justify-between items-center shadow w-1/2 m-3 p-2.5">
						<div>Total:</div>
						<div>
							₹
							{cartItems.reduce((total, item) => {
								total += item.price;
								return total;
							}, 0)}
						</div>
					</div>
				) : (
					''
				)}
			</div>
		</>
	);
};

export default Cart;
