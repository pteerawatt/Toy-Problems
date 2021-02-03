class Trie {
  root: trieNode;
  constructor() {
    this.root = new trieNode("");
  }

  insert(word: string): void {
    // check to see if character already exist
    // if exist, progress fruther
    // if character does not exist
    // create a new node
    // add it to the tri
    // progress
    let currentNode = this.root;
    while (word.length >= 0) {
      if (word.length === 0) {
        currentNode.end = true;
        break;
      }
      if (!currentNode.child[word[0]]) {
        let newNode = new trieNode(word[0]);
        currentNode.child[word[0]] = newNode;
      }
      currentNode = currentNode.child[word[0]];
      word = word.substring(1);
    }
  }

  search(word: string): boolean {
    // iterate down the trie
    // once we are at the end, we check if there is an end here
    let currentNode = this.root;
    while (word.length >= 0) {
      // console.log(currentNode.val, currentNode.end)
      if (!word.length) return currentNode.end;
      if (currentNode.child[word[0]]) {
        currentNode = currentNode.child[word[0]];
        word = word.substring(1);
      } else return false;
    }
  }

  startsWith(prefix: string): boolean {
    // iterate down
    // once we finish we return true if the path is there
    let currentNode = this.root;
    while (prefix.length >= 0) {
      if (!prefix.length) return true
      if (currentNode.child[prefix[0]]) {
        currentNode = currentNode.child[prefix[0]];
        prefix = prefix.substring(1);
      } else return false;
    }
  }
}

class trieNode {
  val: string;
  child: object;
  end: boolean;
  constructor(val) {
    this.val = val || "",
      this.child = {},
      this.end = false
  }
}