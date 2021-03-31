"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { doubleNums, doubleAges, filterEven, filterOver10, findEvenNum, findEvenAge}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr an array of numbers
 * @returns {Array} an array of doubled numbers.
 */
function doubleNums(arr) {
    return arr.map(num => num * 2);
}

/**
 * 
 * @param {Array} arr an array of objects
 * @returns {Array} an array of objects with doubled ages
 */
function doubleAges(arr) {
    return arr.map(obj => ({
        name: obj.name,
        age: obj.age * 2,
    }));
}

// /**
//  * 
//  * @param {number} num a number
//  * @returns {boolean} either even or not
//  */
// function isEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     return false;
// }

function filterEven(arr) {
    const even = arr.filter(item => item % 2 === 0);
    return even;

}


function filterOver10(arr) {
    return arr.filter(obj => obj.age > 10);
}

/**
 * 
 * @param {Array} arr an array of numbers
 * @returns {number} an even number
 */
function findEvenNum(arr) {
    return arr.find(num => num % 2 === 0);
}

function findEvenAge(arr) {
    return arr.find(obj => obj.age % 2 === 0 );
}

function includesEvenNum(arr) {

}

function includesEvenAge(arr) {

}