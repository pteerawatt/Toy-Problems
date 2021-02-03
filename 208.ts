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

  }

  search(word: string): boolean {

  }

  startsWith(prefix: string): boolean {

  }
}

class Node {
  constructor(val) {
      this.val = val,
      this.child = {},
      this.end = false
  }
}