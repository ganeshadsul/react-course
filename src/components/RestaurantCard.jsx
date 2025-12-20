import { FaStar } from 'react-icons/fa';
import '../styles/restaurant-card.css';

const RestuarantCard = ({
	name = 'Lorem, ipsum.',
	cuisines = ['tasty'],
	averageCost = '',
	discount = '',
	ratings = 0,
	imageSrc = 'https://picsum.photos/200/300',
}) => {
	return (
		<div className="restaurant-card">
			<div className="restaurant-logo-container">
				<img
					src={imageSrc}
					alt={`${name}-logo`}
					className="restaurant-image"
					loading="lazy"
				/>
				<div className="restaurant-discount-info">{discount ?? ''}</div>
			</div>
			<div className="restaurant-info-container">
				<div className="restaurant-info">
					<div className="restaurant-name">{name}</div>
					<div className="restaurant-rating-container">
						<div className="restuarant-rating">{ratings}</div>
						<FaStar />
					</div>
				</div>
				<div className="restaurant-meta">
					<div className="restaurant-cuisine">
						{cuisines.join(', ')}
					</div>
					<div className="restaurant-average-cost">{averageCost}</div>
				</div>
			</div>
		</div>
	);
};

export default RestuarantCard;
