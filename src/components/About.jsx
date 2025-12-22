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
			<div className="about-us-container">
				<div className="about-us-page-title">About</div>
				<hr className="title-separator" />
				<div className="users-container">
					<Userf
						githubUserName={`ganeshadsul`}
						componentSource="Function"
						name="Ganesh adsul"
						location="Mumbai"
						contactInfo="https://www.linkedin.com/in/ganeshadsul/"
					/>
					<hr className="user-separator" />
					<User githubUserName={`ganeshadsul`} />
					<hr className="user-separator" />
					<User
						githubUserName={`AshishMore97`}
						// componentSource="Class"
						// name="Rahul Adsul"
						// location="Pune"
						// contactInfo="https://www.linkedin.com/in/rahuladsul/"
					/>
					<hr className="user-separator" />
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
