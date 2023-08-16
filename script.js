// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade(s1, s2, s3) {
  const average = (s1 + s2 + s3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// Test cases
console.log(getGrade(90, 85, 95)); // Output: 'A'
console.log(getGrade(75, 80, 78)); // Output: 'C'
console.log(getGrade(55, 45, 50)); // Output: 'F'

//---------------------------------------------------------------------------------------------------------------

// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"
// Have fun!

function oddOrEven(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  if (sum % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

// Test cases
console.log(oddOrEven([0])); // Output: "even"
console.log(oddOrEven([0, 1, 4])); // Output: "odd"
console.log(oddOrEven([0, -1, -5])); // Output: "even"

//---------------------------------------------------------------------------------------------------------------

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
  return l.filter(item => typeof item === 'number');
}

console.log(filter_list([1, 2, 'a', 'b'])); // Output: [1,2]
console.log(filter_list([1, 'a', 'b', 0, 15])); // Output: [1,0,15]
console.log(filter_list([1, 2, 'aasf', '1', '123', 123])); // Output: [1,2,123]

//---------------------------------------------------------------------------------------------------------------
