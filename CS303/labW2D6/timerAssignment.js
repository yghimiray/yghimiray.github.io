"use strict";

function printTimer(start, end) {
    const timer = setInterval(function () {
        console.log(start);
        if (start === end) {
            clearInterval(timer);
        }
        start++;
    }, 1000);
}

// printTimer(5,10);




