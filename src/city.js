const fs = require("fs");

let file;
let cities;

const readJsonFile = () => {
  file = fs.readFileSync("./src/cities.json");
  cities = JSON.parse(file);
};

const searchCity = (name) => {
  console.log(cities[name]);
  return cities[name];
};

const addCity = (info) => {
  console.log(info);
  cities[info.name] = info.location;
  return cities[info.name];
};

module.exports = { readJsonFile, searchCity, addCity };
