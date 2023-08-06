let predictbtn = document.getElementById("predict-college");

predictbtn.addEventListener("click", function () {
  // console.log("Helllo");
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".predict-clg-div-popup").classList.add("show-pop-up");
});

let closebtn = document.querySelector("#cross");

closebtn.addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("showoverlay");
  //   document.querySelector("#shortlist-clg-names").innerHTML = "";
  document
    .querySelector(".predict-clg-div-popup")
    .classList.remove("show-pop-up");
});

document.querySelector("#fifth-row-btn").addEventListener("click", function () {
  // console.log("predict");
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".predict-clg-div-popup")
    .classList.remove("show-pop-up");

  // document.querySelector('.submission-form').classList.add('show-submit-form-pop-up');
  document.querySelector(".overlay").classList.add("showoverlay");
  document.querySelector(".shortlist-clg").classList.add("show-shortlist-clg");
});

document.getElementById("cross3").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(
    "#shortlist-clg-names"
  ).innerHTML = `<ul class="shortlist-clg-title" id="shortlist-clg-title-main">
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

// let closebtn1 = document.querySelector('#cross1');

// closebtn1.addEventListener('click',function(){
//     console.log('closing');
//     document.querySelector('.submission-form').classList.remove('show-submit-form-pop-up');
// })

//To show popup of college list
document
  .getElementById("list-of-college")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("showoverlay");
    document
      .querySelector(".college-list-div")
      .classList.add("show-college-list-div");
  });

document.getElementById("cross2").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document
    .querySelector(".college-list-div")
    .classList.remove("show-college-list-div");
});

//To show shorlist clg list
document
  .getElementById("search-clg-btn")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("showoverlay");
    document
      .querySelector(".college-list-div")
      .classList.remove("show-college-list-div");
    document.querySelector(".overlay").classList.add("showoverlay");
    document
      .querySelector(".shortlist-clg-new")
      .classList.add("show-shortlist-clg-new");
  });

document.getElementById("cross3-new").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("showoverlay");
  document.querySelector(
    "#shortlist-clg-names-new"
  ).innerHTML = `<ul class="shortlist-clg-title-new" id="shortlist-clg-title-new-main">
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
