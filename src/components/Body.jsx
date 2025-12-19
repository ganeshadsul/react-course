import RestuarantCard from './RestuarantCard';
import restuarants from '../utils/mockData';

const Body = () => {
	return (
		<>
			<div className="search">Search bar</div>
			<div className="restuarant-container">
				{restuarants.map((restuarant, index) => (
					<RestuarantCard
						key={index}
						name={restuarant.name}
						cuisines={restuarant.cuisines}
						averageCost={restuarant.averageCost}
						ratings={restuarant.ratings}
						discount={restuarant.discount}
						imageSrc={restuarant.imageSrc}
					/>
				))}
			</div>
		</>
	);
};

export default Body;
