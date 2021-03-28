"use strict";

let calculator = {
    value1: 0,
    value2: 0,
    getValues: function (num1, num2) {
        this.value1 = num1;
        this.value2 = num2;
    },
    sum: function () {
        return this.value1 + this.value2;
    },
    mult: function () {
        return this.value1 * this.value2;
    },
};



// const arr = [1,5,16,3,108];

/**
 * 
 * @param {number} num a number. 
 * @returns {boolean} whether even or not
 */
function isEven(num){
    if (num % 2 === 0){
        return true;
    }
    return false;
}

// console.log(arr.forEach(isEven));


// const number = [1,5,18,2,77,108];

// console.log(number.filter(isEven));
// console.log(number.find(isEven));
// console.log(number.findIndex(isEven));


let lengths = ["Bingo" , "Gandalf" , "Nazgul"].map(item => item.length);
// console.log (lengths);

let indexedLengths = ["Bingo" , "Gandalf" , "Nazgul"].map(
    function(item, index){
        const newItem = ""+ index + ":" + item.length;
        return newItem;
    }
);

// console.log (indexedLengths);


/**
 * 
 * @param {number} first a number
 * @param {number} second a number
 * @returns {number} in an order.
 */
function comparator(first, second){
   return first - second;
}

/**
 * 
 * @param {number} first a number
 * @param {number} second a number
 * @returns {number} in an order.
 */
 function DescendComparator(first, second){
     return second-first;
}


/**
 * 
 * @param {number} first a number
 * @param {number} second a number
 * @returns {string} in an order.
 */
 function DescendLexical(first, second){
    first = ""+first;
    second = ""+second;
    if(first < second) return 1;
    if(first == second) return 0;
    if(first > second) return -1;
    
}


// const arr = [1,5,16,3,108];
// arr.sort(comparator);
// console.log(arr);
// arr.sort(DescendComparator);
// console.log(arr);
// arr.sort(DescendLexical);
// console.log(arr);
// arr.sort((a,b) => a-b);
// console.log(arr);

// const arr = [-1,-2,-3,-4,-5];
// let result = arr.reduce((product,item) => product * item, 1);
// console.log(result);

// let maxResult = arr.reduce((max,item) => Math.max(max,item),0);// ignore initial value if all elements are negative
// console.log(maxResult);








