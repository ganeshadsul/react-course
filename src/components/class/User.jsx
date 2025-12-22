import React from 'react';
import '../../styles/user.css';

class User extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			userInfo: {
				name: 'default name',
				location: 'default location',
				login: '@xyz',
			},
		};
		console.log(`${this.state.userInfo.name} Child Constructor`);
	}
	async componentDidMount() {
		console.log(`${this.state.userInfo.name} Child Component didMount`);
		const response = await fetch(
			`https://api.github.com/users/${this.props.githubUserName}`
		);
		const userInfo = await response.json();
		this.setState({
			userInfo,
		});
	}
	componentDidUpdate() {
		console.log(`${this.state.userInfo.name} Child Component didUpdate`);
	}
	render() {
		const { name, location, login } = this.state.userInfo;
		console.log(`${this.state.userInfo.name} Child Render`);
		// const {
		// 	name = 'test name',
		// 	location = 'temp location',
		// 	contactInfo = 'abc.xyz',
		// 	componentSource,
		// } = this.props;
		const incrementCount = () => {
			this.setState({
				count: this.state.count + 1,
			});
		};
		return (
			<>
				<div className="user-card">
					<div className="user-name">{name}</div>
					<div className="user-location">{location}</div>
					<div className="user-contact-info">@{login}</div>
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
