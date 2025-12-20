import { useRouteError } from 'react-router';

const Error = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<>
			<div>
				<h1>Opps!!!</h1>
				<h2>Someting Went wrong!!!!</h2>
				<h3>{error.data}</h3>
			</div>
		</>
	);
};

export default Error;
