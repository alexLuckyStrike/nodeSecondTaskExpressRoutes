const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();
const path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", (req, res) => {
  // res.send("<h1>Hello this is my first Page</h1>");
  res.sendFile(path.join(__dirname, "views", "startPage.html"));
});

router.get("/action", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "actionPage.html"));
});

router.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "formPage.html"));
});

router.post("/submit", (req, res) => {
  const { username, age } = req.body;
  console.log("Получено:", req.body); // { username: '...', age: '...' }

  res.send(`<h1>Привет, ${username}. Тебе ${age} лет.</h1>`);
});

app.use("/", router);
// app.use("/action", router);
// app.use("/form", router);

app.listen(1000);
