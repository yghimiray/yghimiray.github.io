"use strict";

module.exports = {maxOfThree,sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace,scoreExams};

/* Q1. Define a function maxOfThree() that takes three numbers as arguments and returns the
largest of them.
*/

/**
 * 
 * @param {number} first is a number
 * @param {number} second is a number 
 * @param {number} third is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(first, second, third) {
    let max = first;
    if (second > max) {
        max = second;
    }
    if (third > max) {
        max = third;
    }
    return max;
}

// console.log(maxOfThree(23,12,5));

/* Q2. Define a function sum() and a function multiply() that sums and multiplies (respectively)
all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and
multiply([1,2,3,4]) should return 24
*/

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let total = 0;
    for (const element of arr) {
        total += element;
    }
    return total;
}


// console.log(sum([1,2,3,4]));

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr) {
    let product = 1;
    for (const element of arr) {
        product *= element;
    }
    return product;
}

// console.log(multiply([1,2,3,4]));


/* Q3. Write a function findLongestWord() that takes an array of words and returns the length of
the longest one
*/

/**
 * 
 * @param {Array} arr an array of string
 * @returns {string} the longest string.
 */
function findLongestWord(arr) {
    let longest = arr[0].length;
    for (const element of arr) {
        if (element.length > longest) {
            longest = element.length;
        }
    }
    return longest;
}


// console.log(findLongestWord(["apple", "ball and bat", "cat", "dolphin", "elephant"]));

/* Q4. Reverse an Array
Arrays have a reverse method that changes the array by inverting the order in which its elements
appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first,
reverseArray, takes an array as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it
modifies the array given as argument by reversing its elements. Neither may use the standard reverse
method.
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
*/

/**
 * 
 * @param {Array} arr an array of any type
 * @returns {Array} an array with reversed elements.
 */
function reverseArray(arr) {
    let arr1 = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arr1.push(arr[i]);
    }
    return arr1;
}
// let arrayValue = [1, 2, 3, 4, 5];
// console.log(reverseArray(arrayValue));
// console.log(arrayValue);

/**
 * 
 * @param {Array} arr an array of any type. 
 * @returns {Array} the array completely reversed at source.
 */
function reverseArrayInPlace(arr) {
    let arrNew = reverseArray(arr);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arrNew[i];
    }
    return arr;
}

// console.log(reverseArrayInPlace(arrayValue));
// console.log(arrayValue);



/* Q5. Write a function, scoreExams, that takes an array of arrays of student answers and an array of
the correct answers. It should compare each student’s answers against the correct answers and
return an array holding the scores of each student. The score for each student is a count of the
number of correct answers (i.e., matches with the key of correct answers). For example
const studentAnswers = [[1, 1, 2], [2, 1, 2], [3, 1, 3]];
const correctAnswers = [3, 1, 2];
scoreExams(studentAnswers, correctAnswers)); --> [2, 2, 2]
*/

/**
 * 
 * @param {Array} stuAns an array of answers from different students
 * @param {Array} CorrectAns an array of correct answers
 * @returns {Array} an array of marks obtained.
 */
function scoreExams(stuAns, CorrectAns) {
    let scoreArr = [];
    for (const element of stuAns) {
        let count = 0;
        for (let j = 0; j < element.length; j++) {
            if (element[j] === CorrectAns[j]) {
                count++;
            }
        }
        scoreArr.push(count);
    }
    return scoreArr;
}

// const studentAnswers = [[3, 1, 2], [2, 1, 2], [3, 1, 3]];
// const correctAnswers = [3, 1, 2];
// console.log(scoreExams(studentAnswers,correctAnswers));