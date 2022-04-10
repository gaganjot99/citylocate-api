const express = require("express");
const cors = require("cors");

const { readJsonFile, searchCity } = require("./src/city.js");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.get("/:city", (req, res) => {
  res.status(200).json({ data: searchCity(req.params.city) });
});

readJsonFile();
app.listen(PORT, () => {
  console.log("server is listening at 8080");
});
