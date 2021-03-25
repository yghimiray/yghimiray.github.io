"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { Accumulator, Calculator }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @returns {Accumulator} constructor function
 */
function Accumulator() {
   //implement this

}



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
