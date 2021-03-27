"use strict";


/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { ucFirst, getMaxSubSum, truncate , camelize}; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {string} str any string
 * @returns {string} a string with first letter capitalized.
 */
function ucFirst(str) {
  if (str === "") {
    return "";
  }
  let str1;
  let firstLetter = str[0];
  firstLetter = firstLetter.toUpperCase();
  return firstLetter + str.substr(1);
}

// console.log(ucFirst("john"));
// console.log(ucFirst(""));

/**
 * 
 * @param {string} str any string
 * @returns {boolean} is a spam or not.
 */
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes("viagra") || lowerStr.includes("xxx");
}


/**
 * 
 * @param {string} str any sentences or string
 * @param {number} maxlength max length where the string is to be truncated.
 * @returns {string} the truncated string.
 */
function truncate(str, maxlength) {
  if (str.length < maxlength) {
    return str;
  } else {
    return str.substr(0, maxlength - 1) + "…";
  }
}

// console.log(truncate("What I'd like to tell on this topic is:",20));


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray 
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (const element of arr) {
    partialSum += element;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}

/**
 * 
 * @param {string} str an amount with $ sign
 * @returns {number} an amount without $ sign.
 */
function extractCurrencyValue(str) {
  //   let strNew = "";
  //   let num;
  //   for(const letter of str){
  //     if(letter >= "0" || letter < = "9"){
  //       strNew += letter;
  //     }
  //   }
  // num = Number(strNew);
  // return num;

  return +(str.substr(1));
}

/**
 * 
 * @param {string} str any string 
 * @returns {string} a camelized string
 */
function camelize(str) {
  if(str==="") return "";
  const strArr = str.split("-");
  let strNew = strArr[0];
  for (let i = 1; i < strArr.length; i++){
   let capStr = ucFirst(strArr[i]);
    strNew += capStr;
  }
return strNew;
}

// console.log(camelize("-xyz-pqr-mno"));


