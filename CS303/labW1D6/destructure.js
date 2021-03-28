"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
//module.exports = { topSalary, getDateAgo }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {Object} salaries an object of names and salaries
 * @returns {object} a name of highest paid person
 */
function topSalary(salaries) {
  let max = 0;
  let person = null;
  for (const [key, value] of Object.entries(salaries)) {
    if (value > max) {
      max = value;
      person = key;
    }
  }
  return person;
}







function getDateAgo(date, days) {

}