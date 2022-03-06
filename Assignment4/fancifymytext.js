function alertMe() {
  document.getElementById("FancifyText").style.fontSize = "4em";
}

function fancifyMyText() {
  if (document.getElementById("FancyShamncy").checked === true) {
    document.getElementById("FancifyText").style.fontWeight = "bold";
    document.getElementById("FancifyText").style.color = "blue";
    document.getElementById("FancifyText").style.textDecoration = "underline";
  } else {
    document.getElementById("FancifyText").style.fontWeight = "normal";
    document.getElementById("FancifyText").style.color = "black";
    document.getElementById("FancifyText").style.textDecoration = "none";
  }
}

function upperCaseMyText() {
  let upperCaseValue = document
    .getElementById("FancifyText")
    .value.toUpperCase();

  let periodPoints = upperCaseValue.split(".");

  document.getElementById("FancifyText").value = periodPoints.join("-MOO.");
}
