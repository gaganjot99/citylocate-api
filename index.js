const express = require("express");

const { readJsonFile, searchCity } = require("./src/city.js");

const PORT = 3000;
const app = express();

app.get("/:city", (req, res) => {
  res.send(searchCity(req.params.city));
});

readJsonFile();
app.listen(PORT, () => {
  console.log("server is listening at 3000");
});
