const {usersList, rolesList} = require("./04-data");

const dataBase = {
	verifyUser: (username, password, callback) => {
	  let result = usersList.find(obj => obj.username === username);
	  if(result.password === password) {
		  callback(null, username);
	  } else {
		  callback(`User ${username} wasn't verified`, username);
	  }
  },

  getRoles: (username, callback) => {
	  let rolesOfUser = rolesList.filter(obj => obj.username === username).map(el => el.role);
	  rolesOfUser.length ? callback(null, rolesOfUser) : callback(`User ${username} has no roles`);
  },

  logAccess: (username, rolesOfUser, callback) => {
	  rolesOfUser.includes('admin') ? callback(null) : callback(`User ${username} hasn't 'admin' role`);
  },
};

const verifyUser = function(username, password, callback) {
  dataBase.verifyUser(username, password, (error, userInfo) => {
	  if (error) {
		  callback(error);
	  } else {
		  dataBase.getRoles(username, (error, roles) => {				
			  if (error) {
				  callback(error);
			  } else {
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