const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");

router.get("/", (req, res) => {
  res.render("home", {
    csspath: "/css/home.css",
    helpers: {},
  });
});

router.post("/contact", async (req, res) => {
  const data = req.body;
  const contact = await Contact.create({
    name: data.name,
    phone: data.phone,
    email: data.email,
    address: data.address,
    purpose: data.purpose,
  });
  console.log(contact);
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
            "https://jkbstaticservices2.s3.ap-south-1.amazonaws.com/videos/1st+Year+Programming.mp4",
        },
      });
      break;
    case "1st-year-programming":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "1st Year Engineering Programming",
        },
      });
      break;
    case "2nd-year-programming":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "2nd Year Engineering Programming",
        },
      });
      break;
    case "ms-in-us-and-europe":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "MS in US and Europe",
        },
      });
      break;
    case "3rd-year-programming":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "3rd Year Engineering Programming",
        },
      });
      break;
    case "project-and-placement":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "Projects & Placements",
        },
      });
      break;
    case "youth-empowerment-hub":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "Youth Empowerment Hub",
        },
      });
      break;
    case "financial-litracy":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "Financial Literacy",
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
