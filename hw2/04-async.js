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

const dataBaseAsync = {
  	verifyUser: async (username, password) => {
		const result = usersList.filter(obj => obj.username === username);
		if(result.length && result[0].password === password) {
			return { username, password };
		} else {
			throw new Error(`User ${username} wasn't verified`);
		}
	},
	getRoles: async ({username, password}) => {
		let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
		const result = { username, password, rolesOfUser };
		if(rolesOfUser.length) {
			return result;
		} else {
			throw new Error(`User ${username} has no roles`);
		}
	},
	logAccess: async ({username, rolesOfUser}) => {
		const isAdmin = rolesOfUser.length > 0 ? rolesOfUser.filter(el => el === 'admin')[0] : false;
		if(isAdmin) {
			return true;
		} else {
			throw new Error(`User ${username} hasn't 'admin' role`);
		}
	},
};

const verifyUserAsync = async (username, password) => {
	try {
		const verifiedData = await dataBaseAsync.verifyUser(username, password);
		const rolesData = await dataBaseAsync.getRoles(verifiedData);
		const result = await dataBaseAsync.logAccess(rolesData);
		if(result) {
			console.log('Success!')
			console.log(`Username: ${username}; Password: ${password}; \nUser has role(s): [${rolesData.rolesOfUser}]`);
		}
	} catch (e) {
	  console.log(e)
	}
}
verifyUserAsync('Bob', '111');
verifyUserAsync('Sam', '222');
verifyUserAsync('Bob', '222');