"use strict";
/* eslint-disable */

function calculate() {
    document.getElementById("Calc").onclick = CalcTips;
    
}

function CalcTips() {
    const subTotal = Number(document.getElementById("sub").value);
    const tipPercent = Number(document.getElementById("tip").value);
    document.getElementById("result").innerHTML = subTotal + subTotal * tipPercent /100 ;
}


window.onload = calculate;