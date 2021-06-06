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

// console.log(snoopy.__proto__);



/*Rewrite the following as a class.  Remember that classes do not allow local variables outside methods. 
Use the _ convention to indicate a property that should not be directly accessed. 
*/

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

class Counter {

    constructor(){
    this._count = 0;
    }

    up () {
      return ++this._count;
    }

    down () {
      return --this._count;
    }
  }

let counter = new Counter();

// console.log( counter.up() ); 
// console.log( counter.up() ); 
// console.log( counter.down() ); 


// class User {
// constructor(name) {
//     this.name = name;
//   }
  
//   sayHi () {
//     console.log(this.name);
//   }
// }
  

function User(name) {
    this.name = name;
  }
  
  User.prototype.sayHi = function() {
    // console.log(this.name);
  };
  
  let john = new User("John");
//   user.sayHi();
// console.log(User.__proto__);

  


function f2() {
  'use strict'; // see strict mode
  return this;
}

// console.log(f2() === undefined); // true