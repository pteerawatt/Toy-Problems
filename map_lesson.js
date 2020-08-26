// ---------Section One---------

// // This function returns a string
// let smallDynomite = () => {
//   return 'Boom';
// };

// // This function returns the result of the callback function
// let outerFunct = (callback) => {
//   // returns the result of the invocation of the callback
//   return callback();
// };

// console.log('Should explode => ', outerFunct(/*TO_DO*/));





// ---------Section Two---------
// // GOAL: add 1 to every element in the array

// let values = [1, 2, 3];

// let mapArray = /*TO_DO*/.map((/*TO_DO*/, /*TO_DO*/, /*TO_DO*/) => {
//   /*TO_DO*/
// })

// console.log('Original values should stll be the same. Original values were [1, 2, 3] | Original values are now: ', values );

// console.log('Every value should be added by 1. Result should be [2, 3, 4] | Result: ', mapArray);





// ---------Section Three---------
// // GOAL: transfrom our collection to ['Kat - 0', 'Bob - 1', 'Kim - 2', 'Edgar - 3'] using map()

// let names = ['Kat', 'Bob', 'Kim', 'Edgar'];

// let namesWithNum = /*TO_DO*/;

// console.log(`Original names should stll be the same. Original names were ['Kat', 'Bob', 'Kim', 'Edgar'] | Original names are now: `, names );

// console.log(`Every name in the collection should be transformed. Result should be ['Kat - 0', 'Bob - 1', 'Kim - 2', 'Edgar - 3'] | Result: `, namesWithNum);





// ---------ExtraCredit---------

// // Complete map, a function that returns a new array that is the result of applying the input function to all of the elements in the original array.
// let arr = [1, 2, 3];

// let addOne = (x) => {
//   return x + 1;
// };

// let map = (originalArr, funct) => {
//   /*TO_DO*/
// };

// // test case
// let mapArray = map(arr, addOne);

// console.log('Original array should stll be the same. Original array was [1, 2, 3] | Original array is now: ', arr );

// console.log('Every element in the new array should be added by 1. Result should be [2, 3, 4] | Result: ', mapArray);
