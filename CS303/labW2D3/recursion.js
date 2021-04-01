"use strict";

/* global */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = { sumTo, factorial, fibonacci, outputList, outputListLoop, list2Array, reverseList, reverseListLoop}; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} num a positive number
 * @returns {number} recursive sum
 */
function sumTo(num){
    if(num === 0){
        return 0;
    }
    return num + sumTo (num - 1);
}

// console.log(sumTo(5));


/**
 * 
 * @param {number} num a positive number
 * @returns {number} a factorial product
 */
function factorial(num){
if(num === 0){
    return 1;
}
return num * factorial(num - 1);
}


/**
 * 
 * @param {number} num a positive number
 * @returns {number} a fibonacci number
 */
function fibonacci(num){
    if(num === 0){
        return 0;
    }
    if(num === 1){
        return 1;
    }
    return fibonacci(num -1) + fibonacci(num - 2);
}


function outputList(list){
    
}