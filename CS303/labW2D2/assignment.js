"use strict";

/* Q2. Write your own version of Array.map. Write a function, myMap(arr, fun) that takes an array and
a function as arguments and returns a new array that is formed by applying the function to each
element of the array and saving the result in the new array. Do not use the Array.map method in
your code.
*/

/**
 * 
 * @param {Array} arr an array of any type. 
 * @param {Object} fun a function that converts each element of given array.
 * @returns {Array} the revised array.
 */
function myMap(arr, fun) {
    let newArr = [];
    for (const element of arr) {
        let revisedElem = fun(element);
        newArr.push(revisedElem);
    }
    return newArr;
}

// function fun(num){
//     return num * 5;
// }

// const array = [1,2,3,4,5];
// console.log(myMap(array,fun));


/* Q3. Do the same for Array.filter and Array.reduce.
*/

/** * 
 * @param {Array} arr an array of any type. 
 * @param {Object} fun a function that converts each element of given array.
 * @returns {Array} the revised array.
 */
function myFilter(arr, fun) {
    let newArr = [];
    for (const element of arr) {
        if (fun(element)) {
            newArr.push(element);
        }
    }
    return newArr;
}

// function fun(num){
//     return num % 2===0;
// }

// const array = [1,2,3,4,5];
// console.log(myFilter(array,fun));


/**
 * 
 * @param {Array} arr an array of any type. 
 * @param {Object} fun a function that converts each element of given array.
 * @returns {Array} the revised array.
 */
 function myReduce(arr, fun) {
    let result = fun(arr);
    return result;
}

// function fun(arr){
// let sum = 0;
// for(const element of arr){
//     sum += element;
// }
// return sum;
// }

// const array = [1,2,3,4,5];
// console.log(myReduce(array,fun));


/* Q4. Write your own version of the main Mocha functions:
a. assert.strictEqual
b. assert.deepEqual
c. it
d. describe
There should be a heading logged with the string from the describe and then each ‘it’ test.
There should be a text message if the ‘it’ test succeeds or if there is a failure and what were the
actual and expected values if they are different.
*/

/*
describe ("heading text", function(){
beforeEach(function(){
    array = [1,2,3,4,5,6];
});

it("heading if the test succeeded", function(){
    assert.strictEqual(givenFunction(array), expected result);
    assert.deepEqual(givenFunction(array), expected result);
});

});

*/
