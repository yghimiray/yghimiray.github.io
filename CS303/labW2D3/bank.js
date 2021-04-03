"use strict";


const bank = {
    transactionDB: [],
};

bank.transactionDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
];

bank.checkId = function (id) {
    const foundCustmr = bank.transactionDB.find(customer => customer.custID === id);
    return foundCustmr;
};

bank.getBalance = function (id) {
    const customer = this.checkId(id);
    const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
    return balance;
};

bank.saveTransaction = function (id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
};

bank.debit = function (id, amount) {
    let balance = this.getBalance(id);
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else if (amount > balance) {
        console.log("Insufficient balance. Please try again !");
    } else {
        amount = amount * -1;
        this.saveTransaction(id, amount);
    }
};


bank.credit = function (id, amount) {
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else {
        this.saveTransaction(id, amount);
    }
};

bank.getTotalBalance = function () {
    const custArr = this.transactionDB;
    let sum = 0;
    for (const customer of custArr) {
        const id = customer.custID;
        const custBalance = this.getBalance(id);
        sum += custBalance;
    }
    return sum;
};

console.log(bank.getTotalBalance());

// bank.debit(2, 10);
// console.log(bank.transactionDB[1]);



