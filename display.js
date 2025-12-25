var userText = localStorage.getItem("loggedUser");

if (userText !== null) {
  var user = JSON.parse(userText);

  document.getElementById("infoUsername").textContent = user.username;
  document.getElementById("infoAge").textContent = user.userage;
  document.getElementById("infoCity").textContent = user.usercity;
  document.getElementById("infoFather").textContent = user.fatherName;
  document.getElementById("infoMother").textContent = user.motherName;
  document.getElementById("infoProfession").textContent = user.profession;
} else {
  // if no user, go back to login
  window.location.href = "index.html";
}
