const generateRandHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

class Matrice {
  constructor(size = 3) {
    this.nodeList = new Map();
    this.initMatrice(size);
  }
  initNode(letters, text = "", color = "") {
    this.nodeList.set(letters, { text, color });
  }
  initMatrice(squares) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

    for (let i = 0; i < squares; i++) {
      const letter1 = alphabet[i];

      for (let g = 0; g < 3; g++) {
        let letter2 = alphabet[g];
        let key = `${letter1}${letter2}`;
        this.initNode(key, "", `${generateRandHexColor()}`);
      }
    }
  }

  get nodes() {
    return this.nodeList;
  }

  setNodeValue(node, text, color) {
    this.nodeList.set(node, { text, color });
  }
}

module.exports = Matrice;
