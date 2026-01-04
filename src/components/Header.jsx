import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import '../styles/header.css';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/contexts/UserContext';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
	const onlineStatus = useOnlineStatus();
	const UserData = useContext(UserContext);

	const cartItems = useSelector((store) => store.cart.items);

	return (
		<>
			<nav className="header flex justify-between items-center p-2 shadow-sm fixed z-100 top-0 right-0 left-0 bg-white">
				<div className="logo-continer">
					<img className="logo w-20" src={LOGO_URL} alt="logo" />
				</div>
				<div className="nav-items">
					<ul className="flex *:px-5">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about-us">About us</Link>
						</li>
						<li>
							<Link to="/contact-us">Contact us</Link>
						</li>
						<li className="relative flex items-center">
							<Link to="/cart">
								<FaShoppingCart color="black" size={22} />
								{cartItems.length ? (
									<div className="absolute text-xs -top-2.5 right-3 px-1.5 py-px rounded-full bg-red-600 text-white ">
										{cartItems.length}
									</div>
								) : (
									''
								)}
							</Link>
						</li>
						<li>
							<Link to="/grocery">Grocery</Link>
						</li>
						<li>{UserData.loggedInUser.fName}</li>
						<li>{onlineStatus ? '🟢' : '🔴'}</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
