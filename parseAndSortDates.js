/*
**** Parse and Sort Date ****

Objective: Write a function that parses through an array of strings to determine if the date should be included in the output. The output should be sorted as instructed by the 3rd parameter.
  

Input: 
  - dataArray: array of strings (possible dates)
  - delim?: divider for y{delim}m{delim}d,
  - sort?: option(true = asce, ffalse = dec)
Output: an array of date object
Constraints: disreguard string if it does not conform or date is not valid
Edge cases: {
  dataArray:  
    - it is possible the string is not a date at all, return empty [] if undefined
    - date may not be valid (ie: January 32nd)
  delim: if null/undefined use '/'
  isAsc: if null/undefined or not a boolean, assume it is true (sort in assending order) 
}


**** Notes ****
- a valid date follows yyyy{delim}mm{delim}dd
- JavaScript Date object:
  - if we input Jan 32nd to date object our output is Feb 1st. So we need to validate date before we turn it into a date object
  - year 0 to 99 map to 1900 and 1999
  - JS date object range of year is from 100 to 275759
- Leap year (february has 29 insted of 28 days)

**** Method **** 
  - iterate over the dates
    - check if date is valid
      - split string at delim
      - turn each int number and validate
        - if valid, push to result
  - return sorted result according to isAsc 

Time complexity: O(n) + O(nlog(n))
Space complexity: O(n)


*/

const parseAndSortDates = (dataArray, delim, isAsc = true) => {
  if (!dataArray || !dataArray.length) return [];
  // check delim and isAsc
  delim = delim || '/'
  if (typeof isAsc !== 'boolean') isAsc = true;

  // validate date
  const validDates = getValidDates(dataArray, delim);

  // sort and return
  return sortDate(validDates, isAsc);

}

// check if the date string is a valid date. returns an array of valid date object.
const getValidDates = (dataArray, delim) => {
  const validDates = [];

  // iterate over dates
  for (let e of dataArray) {
    // split date string at delim -- if the split date does not have length of 3, the string is not in the correct format
    const splitE = e.split(delim);
    if (splitE.length === 3) {
      // validate date
      const year = +splitE[0];
      const month = +splitE[1];
      const day = +splitE[2];
      
      if (isValidYear(year) && isValidMonth(month) && isValidDay(year, month, day)) {
        // JS date object month is indexed
        const indexedMonth = month - 1;
        
        const dateObj = new Date(year, indexedMonth, day);
        
        validDates.push(dateObj);
      }
    }
  }
  return validDates;
}

// check if year is between 100 and 275759
  // only values in this rage will reflect the correct year with date object
const isValidYear = (year) => {
  const MIN_YEAR = 100;
  const MAX_YEAR = 275759;
  return year >= MIN_YEAR && year <= MAX_YEAR;
}

// check that input month is between 1st - 12th month
const isValidMonth = (month) => {
  const MIN_MONTH = 1;
  const MAX_MONTH = 12;
  return month >= MIN_MONTH && month <= MAX_MONTH;
}

