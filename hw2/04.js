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
			callback(true, {username, password});
		}
	},

	getRoles: (username, callback) => {
		// TODO get roles array
		// find all roles of the current user
		let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
		if(rolesOfUser.length) {
			callback(null, rolesOfUser);
		} else {
			callback(true);
		}
	},

	logAccess: (username, callback) => {
		// TODO access if admin
		let rolesOfUser = rolesList.filter(obj => obj.username === username);
		let isAdmin = rolesOfUser.length > 0 ? rolesOfUser.map(el => el.role === 'admin')[0] : false;
		if(isAdmin) {
			callback(null, 'Logging was allowed');
		} else {
			callback(true);
		}
	},
};

const verifyUser = function(username, password, callback) {
	dataBase.verifyUser(username, password, (error, userInfo) => {
		if (error) {
			callback(`User ${username} wasn't verified`);
		} else {
			callback(`User ${username} was verified`);
			dataBase.getRoles(username, (error, roles) => {				
				if (error) {
					callback(`User ${username} has no roles`);
				} else {
					callback(`User ${username} has roles: ${roles}`);
					dataBase.logAccess(username, (error) => {
						if (error) {
							callback(`User ${username} hasn't 'admin' role`);
						} else {
							callback(`User ${username} was successfully loged`)
						}
					})
				}
			})
		}
	})
};
verifyUser('Sam', '222', function(data) {
	console.log(data);
});
// TODO rewrite with promises
// TODO rewrite with async/await