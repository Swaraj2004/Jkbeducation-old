function preloader() {
  const loader = document.getElementById("preloader");
  document.body.style.overflow = "hidden";
  window.addEventListener("load", () => {
    loader.style.display = "none";
    document.body.style.overflow = "unset";
  });
}
preloader();

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

function incrementCount() {
  const counters = document.querySelectorAll("[data-count]");
  counters.forEach((counter) => {
    const updateCounter = () => {
      const count = +counter.getAttribute("data-count");
      const c = +counter.innerText;
      const increment = count / 500;
      if (c < count) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = `${count}`;
      }
    };
    updateCounter();
  });
}
setTimeout(incrementCount, 2000);

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
  const contactform = document.getElementById("contact-form");
  contactform.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(contactform);
    const formDataObj = {};
    formData.forEach((value, key) => (formDataObj[key] = value));
    // console.log(formDataObj);
    const formStatus = document.querySelector(
      "#contact-form > div:last-of-type"
    );
    const name = formDataObj.name;
    const phone = formDataObj.phone.toString();
    const email = formDataObj.email;
    const address = formDataObj.address;
    const purpose = formDataObj.purpose;
    if (!name || !phone || !email || !address || !purpose) {
      formStatus.style.color = "orangered";
      formStatus.innerText = "Please Fill the Form Properly";
      formStatus.style.display = "flex";
      return;
    } else {
      formStatus.style.color = "lime";
      formStatus.innerText = "Form Submitted";
      formStatus.style.display = "flex";
    }
    const fetchUrl = window.location.origin + "/contact";
    // console.log(fetchUrl);
    fetch(fetchUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formDataObj),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
submitContact();
