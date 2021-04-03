"use strict";

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer"
  };
  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern"
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHi() {
     const name = this.name;
     const age = this.age;
     const job = this.job;
     console.log ("Hello, my name is ",name,". I am ", age,".  My job is", job);
  }
  
  // add sayHi function to both objects
  manager.sayHi = sayHi;
  intern.sayHi = sayHi;
  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'
  