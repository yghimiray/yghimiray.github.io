"use strict";
/* global Account  */

const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */

/**
 * A Bank Checking Account class
 * 
 * Provides the basic functionality that every account should have
 */
class CheckingAccount extends Account {
     /**
     * Constructor for creating a new Account object
     * 
     * @param {number} number the number for this account
     * @param {number} overdraft the OD limit for this account
     */
    constructor(number,overdraft) {
        super(number);
        this.overdraft = overdraft;
    }

    /**
 * Method to take money out of the account
 * 
 * @param {number} amount money to be taken out of the account
 * @returns {undefined}
 * @throws {RangeError} when amount is less than or equal to zero
 * @throws {Error} when the account has insufficient funds (balance)
 */
    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (amount > this._balance+this.overdraft) {
            throw Error("Insufficient funds");
        }
        this._balance -= amount;
    }

    /**
     * Accessor for the 'private' overdraft field
     * 
     * @returns {number} overdraft limit for this account
     */
    getOverdraft(){
        return this.overdraft;
    }

    /**
     * setter for the 'private' overdraft field
     * @param {number } newOverdraft a new OD limit
     * @returns {undefined} 
     */
     setOverdraft(newOverdraft){
        this.overdraft = newOverdraft;
    }

/**
     * @returns {string} representation of this account
     */
 toString() {
    return "CheckingAccount " + this._number + ": balance: " + this._balance + " overdraft limit: " + this.overdraft;
}

endOfMonth(){
    if(this._balance < 0){
        return "Warning, low balance CheckingAccount " + this._number +": balance: "+ this._balance+" overdraft limit: "+this.overdraft;
    }else {
        return "";
    }
}

}
















/* global exports */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.CheckingAccount = CheckingAccount;