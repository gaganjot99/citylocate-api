const fs = require("fs");

let file;
let cities;

const readJFile = () => {
  file = fs.readFileSync("./src/citynames.json");
  let data = JSON.parse(file);
  cities = data.citynames;
};

class trieNode {
  constructor(char) {
    this.children = [];
    for (let i = 0; i < 26; i++) {
      this.children[i] = null;
    }
    this.isEndWord = false;
    this.char = char;
  }

  markAsLeaf() {
    this.isEndWord = true;
  }

  unmarkAsLeaf() {
    this.isEndWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new trieNode("");
  }
  getIndex(t) {
    return t.charCodeAt(0) - "a".charCodeAt(0);
  }
  insert(str) {
    if (str === null) {
      return;
    }
    str = str.toLowerCase();
    let currentNode = this.root;
    let index = 0;
    for (let level = 0; level < str.length; level++) {
      index = this.getIndex(str[level]);
      if (currentNode.children[index] == null) {
        currentNode.children[index] = new trieNode(str[level]);
        //console.log(String(str[level]) + " inserted");
      }
      currentNode = currentNode.children[index];
    }
    currentNode.markAsLeaf();
    console.log(str + " inserted");
  }

  find(node) {
    let word = "";
    for (let i = 0; i < 26; i++) {
      if (node.children[i] != null) {
        word = word + node.children[i].char;
        if (node.children[i].isEndWord) {
          word = word + ";";
          return word;
        }
        word = word + this.find(node.children[i]);
      }
    }
    return word;
  }

  search(key) {
    if (key == null) {
      return;
    }

    key = key.toLowerCase();
    let currentNode = this.root;
    let index = 0;

    for (let level = 0; level < key.length; level++) {
      index = this.getIndex(key[level]);
      if (currentNode.children[index] == null) {
        return [key];
      }
      currentNode = currentNode.children[index];
    }

    if (currentNode.isEndWord) {
      return [key];
    }
    let words = this.find(currentNode).split(";");
    for (let i = 0; i < Math.min(words.length, 5); i++) {
      words[i] = key + words[i];
    }
    return words;
  }
}

readJFile();
let data = new Trie();
for (let i = 0; i < cities.length; i++) {
  data.insert(cities[i]);
}
const search = (key) => {
  return data.search(key);
};

module.exports = { search };
