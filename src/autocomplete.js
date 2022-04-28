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
    this.children = {};
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
  insert(str) {
    let currentNode = this.root;
    for (let ch of str) {
      if (currentNode.children[ch] == null) {
        currentNode.children[ch] = new trieNode(ch);
        //console.log(String(ch) + " inserted");
      }
      currentNode = currentNode.children[ch];
    }
    currentNode.markAsLeaf();
    console.log(str + " inserted");
  }

  autocomplete(key) {
    var currentNode = this.root;
    var arr = [];
    for (let word of key) {
      currentNode = currentNode.children[word];
      //
      if (currentNode == null) {
        return arr;
      }
    }
    this.find(currentNode, arr, key.substring(0, key.length - 1));
    return arr;
  }

  find(node, arr, str) {
    if (node.isEndWord) {
      arr.push(str + node.char);
    }
    for (let child in node.children) {
      this.find(node.children[child], arr, str + node.char);
    }
  }
}

readJFile();
let data = new Trie();
for (let i = 0; i < cities.length; i++) {
  data.insert(cities[i]);
}
const search = (key) => {
  return data.autocomplete(key);
};

module.exports = { search };