// check that our day does not exceed the max ammount of days in the specific month
const isValidDay = (year, month, day) => {
  // on leap year, max February day is 29 instead of 28
  const feb = isLeapYear(year) ? 29 : 28
  const maxDaysInMonth = [null, 31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  return day >= 1 && day <= maxDaysInMonth[month];
}

// check if a year is leap year
const isLeapYear = (year) => {
  // is divisible by 4
    // but not divisible by 100
  // is divisible by 400
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

// this function sorts a date
const sortDate = (dates, isAsc) => {
  dates.sort((a, b) => {
    const yearA = a.getFullYear();
    const yearB = b.getFullYear();
    const monthA = a.getMonth();
    const monthB = b.getMonth();
    const dayA = a.getDate();
    const dayB = b.getDate();
    // order of operation: year > month > day
    if (isAsc) {
      // isAsc === true: sort in ascending order
      if (yearA !== yearB) return yearA > yearB ? 1 : -1;
      else if (monthA !== monthB) return monthA > monthB ? 1 : -1;
      else return dayA > dayB ? 1 : -1;
    } else {
      // isAsc == false: sort in descending order
      if (yearA !== yearB) return yearA < yearB ? 1 : -1;
      else if (monthA !== monthB) return monthA < monthB ? 1 : -1;
      else return dayA < dayB ? 1 : -1;
    }
  })

  return dates;
}




/**** Test Cases ****/
const generalTest = (f, dataArray, delim, isAsc, msg) => {
  let result;
  if (isAsc === null || isAsc === undefined) result = f(dataArray, delim);
  else if (delim === null || delim === undefined) result = f(dataArray, null, isAsc);
  else result = f(dataArray, delim, isAsc)
  
  return `${msg} ${JSON.stringify(result)}`
}

// DateArray is empty or undefined
const testEmptyDates = (f, dataArray, delim, isAsc, expectValue) => {
  const resultEmpt = f(dataArray, delim, isAsc);
  const resultUnde = f(undefined, delim, isAsc);

  const compareEmpt = resultEmpt.length === expectValue.length;
  const compareUnde = resultUnde.length === expectValue.length;

  return `Test-0: Expect output to be empty array if input dateArray is empty or undefined. Both conditions are met -- ${compareEmpt && compareUnde}`
}
console.log(testEmptyDates(parseAndSortDates, [], '-', true, []));

// DateArray contains invalid date
let test1 = ['2021-01-32', '2021-01-31']
let msg1 = 'Test-1: Expect Jan 32nd to not exist, but Jan 31st to exit. Result -- '
console.log(generalTest(parseAndSortDates, test1, '-', true, msg1));

// Test for leap year
let test2 = ['2024/2/29', '2021/2/29'];
let msg2 = 'Test-2: Expect 2024/2/29(leap yr) to exist but 2021/2/29 to not exist. Result -- '
console.log(generalTest(parseAndSortDates, test2, '/', true, msg2));

// Sorts ascending when isAsc is not boolean and ignore invalid date strings
let test3 = ['2021/3/13', '1900/1/30', 'error', '2020-7~19', '1999/3/3', '2000/5/20'];
let msg3 = 'Test-3: Expect result to sort in ascending order. Result -- ';
console.log(generalTest(parseAndSortDates, test3, '/', 'false', msg3));

// Sorts decending correctly even when years and months are equal but different day
let test4 = ['2021/3/13', '2021/3/1', '2021/3/15', '2021/3/2'];
let msg4 = 'Test-4: Expect result to sort in descending order. Result -- ';
console.log(generalTest(parseAndSortDates, test4, '/', false, msg4));

// Extra example test cases
let test5 = ['99/1/1', '2o21/3/13','2034-2-3', '2037/7/11', '1870/3/27', 'test', 'test/log/wut', '1999/0/3','1999/1/3', '2020/3/'];
let msg5 = 'Test-5: Expected result [2037/7, 1999/1, 1870/3]. Result --'
console.log(generalTest(parseAndSortDates, test5, null, false, msg5))

let test6 = ['2021/01/02', '1990-02-03','2001-03-04', '1990~05~28','junk']
let msg6 = 'Test-6: Expected result [1990, 2001]. Result --'
console.log(generalTest(parseAndSortDates, test6, '-', true, msg6))

let test7 = ['2021/01/02', '1990-02-03','2001-03-04', '1990~05~28','junk']
let msg7 = 'Test-7: Expected result [2001, 1990]. Result --'
console.log(generalTest(parseAndSortDates, test7, '-', false, msg7))





/*
Possible areas of improvement:
- I can directly sort date object as I am pushing to result array. This could help with time complexity but will introduce a layer of complexity and more code.
  * I perfer using js.sort at the end for cleaner and more readable code.
- There are areas of the code where I can shorten, for example all the variable decoration in the date validation block of code
  * I chose not to because the code is more readable and easier to understand.
*/
