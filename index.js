'use strict';

const increase = document.getElementById("increase");
const reset = document.getElementById("reset");
const decrease = document.getElementById("decrease");
const counter = document.querySelector(".count");
let count = 0;

increase.addEventListener("click", function () {
    count++;
    counter.textContent = count;
});

decrease.addEventListener("click", function () {
    count--;
    counter.textContent = count;
})

reset.addEventListener("click", function () {
    count = 0;
    counter.textContent = count;
})