"use strict";

function printTimer(start, end){
    const timer = setInterval(function(){
        console.log(start);
        if(start === end){
            clearInterval(timer);
        }
        start++;
    },1000);
}

// printTimer(5,10);




/*Recall the bank question from the first exam. The transactionsDB is publicly accessible to any
code that has access to the bank object. Write a makeBank function that will encapsulate and
return the bank object. Make the transactionsDB private by making it a local variable in the
makeBank function instead of a property on the bank object.
*/

function makeBank(){
    const transDB = [];
    const bankObj ={
        transactionDB : transDB,
    };
    return bankObj;
}



const custmr1 = { customerId: 1, customerTransactions: [10, 50, -40] };
const custmr2 = { customerId: 2, customerTransactions: [10, 10, -10] };
const custmr3 = { customerId: 3, customerTransactions: [5, -5, 55] };

const bank = makeBank();

bank.transactionDB.push(custmr1);
bank.transactionDB.push(custmr2);
console.log(bank.transactionDB);
