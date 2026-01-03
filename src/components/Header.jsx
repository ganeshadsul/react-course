import { Link } from 'react-router-dom';
import { LOGO_URL } from '../utils/constants';
import '../styles/header.css';
import useOnlineStatus from '../utils/hooks/useOnlineStatus';
import { useContext } from 'react';
import UserContext from '../utils/contexts/UserContext';

const Header = () => {
	const onlineStatus = useOnlineStatus();
	const UserData = useContext(UserContext);
	return (
		<>
			<nav className="header flex justify-between items-center p-2 shadow-sm">
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
						<li>Cart</li>
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
