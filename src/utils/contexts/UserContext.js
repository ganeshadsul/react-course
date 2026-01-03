import { createContext } from 'react';

const UserContext = createContext({
	loggedInUser: {
		fName: 'Default',
		lName: 'User',
		email: 'abc@gmail.com',
		role: {
			name: 'User',
			value: 'user',
		},
	},
});

export default UserContext;
