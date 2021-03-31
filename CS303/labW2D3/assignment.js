"use strict";

/**
 * 
 * @param {string} str any string
 * @param {string} letter a letter
 * @returns {number} a number
 */
function countInstances(str,letter){
    if(str === ""){
        return 0;
    } 

    if(str[0] === letter){
        return 1 + countInstances(str.substr(1),letter);
    }else {
        return countInstances(str.substr(1),letter);
    }
}

console.log(countInstances("abanana","a"));



const arr = [1,2,3,4,5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr, cbk){
let newArr = [];
for(const element of arr){
    const revisedElem = cbk(element);
    newArr.push(revisedElem);
}
return newArr;
}



const dblFun = num => num * 2;
const squareFun = num => num * num;

console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

console.log("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
console.log("expect [1, 4, 9, 16, 25] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal){
let accum = arr[0];
for (let i = 1; i < arr.length; i++){
    accum = cbk(accum,arr[i]);
}
return accum;
}

const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;


console.log("expect: 15: ", arr.reduce(sumFun, 0));
console.log("expect: 15: ", myReduce(arr, sumFun, 0));

console.log("expect: 120: ", arr.reduce(mulFun, 1));
console.log("expect: 120: ", myReduce(arr, mulFun, 1));