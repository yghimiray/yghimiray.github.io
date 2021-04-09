
"use strict";

/* Fix the code below using an arrow function and then using bind
*/

let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    // showList: function() {
        // this.students.forEach(item=> console.log(this.title + ":" + item));
    // },

    showList(){
        this.students.forEach(function(item){
            console.log(this.title + ": " + item);
        }.bind(this));
    },

};


const stuList = function(arr){
    arr = this.students;
    arr.forEach(item=> console.log(this.title + ":" + item));
};

const showList = stuList.bind(group);

// showList();
group.showList();