function menuToggle() {
  let menuArea = document.getElementById('menu-area')

  if(menuArea.style.transform == "translate(-40px, -51px)") {
    menuArea.style.transform = "translate(-347px, -52px)"; 
  } else {
    menuArea.style.transform = "translate(-40px, -51px)";
  }
}