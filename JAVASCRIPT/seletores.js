function teste() {
  document.getElementById("box1").style.backgroundColor = "blue";
  document.getElementById("box1").style.color = "white";
  document.getElementsByClassName("paragrafo")[0].style.backgroundColor =
    "blue";
  document.getElementsByClassName("paragrafo")[1].style.backgroundColor =
    "blue";
  document.getElementsByClassName("paragrafo")[2].style.backgroundColor =
    "blue";
}

function cancelar() {
  document.getElementById("box1").style.backgroundColor = "#8fbc8f";
  document.getElementById("box1").style.color = "black";
  document.getElementsByClassName("paragrafo")[0].style.backgroundColor =
    "#8fbc8f";
  document.getElementsByClassName("paragrafo")[1].style.backgroundColor =
    "#8fbc8f";
  document.getElementsByClassName("paragrafo")[2].style.backgroundColor =
    "#8fbc8f";
}
