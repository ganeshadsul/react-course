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
		<div className="restaurant-card flex flex-col p-3.5 rounded-sm cursor-pointer hover:shadow-[0_0_10px_rgba(0,0,0,0.8)] transition-shadow duration-150">
			<div className="restaurant-logo-container h-[80%] relative">
				<img
					src={imageSrc}
					alt={`${name}-logo`}
					className="restaurant-image object-cover rounded-sm size-full"
					loading="lazy"
				/>
				<div className="restaurant-discount-info absolute left-0 bottom-3.5 text-white bg-green-600 px-1 py-0.5 text-sm rounded-r-sm">
					{discount ?? ''}
				</div>
			</div>
			<div className="restaurant-info-container flex flex-col flex-1 p-1">
				<div className="restaurant-info flex justify-between mt-1">
					<div className="restaurant-name">{name}</div>
					<div className="restaurant-rating-container flex items-center py-0.5 px-1.5 bg-green-600 text-white rounded">
						<div className="restuarant-rating mr-1">{ratings}</div>
						<FaStar />
					</div>
				</div>
				<div className="restaurant-meta flex justify-between">
					<div className="restaurant-cuisine text-gray-600">
						{cuisines.join(', ')}
					</div>
					<div className="restaurant-average-cost">{averageCost}</div>
				</div>
			</div>
		</div>
	);
};

export const withPromotedLabel = (RestuarantCard) => {
	return (props) => {
		return (
			<>
				<div className="relative">
					<RestuarantCard {...props} />
					<label className="absolute top-6 left-1 text-white px-2 bg-gray-600">
						Promoted
					</label>
				</div>
			</>
		);
	};
};
export default RestuarantCard;
