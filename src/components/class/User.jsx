import React from 'react';
import '../../styles/user.css';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		console.log(`${this.props.name} Child Constructor`);
	}
	componentDidMount() {
		console.log(`${this.props.name} Child Component didMount`);
	}
	render() {
		console.log(`${this.props.name} Child Render`);
		const {
			name = 'test name',
			location = 'temp location',
			contactInfo = 'abc.xyz',
			componentSource,
		} = this.props;
		const incrementCount = () => {
			this.setState({
				count: this.state.count + 1,
			});
		};
		return (
			<>
				<div className="user-card">
					<div>Component Source: {componentSource}</div>
					<div className="user-name">{name}</div>
					<div className="user-location">{location}</div>
					<div className="user-contact-info">{contactInfo}</div>
					<div className="count-button">
						Likes: {this.state.count}
					</div>
					<button onClick={incrementCount}>Like</button>
				</div>
			</>
		);
	}
}

export default User;
