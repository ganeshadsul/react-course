import { useEffect, useState } from 'react';
import '../styles/user.css';

const User = ({
	name = 'test name',
	location = 'temp location',
	contactInfo = 'abc.xyz',
	componentSource,
}) => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};
	return (
		<>
			<div className="user-card">
				<div>Component Source: {componentSource}</div>
				<div className="user-name">{name}</div>
				<div className="user-location">{location}</div>
				<div className="user-contact-info">{contactInfo}</div>
				<div className="count-button">Likes: {count}</div>
				<button onClick={incrementCount}>Like</button>
			</div>
		</>
	);
};
export default User;
