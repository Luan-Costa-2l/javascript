var opened = false;

function menuToggle() {
  if (opened) {
    document.getElementById("menu").style.left = "-65vw";

    opened = false;
  } else {
    document.getElementById("menu").style.left = "0";

    opened = true;
  }
}
