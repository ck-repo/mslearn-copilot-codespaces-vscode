function skillsMember() {
  var skills = document.getElementById("skills");
  var skillsMember = document.getElementById("skillsMember");
  var skillsMember2 = document.getElementById("skillsMember2");
  var skillsMember3 = document.getElementById("skillsMember3");
  var skillsMember4 = document.getElementById("skillsMember4");

  if (skillsMember.style.display === "none") {
    skillsMember.style.display = "block";
    skillsMember2.style.display = "block";
    skillsMember3.style.display = "block";
    skillsMember4.style.display = "block";
    skills.style.height = "auto";
  } else {
    skillsMember.style.display = "none";
    skillsMember2.style.display = "none";
    skillsMember3.style.display = "none";
    skillsMember4.style.display = "none";
    skills.style.height = "100px";
  }
}