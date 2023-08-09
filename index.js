//To show popup of college list by score
const predictCollegeBtn = document.getElementById("predict-college-btn");
predictCollegeBtn.addEventListener("click", function () {
  scrollTop();
  document.querySelector(".overlay").classList.add("showoverlay");
  document
    .querySelector(".predict-clg-popup")
    .classList.add("show-score-popup");
});

const closebtn1 = document.getElementById("cross1");
closebtn1.addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".predict-clg-popup")
    .classList.remove("show-score-popup");
});

const predictBtn = document.getElementById("predict-btn");
predictBtn.addEventListener("click", function () {
  disableScroll();
  scrollTop();
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".predict-clg-popup")
    .classList.remove("show-score-popup");
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".shortlist-clg").classList.add("show-shortlist-clg");
});

const closebtn3 = document.getElementById("cross3");
closebtn3.addEventListener("click", function () {
  enableScroll();
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(
    "#shortlist-clg-names"
  ).innerHTML = `<ul class="shortlist-clg-list" id="shortlist-clg-title">
  <li class="sr-no">Sr No.</li>
  <li class="college-code">Code</li>
  <li class="college-name">College Name</li>
  <li class="branch-name">Branch</li>
  <li class="fees-name">Fees</li>
  <li class="location">Location</li>
  <li class="score">Score</li>
</ul>`;
  document
    .querySelector(".shortlist-clg")
    .classList.remove("show-shortlist-clg");
});

//To show popup of college list by district
const listCollegeBtn = document.getElementById("list-of-college-btn");
listCollegeBtn.addEventListener("click", function () {
  scrollTop();
  document.querySelector(".overlay").classList.add("showoverlay");
  document
    .querySelector(".college-list-popup")
    .classList.add("show-college-list-popup");
});

const closebtn2 = document.getElementById("cross2");
closebtn2.addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".college-list-popup")
    .classList.remove("show-college-list-popup");
});

//To show shorlist clg list
const searchBtn = document.getElementById("search-clg-btn");
searchBtn.addEventListener("click", function () {
  disableScroll();
  scrollTop();
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".college-list-popup")
    .classList.remove("show-college-list-popup");
  document.querySelector(".overlay").classList.add("showoverlay");
  document
    .querySelector(".shortlist-clg-new")
    .classList.add("show-shortlist-clg-new");
});

const closebtn4 = document.getElementById("cross4");
closebtn4.addEventListener("click", function () {
  enableScroll();
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(
    "#shortlist-clg-names-new"
  ).innerHTML = `<ul class="shortlist-clg-list-new" id="shortlist-clg-title-new">
  <li class="srno">Sr No.</li>
  <li class="uni">University</li>
  <li class="locn">Location</li>
  <li class="clgcode">Code</li>
  <li class="cname">College Name</li>
  <li class="ctype">College Type</li>
  <li class="fees">Fees</li>
</ul>`;
  document
    .querySelector(".shortlist-clg-new")
    .classList.remove("show-shortlist-clg-new");
});

// let closebtn5 = document.querySelector('#cross5');
// closebtn5.addEventListener('click',function(){
//     document.querySelector('.submission-form').classList.remove('show-submit-form-pop-up');
// })

function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function disableScroll() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
}

function enableScroll() {
  const body = document.querySelector("body");
  body.style.overflow = "auto";
}
