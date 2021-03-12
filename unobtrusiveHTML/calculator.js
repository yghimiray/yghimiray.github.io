"use strict";
/* eslint-disable */

function pageLoad(){
    const firstValue = Number(document.getElementById("fv").value);
    const secondValue = Number(document.getElementById("sv").value);
}

function add() {
    // const firstValue = Number(document.getElementById("fv").value);
    // const secondValue = Number(document.getElementById("sv").value);
    document.getElementById("result").innerHTML = firstValue + secondValue;
}

function subtract() {
    const firstValue = Number(document.getElementById("fv").value);
    const secondValue = Number(document.getElementById("sv").value);
    document.getElementById("result").innerHTML = firstValue - secondValue;
}

function multiply() {
    const firstValue = Number(document.getElementById("fv").value);
    const secondValue = Number(document.getElementById("sv").value);
    document.getElementById("result").innerHTML = firstValue * secondValue;
}

window.onload = pageLoad;