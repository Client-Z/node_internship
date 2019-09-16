const {usersList, rolesList} = require("./04-data");

const dataBaseAsync = {
  	verifyUser: async (username, password) => {
		const result = usersList.filter(obj => obj.username === username);
		if(result.length && result[0].password === password) return { username, password };
		throw new Error(`User ${username} wasn't verified`);
	},
	getRoles: async ({username, password}) => {
		let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
		const result = { username, password, rolesOfUser };
		if(rolesOfUser.length) return result;
		throw new Error(`User ${username} has no roles`);
	},
	logAccess: async ({username, rolesOfUser}) => {
		const isAdmin = rolesOfUser.length > 0 ? rolesOfUser.filter(el => el === 'admin')[0] : false;
		if(isAdmin) return true;
		throw new Error(`User ${username} hasn't 'admin' role`);
	},
};

const verifyUserAsync = async (username, password) => {
	try {
		const verifiedData = await dataBaseAsync.verifyUser(username, password);
		const rolesData = await dataBaseAsync.getRoles(verifiedData);
		const result = await dataBaseAsync.logAccess(rolesData);
		if(result)
			return `Username: ${username}; Password: ${password}; \nUser has role(s): [${rolesData.rolesOfUser}]`
	} catch (e) {
	  return e;
	}
}
verifyUserAsync('Bob', '111').then(result => console.log(result));
verifyUserAsync('Sam', '222').then(result => console.log(result));
verifyUserAsync('Bob', '222').then(result => console.log(result));