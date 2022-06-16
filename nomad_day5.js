const h1 = document.querySelector("h1");
h1.style.color = "white";

document.body.style.backgroundColor = "black";

function windowResizeChangeColor() {
  if (window.innerWidth <= 500) {
    document.body.style.backgroundColor = "#2C8CD3";
  } else if (window.innerWidth > 500 && window.innerWidth <= 700) {
    document.body.style.backgroundColor = "#914EAC";
  } else {
    document.body.style.backgroundColor = "#EEBC12";
  }
}

window.addEventListener("resize", windowResizeChangeColor);