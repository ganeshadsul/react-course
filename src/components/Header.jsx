import { LOGO_URL } from '../utils/constants';
import '../styles/header.css';

const Header = () => {
	return (
		<>
			<nav className="header">
				<div className="logo-continer">
					<img className="logo" src={LOGO_URL} alt="logo" />
				</div>
				<div className="nav-items">
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Contact us</li>
						<li>Cart</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Header;
