function saveAndGoToUserPage(user) {
  // store user as JSON string
  localStorage.setItem("loggedUser", JSON.stringify(user));
  // go to another page
  window.location.href = "user.html";
}
