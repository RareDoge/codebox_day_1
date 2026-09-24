const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam" },
];

function getUsers() {
  return users;
}

function findUserById(id) {
  return users.find((user) => user.id === Number(id));
}

function addUser(newUser) {
  console.log(newUser)
  users.push(newUser)
  return users
}


module.exports = { getUsers, findUserById, addUser };