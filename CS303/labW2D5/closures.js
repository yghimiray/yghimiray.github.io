"use strict"
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
// module.exports = {inArray, inBetween, byField, makeArmy }; //add all of your function names here that you need for the node mocha tests


/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
function inArray(arr) {
  return function(arg) {
    return arr.includes(arg);
  };
}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
function inBetween(low, high) {
  return function(item) {
    return item > low && item < high;
  };
}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
function byField(fieldName){
// return (user1, user2) =>  user1[fieldName] > user2[fieldName] ? 1 : -1 ;
let sortResult = function(user1, user2){
  if(user1[fieldName] > user2[fieldName]) return 1;
  if(user1[fieldName] === user2[fieldName]) return 0;
  if(user1[fieldName] < user2[fieldName]) return -1;
}
return sortResult;
}


/**
 * @returns {Function} closure that returns it's number
 */
function makeArmy() {

  }

  let army = makeArmy();
  
  //army[0](); // the shooter number 0 shows 10
  //army[5](); // and number 5 also outputs 10...