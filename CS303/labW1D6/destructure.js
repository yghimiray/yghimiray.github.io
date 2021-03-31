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

/**
 * 
 * @param {string} givenDate a string of date in YYYY, MM,DD format.
 * @returns {string} a name of the day.
 */
function getWeekday(givenDate) {
  const date = new Date(givenDate);
  const day = date.getDay();
  if (day === 0) return "SU";
  if (day === 1) return "MO";
  if (day === 2) return "TU";
  if (day === 3) return "WE";
  if (day === 4) return "TH";
  if (day === 5) return "FR";
  if (day === 6) return "SA";
}

// console.log(getWeekday("2021,3,29"));


/**
 * 
 * @param {string} givenDate a string of date in YYYY, MM,DD format.
 * @returns {number} the day European day-number starting Mon=>1 and Sun=> 7;
 */
function getLocalDay(givenDate) {
  const date = new Date(givenDate);
  const day = date.getDay();
  if (day === 0) {
    return 7;
  } else {
    return day;
  }
}

/**
 * 
 * @param {*} givenDate a string of date in YYYY, MM,DD format.
 * @param {*} givenDays given days before the given date
 * @returns {number} the date before the given days.
 */
function getDateAgo(givenDate, givenDays) {
  const date = new Date(givenDate); // make a date object using Date constructor.
  const dateToNumber = date.getDate();// abstract the date from it.
  const dateAgotoNum = dateToNumber - givenDays; // deduct given days, gives a number
date.setDate(dateAgotoNum);// reconvert that number to date 
const newDate = date.getDate();
return newDate;
}

// console.log(getDateAgo((2021,3,29),0));

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}