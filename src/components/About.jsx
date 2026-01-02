// Function based Component
import Userf from './User';
// Class Based Component
import User from './class/User';
import '../styles/about-us.css';
import React from 'react';
//function based
// const About = () => {
// 	return (
// 		<div className="about-us-container">
// 			<div className="about-us-page-title">About</div>
// 			<hr className="title-separator" />
// 			<div className="users-container">
// 				<Userf
// 					componentSource="Function"
// 					name="Ganesh adsul"
// 					location="Mumbai"
// 					contactInfo="https://www.linkedin.com/in/ganeshadsul/"
// 				/>
// 				<hr className="user-separator" />
// 				<User
// 					componentSource="Class"
// 					name="Rahul Adsul"
// 					location="Pune"
// 					contactInfo="https://www.linkedin.com/in/rahuladsul/"
// 				/>
// 			</div>
// 		</div>
// 	);
// };

//class based
class About extends React.Component {
	constructor(props) {
		super(props);
		console.log('Parent Constructor');
	}
	componentDidMount() {
		console.log('Parent Component didMount');
	}
	componentDidUpdate() {
		console.log(`Parent Component didUpdate`);
	}
	render() {
		console.log('Parent Render');

		return (
			<div
				className="about-us-container flex flex-col
			justify-center items-center"
			>
				<div className="about-us-page-title text-5xl">About</div>
				<hr className="title-separator w-3/4 m-3.5" />
				<div className="users-container flex flex-col m-3.5 p-2.5 w-1/2 shadow-[0_0_15px_rgba(0,0,0,0.2)]">
					<Userf
						githubUserName={`ganeshadsul`}
						componentSource="Function"
						name="Ganesh adsul"
						location="Mumbai"
						contactInfo="https://www.linkedin.com/in/ganeshadsul/"
					/>
					<hr className="user-separator m-3.5" />
					<User githubUserName={`ganeshadsul`} />
					<hr className="user-separator m-3.5" />
					<User
						githubUserName={`AshishMore97`}
						// componentSource="Class"
						// name="Rahul Adsul"
						// location="Pune"
						// contactInfo="https://www.linkedin.com/in/rahuladsul/"
					/>
					<hr className="user-separator m-3.5" />
					<User
						githubUserName={`AbhiPakhare`}
						// componentSource="Class"
						// name="Anjali Adsul"
						// location="Rise"
						// contactInfo="https://www.linkedin.com/in/anjaliadsul/"
					/>
				</div>
			</div>
		);
	}
}

export default About;
