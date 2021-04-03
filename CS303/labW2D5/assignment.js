"use strict";

function makeCounter(){
    let count = 0;
    // let count1 = count++;
    return function(){
        return count++;
    };
}

let counter = makeCounter();
let counter1 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter1());
console.log(counter());


// console.log(makeCounter()());

// function makeCounter(){
//     let count = 0;
//     // return function(){
//         return count++;
//     // };
// }

// let counter = makeCounter();
// let counter1 = makeCounter();
// console.log(counter);
// console.log(counter);
// console.log(counter);
// console.log(counter1);
// console.log(counter);