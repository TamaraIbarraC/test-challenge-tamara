// Imports small array of users
// Pretend it's an API request
const users = require("./data").default;

// Fetches all users
const getUsers = () => {
  return users;
};

// Filters users by specific ID
const getUser = (id) => {
  return new Promise((resolve, reject) => {
  const user = users.find((user) => user.id === id);
  if (user) {
    resolve(user);
  } else {
    reject(new Error("User not found"));
  }
});
};


// test
// console.log(getUser(3));

module.exports = { getUsers, getUser };

