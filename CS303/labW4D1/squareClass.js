"use strict";

const area = function(){
    return this.side * this.side;
};

const square = {
    side : 5,
};

// const abcd = area.bind(square);
// console.log(abcd());


const numArr = [55,4,11,3];
const maxNum = numArr.reduce((max,item)=> Math.max(max,item));
// console.log(maxNum);

let animal = {
    eats : true
};

const snoopy = {
    name : "Snoopy",
    __proto__ : animal
};

console.log(snoopy.__proto__);