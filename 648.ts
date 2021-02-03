// replace words

// given a list of words (dictionary) and a sentence. if any of the words in the sentence starts with a word in the dictionary, replace it with the dictionary word. if many dictionary words match, replace it with the shotest one.

// idea: put dictionary word in a trie.
  // each node has a length count.
// iterate over the sentence and replace words

// this is brute force way of doing it
// faster than 25% of solutions
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
