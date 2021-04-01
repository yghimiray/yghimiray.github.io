"use strict";

/**
 * 
 * @param {string} str any string
 * @param {string} letter a letter
 * @returns {number} a number
 */
function countInstances(str, letter) {
    if (str === "") {
        return 0;
    }

    if (str[0] === letter) {
        return 1 + countInstances(str.substr(1), letter);
    } else {
        return countInstances(str.substr(1), letter);
    }
}

// console.log(countInstances("abanana", "a"));



const arr = [1, 2, 3, 4, 5];
/**
 * 
 * @param {Array} arr to be processed
 * @param {*} cbk to map the elements
 * @returns {Array} of mapped elements
 */
function myMap(arr, cbk) {
    let newArr = [];
    for (const element of arr) {
        const revisedElem = cbk(element);
        newArr.push(revisedElem);
    }
    return newArr;
}



const dblFun = num => num * 2;
const squareFun = num => num * num;

// console.log("expect [2, 4, 6,8,10] ", arr.map(dblFun));
// console.log("expect [2, 4, 6,8,10] ", myMap(arr, dblFun));

// console.log("expect [1, 4, 9, 16, 25] ", arr.map(squareFun));
// console.log("expect [1, 4, 9, 16, 25] ", myMap(arr, squareFun));

/**
 * 
 * @param {Array} arr to be processed
 * @param {Function} cbk callback
 * @param {*} initialVal value for the reduction
 * @returns {*} the reduction of the array
 * go through the array, call cbk with accumulator and element
 * return value of cbk becomes accumulator for next loop
 */
function myReduce(arr, cbk, initialVal) {
    let accum = initialVal;
    for (const element of arr) {
        accum = cbk(accum, element);
    }
    return accum;
}

const sumFun = (accum, val) => accum + val;
const mulFun = (accum, val) => accum * val;


// console.log("expect: 15: ", arr.reduce(sumFun, 0));
// console.log("expect: 15: ", myReduce(arr, sumFun, 0));

// console.log("expect: 120: ", arr.reduce(mulFun, 1));
// console.log("expect: 120: ", myReduce(arr, mulFun, 1));


/** * 
 * @param {Array} arr an array of any type. 
 * @param {Object} fun a function that converts each element of given array.
 * @returns {Array} the revised array.
 */
function myFind(arr, fun) {
    for (const element of arr) {
        if (fun(element)) {
            return element;
        }
        break;
    }
    // return newArr;
}

// function fun(num){
//     return num % 2===0;
// }

// const array = [1,2,3,4,5];
// console.log(myFind(array,fun));

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
    return balance
}

bank.saveTransaction = function (id, amount) {
    const customer = this.checkId(id);
    customer.custTrans.push(amount);
}

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
}


bank.credit = function (id, amount) {
    if (amount < 0) {
        console.log("Invalid amount. Please enter positive amount !");
    } else {
        this.saveTransaction(id, amount);
    }
}

bank.getTotalBalance = function () {
    const custArr = this.transactionDB;
    let sum = 0;
    for (const customer of custArr) {
        const id = customer.custID;
        const custBalance = this.getBalance(id);
        sum += custBalance;
    }
    return sum;
}

console.log(bank.totalBalance());

// bank.debit(2, 10);
// console.log(bank.transactionDB[1]);



