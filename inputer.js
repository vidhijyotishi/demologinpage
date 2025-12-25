function getLoginInput() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  return {
    username: username,
    password: password
  };
}
