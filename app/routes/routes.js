const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", {
    csspath: "/css/home.css",
    helpers: {},
  });
});

router.get("/counselling-page", (req, res) => {
  res.render("counselling-page", {
    csspath: "/css/counselling-page.css",
    helpers: {},
  });
});

router.get("/predict-college", (req, res) => {
  res.render("predict-college", {
    csspath: "/css/predict-college.css",
    helpers: {},
  });
});

router.get("/courses/:title", (req, res) => {
  switch (req.params.title) {
    case "1st-year-engg-coaching":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "1st Year Engineering Coaching",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/Engg.+Admission+Counseling.mp4",
        },
      });
      break;
    case "1st-year-programming":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "1st Year Engineering Programming",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/1st+Year+Programming.mp4",
        },
      });
      break;
    case "2nd-year-programming":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "2nd Year Engineering Programming",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/2nd+year+programming.mp4",
        },
      });
      break;
    case "ms-in-us-and-europe":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "MS in US and Europe",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/MS+in+europe.mp4",
        },
      });
      break;
    case "3rd-year-programming":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "3rd Year Engineering Programming",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/3rd+Year+Programming.mp4",
        },
      });
      break;
    case "project-and-placement":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "Projects & Placements",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/Final+Year+Projects+and+Placements.mp4",
        },
      });
      break;
    case "youth-empowerment-hub":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "Youth Empowerment Hub",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/Youth+Empowerment.mp4",
        },
      });
      break;
    case "financial-litracy":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "Financial Literacy",
          vedio:
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/Financial+Literacy.mp4",
        },
      });
      break;
    default:
      res.status(404).send("<h1>Page not found on the server</h1>");
  }
});

router.get("/it-services", (req, res) => {
  res.render("it-services", {
    csspath: "/css/it-services.css",
    helpers: {},
  });
});

router.get("/about-us", (req, res) => {
  res.render("about-us", {
    csspath: "/css/about-us.css",
    helpers: {},
  });
});

module.exports = router;
