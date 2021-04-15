"use strict";
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
const acc = require("./account.js");//with node need the name of your file with your functions here
const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
const chk = require("./checkingaccount.js");
const CheckingAccount = chk.CheckingAccount;
const sav = require("./savingsaccount.js");
const SavingsAccount = sav.SavingsAccount; 

class Bank {

    constructor(){
    this._accounts = [];
}

static nextNumber = 1;

addAccount(){
    this.number = Bank.nextNumber++;
    this._accounts.push(new Account(this.number));
}

addSavingsAccount(interest){
    this._number = Bank.nextNumber++;
    this._accounts.push(new SavingsAccount(this._number,interest));
}

addCheckingAccount(overdraft){
    this._number = Bank.nextNumber++;
    this._accounts.push(new CheckingAccount(this._number, overdraft));
}

closeAccount(number){
let foundIndex = this._accounts.findIndex(item => item.getNumber() === number);
this._accounts.splice(foundIndex,1);
// return foundIndex;
}
accountReport(){
    return this._accounts.reduce((report,item) => report + "\n " + item.toString() );
}
}


// const bank = new Bank();
// bank.addAccount();
// bank.addCheckingAccount();
// console.log(bank.accountReport());










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
exports.Bank = Bank;