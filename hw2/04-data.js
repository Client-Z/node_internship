const roles = {
	ADMIN: 'admin',
	USER: 'user',
};

const usersList = [
	{ username: 'Bob', password: '111' },
	{ username: 'Sam', password: '222' },
	{ username: 'Matt', password: '333' }
];

const rolesList = [
	{ username: 'Bob', role: roles.ADMIN },
	{ username: 'Bob', role: roles.USER },
	{ username: 'Sam', role: roles.USER },
	{ username: 'Matt', role: roles.USER },
];
module.exports = {usersList, rolesList};