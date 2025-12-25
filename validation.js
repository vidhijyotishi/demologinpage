function validateUser(loginData) {
  var i;
  for (i = 0; i < users.length; i++) {
    if (
      users[i].username === loginData.username &&
      users[i].userpassword === loginData.password
    ) {
      return users[i]; // return whole user object
    }
  }
  return null;
}
