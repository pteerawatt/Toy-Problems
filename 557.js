/*
Reverse Words in a string III

given a string s, reverse the order of char in a word. the words are seperated by whitespace
 */

// idea: write a helper fn to take a word and reverse the chars
// break s into arr of words
// loop over each word and call helper fn

var reverseWords = function (s) {
  const stringArr = s.split(' ');
  return stringArr.map((word) => reverseChar(word)).join(' ')
};

const reverseChar = (word) => {
  const wordArr = word.split('');
  let right = wordArr.length - 1;
  let left = 0;
  while (right > left) {
    [wordArr[left], wordArr[right]] = [wordArr[right], wordArr[left]];
    left++;
    right--;
  }
  return wordArr.join('')
}