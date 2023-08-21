require("dotenv").config();
const express = require("express");
const handlerBar = require("express-handlebars");
const mongoose = require("mongoose");
// const path = require("path");
const Contact = require("./contact");

const port = 3000;
const app = express();
app.use(express.static("public"));
app.use("/favicon.ico", express.static("images/favicon.ico"));
app.engine(".hbs", handlerBar.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI)
  .then((res) => {
    console.log("Connected to Database.");
  })
  .catch((err) => {
    console.log(err);
  });

async function run() {
  const contact = await Contact.create({
    name: "Swaj",
    phone: 9999999999,
    email: "swaj@mail.com",
    address: "Panvel",
    purpose: "message",
  });
  console.log(contact);
}
run();

app.get("/", (req, res) => {
  res.render("home", {
    csspath: "/css/home.css",
    helpers: {},
  });
});

app.get("/it-services", (req, res) => {
  res.render("it-services", {
    csspath: "/css/it-services.css",
    helpers: {},
  });
});

app.get("/about-us", (req, res) => {
  res.render("about-us", {
    csspath: "/css/about-us.css",
    helpers: {},
  });
});

app.get("/counselling-page", (req, res) => {
  res.render("counselling-page", {
    csspath: "/css/counselling-page.css",
    helpers: {},
  });
});

app.get("/predict-college", (req, res) => {
  res.render("predict-college", {
    csspath: "/css/predict-college.css",
    helpers: {},
  });
});

app.get("/courses/:title", (req, res) => {
  switch (req.params.title) {
    case "1st-year-engg-coaching":
      res.render("courses", {
        csspath: "/css/courses.css",
        helpers: {
          heading: "1st Year Engineering Coaching",
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

  // console.log(req.params);
});

app.listen(port, () => {
  console.log("Server connected to port", port);
});
