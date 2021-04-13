"use strict";
/* global Account require  */
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */





/**
 * A Bank savings Account class
 * 
 * Provides the basic functionality that every account should have
 */
 class SavingsAccount extends Account {
    /**
    * Constructor for creating a new Account object
    * 
    * @param {number} number the number for this account
    * @param {number} interest the interest rate for this account
    */
   constructor(number,interest) {
       super(number);
       this.interest = interest;
   }

/**
 * add the interest on the balance
 * @returns {undefined}
 */
  addInterest (){
      const intAmt = this._balance * this.interest/100;
    this._balance += intAmt;
  }

   /**
    * Accessor for the 'private' interest field
    * 
    * @returns {number} interest rate for this account
    */
   getInterest(){
       return this.interest;
   }

   /**
    * setter for the 'private' interest rate field
    * @param {number } newInterest a new interest rate
    * @returns {undefined} 
    */
    setInterest(newInterest){
       this.interest = newInterest;
   }

/**
    * @returns {string} representation of this account
    */
toString() {
   return "SavingsAccount"+ this._number + ": balance:" + this._balance + "interest:" + this.interest ;
}

/**
     * Performs needed actions at the end of the month
     * 
     * @returns {undefined}
     */
 endOfMonth() {
    return "Interest added SavingsAccount "+ this._number + ": balance: " + this._balance + "interest: " + this.interest; 
}

}





/* global exports */
exports.SavingsAccount = SavingsAccount;