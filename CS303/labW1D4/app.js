"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests



function ucFirst(str) {
  if(str === ""){
    return "";
  }
  let str1;
  let firstLetter = str[0];
  firstLetter = firstLetter.toUpperCase();
return firstLetter+str.substr(1);
  }

  // console.log(ucFirst("john"));
  // console.log(ucFirst(""));

  function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes("viagra")|| lowerStr.includes("xxx");
   
}

  

  function truncate(str, maxlength) {

  }




/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {


}


function camelize(str) {

  }
