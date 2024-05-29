const express = require("express");
const handlerBar = require("express-handlebars");
const cors = require("cors");
// const path = require("path");
require("dotenv").config();
const routes = require("./app/routes/routes");
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static("public"));
app.use("/favicon.ico", express.static("images/favicon.ico"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.engine(".hbs", handlerBar.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", "./views");

app.use("/", routes);

app.listen(port, () => {
  console.log("Server connected to port", port);
});
