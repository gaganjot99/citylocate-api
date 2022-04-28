const express = require("express");
const cors = require("cors");
const { graph } = require("./src/graphql");

const { readJsonFile, searchCity } = require("./src/city.js");
const { search, start } = require("./src/autocomplete");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.use("/graphql", graph);

app.get("/autocomplete/:str", (req, res) => {
  const data = search(req.params.str);
  res.status(200).json({ data: data });
});

app.get("/:city", (req, res) => {
  const data = searchCity(req.params.city);
  if (data) {
    res.status(200).json({ data: data });
  } else {
    res.status(401).json({ message: "City not found" });
  }
});

readJsonFile();
app.listen(PORT, () => {
  console.log(`server is listening at ${PORT}`);
});
