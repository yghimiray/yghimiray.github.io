"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { groupById, unique, filterRangeInPlace, filterRange, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Array} arr an array of numbers
 * @param {number} a the lower limit
 * @param {number} b the upper limit
 * @returns {Array} the filtered array
 */
function filterRange(arr, a, b) {
  const filterArr = arr.filter(item => item >= a && item <= b);
return filterArr;
  }

 /**
  * 
 * @param {Array} arr an array of numbers
 * @param {number} a the lower limit
 * @param {number} b the upper limit
 * @returns {Array} the filtered array
  */
  function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++){
      if(arr[i] < a || arr[i] > b){
        arr.splice(i,1);
      }
    }
    // arr.array.forEach(function(item,index) {
    //   if(item < a || item > b){
    //     arr.splice(index,1);
    //   }
    // });
  }

  /**
   * 
   * @param {Array} arr an array of any type
   * @returns {Array} a unique array
   */
  function unique(arr){
    let newArr = [];
    for(const element of arr){
      if(!newArr.includes(element)){
        newArr.push(element);
      }
    }
    return newArr;
  }


  /**
   * 
   * @param {Array} arr an array
   * @returns {object} an object
   */
  function groupById(arr){
return arr.reduce((obj,item) => {
  obj[item.id] = item;
  return obj;
},{});
  }


