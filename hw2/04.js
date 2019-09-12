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

const dataBase = {
  	verifyUser: (username, password, callback) => {
		// TODO check username and password
		let result = usersList.filter(obj => obj.username === username);
		if(result.length && result[0].password === password) {
			callback(null, {username, password});
		} else {
			callback(`User ${username} wasn't verified`, {username, password});
		}
	},

	getRoles: (username, callback) => {
		// TODO get roles array (find all roles of the current user)
		let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
		rolesOfUser.length ? callback(null, rolesOfUser) : callback(`User ${username} has no roles`);
	},

	logAccess: (username, rolesOfUser, callback) => {
		// TODO access if admin
		let isAdmin = rolesOfUser.length > 0 ? rolesOfUser.filter(el => el === 'admin')[0] : false;
		isAdmin ? callback(null) : callback(`User ${username} hasn't 'admin' role`);
	},
};

const verifyUser = function(username, password, callback) {
	dataBase.verifyUser(username, password, (error, userInfo) => {
		if (error) {
			callback(error);
		} else {
			callback(null, `User ${username} was verified`);
			dataBase.getRoles(username, (error, roles) => {				
				if (error) {
					callback(error);
				} else {
					callback(null, `User ${username} has roles: ${roles}`);
					dataBase.logAccess(username, roles, (error) => {
						if (error) {
							callback(error);
						} else {
							callback(null, userInfo, roles)
						}
					});
				}
			});
		}
	});
};
verifyUser('Bob', '111', function(error, userInfo, roles) {
	if(error) console.log(error);
	if(userInfo) console.log('Info: ', userInfo);
	if(roles) console.log('With these roles: ', roles);
});


/* 
	If you prefer to see the pretty structure of output in the console, please comment on other parts of realization.
	As we have async behavior of the code, some parts (like throw for example) can run a little bit longer then 
	another parts and it can shuffle the output.
*/


// TODO rewrite with promises
// const dataBasePromise = {
// 	verifyUser: (username, password) => {
// 		// TODO check username and password
// 		console.log('\nPromise version:');
// 		return new Promise((resolve, reject) => {
// 			let result = usersList.filter(obj => obj.username === username);
// 			if(result.length && result[0].password === password) {
// 				resolve({username, password});
// 			} else {
// 				reject(`User ${username} wasn't verified`, {username, password});
// 			}
// 		});
//   	},
//   	getRoles: (userInfo) => {
// 	  	// TODO get roles array (find all roles of the current user)
// 		return new Promise((resolve, reject) => {
// 			let rolesOfUser = rolesList.filter(obj => obj.username === userInfo.username).map(el => el.role);
// 			rolesOfUser.length ? resolve({userInfo, rolesOfUser}) : reject(`User ${userInfo.username} has no roles`);
// 		});
//   	},
//   	logAccess: ({userInfo, rolesOfUser}) => {
// 		// TODO access if admin
// 		return new Promise((resolve, reject) => {
// 			let isAdmin = rolesOfUser.length > 0 ? rolesOfUser.filter(el => el === 'admin')[0] : false;
// 			isAdmin ? resolve({userInfo, rolesOfUser}) : reject(`User ${userInfo.username} hasn't 'admin' role`);
// 		});
//   	},
// };

// const verifyUserPromise = ((username, password) => {
// 	dataBasePromise.verifyUser(username, password)
// 		.then((data) => dataBasePromise.getRoles(data))
// 		.then((data) => dataBasePromise.logAccess(data))
// 		.then(({userInfo, rolesOfUser}) => {
// 			const { username, password } = {...userInfo};
// 			console.log(`Username: ${username}; Password: ${password}; \nUser has role(s): [${rolesOfUser}]`);
// 		})
// 		.catch((error) => console.log(`error: ${error}`));
// })('Bob', '111');


// TODO rewrite with async/await
// const dataBaseAsync = {
//   	verifyUser: async (username, password) => {
// 		// TODO check username and password
// 		let result = usersList.filter(obj => obj.username === username);
// 		if(result.length && result[0].password === password) {
// 			return { username, password };
// 		} else {
// 			throw new Error(`User ${username} wasn't verified`);
// 		}
// 	},
// 	getRoles: async ({username, password}) => {
// 		// TODO get roles array (find all roles of the current user)
// 		let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
// 		const result = { username, password, rolesOfUser };
// 		return rolesOfUser.length ? result : new Error(`User ${username} has no roles`);
// 	},
// 	logAccess: async ({username, rolesOfUser}) => {
// 		// TODO access if admin
// 		let isAdmin = rolesOfUser.length > 0 ? rolesOfUser.filter(el => el === 'admin')[0] : false;
// 		return isAdmin ? true : new Error(`User ${username} hasn't 'admin' role`);
// 	},
// };

// const verifyUserAsync = (async (username, password) => {
// 	console.log('\nAsync version:')
// 	try {
// 		const verifiedData = await dataBaseAsync.verifyUser(username, password);
// 		const rolesData = await dataBaseAsync.getRoles(verifiedData);
// 		const result = await dataBaseAsync.logAccess(rolesData);
// 		if(result)
// 			console.log(`Username: ${username}; Password: ${password}; \nUser has role(s): [${rolesData.rolesOfUser}]`);
// 	} catch (e) {
// 	  console.log(e)
// 	}
// })('Bob', '111');