const {usersList, rolesList} = require("./04-data");

const dataBasePromise = {
	verifyUser: (username, password) => {
		return new Promise((resolve, reject) => {
			let result = usersList.filter(obj => obj.username === username);
			if(result.length && result[0].password === password) {
				resolve({username, password});
			} else {
				reject(`User ${username} wasn't verified`, {username, password});
			}
		});
  	},
  	getRoles: (userInfo) => {
		return new Promise((resolve, reject) => {
			let rolesOfUser = rolesList.filter(obj => obj.username === userInfo.username).map(el => el.role);
			rolesOfUser.length ? resolve({userInfo, rolesOfUser}) : reject(`User ${userInfo.username} has no roles`);
		});
  	},
  	logAccess: ({userInfo, rolesOfUser}) => {
		return new Promise((resolve, reject) => {
			const isAdmin = rolesOfUser.length > 0 ? rolesOfUser.filter(el => el === 'admin')[0] : false;
			isAdmin ? resolve({userInfo, rolesOfUser}) : reject(`User ${userInfo.username} hasn't 'admin' role`);
		});
  	},
};

const verifyUserPromise = (username, password) => 
	dataBasePromise.verifyUser(username, password)
		.then(dataBasePromise.getRoles)
		.then(dataBasePromise.logAccess)
		.then(({userInfo, rolesOfUser}) => {
			const { username, password } = {...userInfo};
			console.log(`Username: ${username}; Password: ${password}; \n${username} has role(s): [${rolesOfUser}]`);
		})
		.catch((error) => console.log(`error: ${error}`));


verifyUserPromise('Sam', '222');
verifyUserPromise('Bob', '111');
verifyUserPromise('Bob', '222');