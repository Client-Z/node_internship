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
  },

  getRoles: (username, callback) => {
    // TODO get roles array
  },

  logAccess: (username, callback) => {
    // TODO access if admin
  },
};

const verifyUser = function(username, password, callback) {
  dataBase.verifyUser(username, password, (error, userInfo) => {
    if (error) {
      callback(error)
    } else {
      dataBase.getRoles(username, (error, roles) => {
        if (error) {
          callback(error)
        } else {
          dataBase.logAccess(username, (error) => {
            if (error) {
              callback(error);
            } else {
              callback(null, userInfo, roles);
            }
          })
        }
      })
    }
  })
};

// TODO rewrite with promises
// TODO rewrite with async/await