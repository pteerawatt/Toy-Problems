/*
Sum of string

given two strings representing two numbers. return the product of adding the numbers from the end to the front at every element. if the number doesn't exist just return the other number

example: n1 = '11', n2 = '9'
output: '110'


idea: have two pointers from the end of both string. use a while loop to iterate to the front and modify the string
*/

const sumOfString = (n, m) => {
  let str = '';
  let nIdx = n.length - 1;
  let mIdx = m.length - 1;

  while (nIdx >= 0 && mIdx >= 0) {
    let sum = +n[nIdx--] + +m[mIdx--];
    str = `${sum}${str}`;
  }

  // concat the leftover if theres any
  if (nIdx >= 0) str = n.slice(0, nIdx + 1) + str;
  if (mIdx >= 0) str = m.slice(0, mIdx + 1) + str;

  return str;
}

console.log(sumOfString('11', '9') + 'i');