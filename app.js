const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello this is my first Page</h1>");
});

app.use("/", router);

app.listen(1000);
