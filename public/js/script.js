function showDropdown() {
  let dropdown = document.getElementById("dropdown");
  let arrow = document.querySelector("#courses > img");
  arrow.classList.toggle("rotatearrow");
  dropdown.classList.toggle("hidden");
  dropdown.classList.toggle("show");
  window.onclick = (e) => {
    hideMenu(e);
    if (!e.target.matches("#courses")) {
      if (!e.target.matches("#courses > img")) {
        arrow.classList.remove("rotatearrow");
        dropdown.classList.remove("show");
        dropdown.classList.add("hidden");
      }
    }
  };
}

function showMenu() {
  let menu = document.getElementById("menu");
  let body = document.querySelector("body");
  let overlay = document.getElementById("overlay");
  let cross = document.getElementById("cross-icon");
  let arrow = document.querySelector("#courses > img");
  menu.classList.toggle("hidemenu");
  menu.classList.toggle("showmenu");
  body.style.overflow = "hidden";
  overlay.style.display = "block";
  cross.onclick = () => {
    body.style.overflow = "auto";
    overlay.style.display = "none";
    menu.classList.toggle("hidemenu");
    menu.classList.toggle("showmenu");
  };
  window.onclick = (e) => {
    hideMenu(e);
  };
}

function hideMenu(e) {
  let menu = document.getElementById("menu");
  let body = document.querySelector("body");
  let overlay = document.getElementById("overlay");
  let arrow = document.querySelector("#courses > img");
  if (
    e.target.matches("#overlay") ||
    e.target.matches("#menu > li > a") ||
    e.target.matches("#dropdown a")
  ) {
    if (!e.target.matches("#courses")) {
      body.style.overflow = "auto";
      overlay.style.display = "none";
      menu.classList.toggle("hidemenu");
      menu.classList.toggle("showmenu");
    }
  }
}

function showContact() {
  let contactPopup = document.getElementById("contact-popup");
  let cross = document.getElementById("cross");
  let overlay = document.getElementById("overlay");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  overlay.style.display = "block";
  contactPopup.style.zIndex = 5;
  cross.onclick = () => {
    contactPopup.style.zIndex = -1;
    overlay.style.display = "none";
  };
}
