// replace words

// given a list of words (dictionary) and a sentence. if any of the words in the sentence starts with a word in the dictionary, replace it with the dictionary word. if many dictionary words match, replace it with the shotest one.

// idea: put dictionary word in a trie.
  // each node has a length count.
// iterate over the sentence and replace words




// this is brute force way of doing it
// no improvement in time complexity
function replaceWords(dictionary: string[], sentence: string): string {
  return sentence.split(" ").map((word) => {
      let replacement = null
      for (let dictWord of dictionary) {
          let length = dictWord.length
          let sample = word.slice(0, length)
          if (sample === dictWord) {
              if (replacement === null) replacement = dictWord;
              else replacement = replacement.length > dictWord.length ? dictWord : replacement 
          }
      }
      return replacement ? replacement : word;
  }).join(" ")
};


// using Trie
// barely improved in time complexity now at 25%

function replaceWords(dictionary: string[], sentence: string): string {
  let trie = new Trie();
  dictionary.forEach(word => {
      trie.insert(word);
  })
  
  return sentence.split(" ").map(word => {
      let searchResult = trie.search(word);
      return searchResult ? searchResult : word;
  }).join(" ");
};

class Trie {
  root: TrieNode;
  constructor() {
      this.root = new TrieNode("")
  }
  
  insert(word): void {
      // check current node if it already exist
          // if not add a new node
      let currentNode = this.root;
      for (let i = 0; i < word.length; i++) {
          if (!currentNode.children[word[i]]) {
              let newNode = new TrieNode(word[i]);
              currentNode.children[word[i]] = newNode;
          }
          currentNode = currentNode.children[word[i]];
          if (i === word.length - 1) currentNode.end = true;
      }
  }
  
  search(word): string | null {
      let currentNode = this.root;
      let result = ""
      for (let ch of word) {
          if (!currentNode.children[ch]) break;
          if (currentNode.children[ch].end) return result + ch;
          result += ch
          currentNode = currentNode.children[ch];
      }
      return null
  }
}

class TrieNode {
  val: string;
  end: boolean;
  children: object;
  constructor(val) {
      this.val = val;
      this.children = {}
      this.end = false;
  }
}