"use strict";
/* eslint-disable */

// called when page loads; sets up event handlers

function pageLoad() {
    document.getElementById("ok").onclick = okayClick;
}

function okayClick() {
    const okButton = document.getElementById("ok");
    alert(" You clicked ok!!");
    okButton.className = "fancy";
    setTimeout(reset,3000);
}

function reset(){
    const okButton = document.getElementById("ok");
    okButton.className = "";
}

window.onload = pageLoad; // onload is a browser event