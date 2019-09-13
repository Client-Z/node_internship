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
	  let result = usersList.filter(obj => obj.username === username);
	  if(result.length && result[0].password === password) {
		  callback(null, {username, password});
	  } else {
		  callback(`User ${username} wasn't verified`, {username, password});
	  }
  },

  getRoles: (username, callback) => {
	  let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
	  rolesOfUser.length ? callback(null, rolesOfUser) : callback(`User ${username} has no roles`);
  },

  logAccess: (username, rolesOfUser, callback) => {
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