
"use strict";

/* Fix the code below using an arrow function and then using bind
*/

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    // showList: function() {
    //     this.students.forEach(student=> console.log(this.title + ":" + student));
    // },
};


const stuList = function(arr){
    arr = this.students;
    arr.forEach(student=> console.log(this.title + ":" + student));
}

const showList = stuList.bind(group);

showList();
// group.showList();