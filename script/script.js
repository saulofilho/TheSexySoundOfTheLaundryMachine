'use strict';

let machineDiv = document.createElement("div");
    machineDiv.innerHTML = "teste";
    machineDiv.style.marginLeft = "2rem";
    machineDiv.style.color = "red";

let machineImg = document.createElement("img");
    machineImg.innerText = "img";
    machineImg.style.color = "blue";


let body = document.body;

window.addEventListener("load", function(e) {
    body.appendChild(machineDiv);
    body.appendChild(machineImg);
});
