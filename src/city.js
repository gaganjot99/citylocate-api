const fs = require("fs");

let file;
let cities;

const readJsonFile = () => {
  file = fs.readFileSync("./src/cities.json");
  cities = JSON.parse(file);
  console.log(cities);
};

const searchCity = (name) => {
  return cities[name];
};

module.exports = { readJsonFile, searchCity };
