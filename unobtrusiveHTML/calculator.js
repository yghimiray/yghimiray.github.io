"use strict";
/* eslint-disable */

function calculate() {
    document.getElementById("add").onclick = add;
    document.getElementById("subtract").onclick = subtract;
    document.getElementById("multiply").onclick = multiply;
}

function add() {
    const firstValue = Number(document.getElementById("fv").value);
    const secondValue = Number(document.getElementById("sv").value);
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


window.onload = calculate;