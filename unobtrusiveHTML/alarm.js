"use strict";
/* eslint-disable */

function startTimer() {
    document.getElementById("go").onclick = startSeconds;
}

function startSeconds() {
    // const seconds = Number(document.getElementById("sec").value);
    setInterval(resetSeconds, 1000);
}

function startMinutes() {
    const minutes = Number(document.getElementById("min").value);
    if(minutes>0){
        document.getElementById("min").value = minutes - 1;
        return 1;
    }else{
        return 0;
    }
}

function resetSeconds() {
    const seconds = Number(document.getElementById("sec").value);
    while (seconds > 0) {
        document.getElementById("sec").value = seconds - 1;
        seconds--;
    }
    // const borrowMinutes = startMinutes();
    // seconds = borrowMinutes * 60;
    // if(seconds > 0){
    //    resetSeconds();
    // }
    setTimeout(colorAlarm, 200);
}

function colorAlarm() {
    document.body.style.backgroundColor = "rgba(0,255,0)";

}

window.onload = startTimer;