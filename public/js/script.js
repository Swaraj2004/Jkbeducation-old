const { json } = require("body-parser");

function showDropdown() {
  const dropdown = document.getElementById("dropdown");
  const arrow = document.querySelector("#courses > img");
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
  const menu = document.getElementById("menu");
  const body = document.querySelector("body");
  const overlay = document.getElementById("overlay");
  const cross = document.getElementById("cross-icon");
  const arrow = document.querySelector("#courses > img");
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
  const menu = document.getElementById("menu");
  const body = document.querySelector("body");
  const overlay = document.getElementById("overlay");
  const arrow = document.querySelector("#courses > img");
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
  const contactPopup = document.getElementById("contact-popup");
  const cross = document.getElementById("cross");
  const overlay = document.getElementById("overlay");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  overlay.style.display = "block";
  contactPopup.style.zIndex = 5;
  cross.onclick = () => {
    contactPopup.style.zIndex = -1;
    overlay.style.display = "none";
  };
}

function submitContact() {
  // const submitbtn = document.querySelector("#contact-form button");
  const contactform = document.getElementById("contact-form");

  const name = document.querySelector('[name="name"]').value;
  const phone = document.querySelector('[name="phone"]').value;
  const email = document.querySelector('[name="email"]').value;
  const address = document.querySelector('[name="address"]').value;
  const purpose = document.querySelector('[name="purpose"]').value;
  console.log(name);
  if (
    name === "" ||
    phone === "" ||
    email === "" ||
    address === "" ||
    purpose === ""
  ) {
    contactform.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    document.querySelector("#contact-form > div:last-of-type").style.display =
      "flex";
    console.log("working");
    return false;
  }
  const contactObj = {
    name,
    phone,
    email,
    address,
    purpose,
  };
  console.log(contactObj);
  fetch("http://127.0.0.1:3000/contact", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(contactObj),
  }).then((response) => {
    console.log(response);
  }) ||
    fetch("https://jkbeducation.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contactObj),
    }).then((response) => {
      console.log(response);
    });
}
