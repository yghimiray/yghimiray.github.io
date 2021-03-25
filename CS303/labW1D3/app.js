"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
// module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} initialValue an initial number.
 * @param {number} increment a number that increases the initial number.
 * @returns {Accumulator} constructor function
 */
function Accumulator(initialValue, increment) {
   this.currentValue = initialValue;
   this.increment = increment;
   this.accumulate = function (){
      this.currentValue += increment;
      return this.currentValue;
   };
   this.report = function(){
      return this.currentValue;
   };

}

// const accumulator = new Accumulator(5,10);
// console.log(accumulator.currentValue);
// console.log(accumulator.increment);
// accumulator.accumulate();
// accumulator.accumulate();
// console.log(accumulator.currentValue);
// console.log(accumulator.increment);



/**
* @param {number} num1 a first number
* @param {number} num2 a second number
 * @returns {Calculator} this is a constructor function
 */
function Calculator() {
   this.firstNum = 2;
   this.secondNum = 3;
   this.setValues = function (num1, num2) {
      this.firstNum = num1;
      this.secondNum = num2;
   };
   this.sum = function(){
      return this.firstNum + this.secondNum;
   };
   this.mul = function(){
      return this.firstNum * this.secondNum;
   };
}

// let calc = new Calculator();
// calc.setValues(20,30);
// console.log(calc.sum());
// console.log(calc.mul());
// console.log(calc.firstNum);
