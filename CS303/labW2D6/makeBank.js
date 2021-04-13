"use strict";

/*Recall the bank question from the first exam. The transactionsDB is publicly accessible to any
code that has access to the bank object. Write a makeBank function that will encapsulate and
return the bank object. Make the transactionsDB private by making it a local variable in the
makeBank function instead of a property on the bank object.
*/

/**
 * 
 * @returns {object} a bank object.
 */
function makeBank() {
    const transDB = [
    { custID: 1, custTrans: [10, 50, -40] }, // balance = 20
    { custID: 2, custTrans: [10, 10, -10] }, // balance = 10
    { custID: 3, custTrans: [5, -5, 55] }, // balance = 55
    ];

    const checkId = function (id) {
        const foundCustmr = transDB.find(customer => customer.custID === id);
        return foundCustmr;
    };

    const saveTransaction = function(id, amount) {
        const foundCustmr = transDB.find(customer => customer.custID === id);
        foundCustmr.custTrans.push(amount);
    };
    

    const bankObj = {
        // checkId : function (id) {
        //     const foundCustmr = transDB.find(customer => customer.custID === id);
        //     return foundCustmr;
        // },
        getBalance : function (id) {
            const customer = checkId(id);
            const balance = customer.custTrans.reduce((sum, item) => sum + item, 0);
            return balance;
        },
        debit : function (id, amount) {
            let balance = this.getBalance(id);
            if (amount < 0) {
                console.log("Invalid amount. Please enter positive amount !");
            } else if (amount > balance) {
                console.log("Insufficient balance. Please try again !");
            } else {
                amount = amount * -1;
                saveTransaction(id, amount);
            }
        },
        credit : function (id, amount) {
            if (amount < 0) {
                console.log("Invalid amount. Please enter positive amount !");
            } else {
                saveTransaction(id, amount);
            }
        },
        getTotalBalance : function () {
            let sum = 0;
            for (const customer of transDB) {
                const id = customer.custID;
                const custBalance = this.getBalance(id);
                sum += custBalance;
            }
            return sum;
        },
            };
    return bankObj;
}

// /**
//  * 
//  * @param {number} id a customer ID
//  * @param {number} amount a transaction amount
//  * @param {Array} arr an array
//  * @returns {undefined}
//  */
// function saveTransaction(id, amount,arr) {
//     const foundCustmr = arr.find(customer => customer.custID === id);
//     foundCustmr.custTrans.push(amount);
// }

// /**
//  * 
//  * @param {number} CustId a customer ID number
//  * @param {Array} CustTrans an array of customer transactions
//  * @returns {object} a new customer
//  */
// function CreateCustmr(CustId, CustTrans){
//     const custmr = {
//         CustId : CustId,
//         CustTrans : CustTrans,
//     };
// return custmr;
// }

const bank = makeBank();
bank.debit(2,5);
bank.credit(2,20);
console.log(bank.getTotalBalance());