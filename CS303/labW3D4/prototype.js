"use strict";

let head = {
    glasses: 1
};
let table = {
    pen: 3,
    __proto__: head
};
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
let pockets = {
    money: 2000,
    __proto__: bed
};

// table.__proto__ = head;
// bed.__proto__ = table;
// pockets.__proto__ = bed;



// console.log("expect 3: ", pockets.pen);
// console.log("expect 1: ", bed.glasses);


let animal = { eats: true };
function Rabbit(name) { 
    this.name = name;
}
Rabbit.prototype = animal;
// let rabbit = new Rabbit("White Rabbit");
// console.log( rabbit.eats ); // true

/* //rewrite this to have the same inheritance hierarchy using __proto__ instead of the
constructor . I.e., delete the Rabbit prototype and use only object literals and __proto__
*/
let rabbit = {
    name : "White Rabbit",
    __proto__ : animal,
};
console.log( rabbit.eats ); // true
