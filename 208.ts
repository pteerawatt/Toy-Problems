// Implement Trie (Prefix Tree)

// implement a trie with insert, search and startWith
// a trie is a type of tree data structure that stores a sequence of characters that can be checked later.

// insert - insert string to trie
// search - find if the word exist
// startwith - find if path exist

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

class Trie {
  constructor() {

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
      if (currentNode.child[word[0]]) {
        currentNode = currentNode.child[word[0]];
        word = word.substring(1);
      } else {
        let newNode = new trieNode(word[0]);
        currentNode.child[word[0]] = newNode;
        currentNode = currentNode.child[word[0]];
        word = word.substring(1);
      }
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

  }
}

class trieNode {
  val: string;
  child: object;
  end: boolean;
  constructor(val) {
    this.val = val,
      this.child = {},
      this.end = false
  }
}