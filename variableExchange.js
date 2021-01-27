"use strict";

function variableExchange() {
    let p = document.getElementById('result_2');
    let a = 10, b = 5;
    a += b;
    b = a - b;
    a = a - b;

    p.innerHTML = `a = ${a}, b = ${b}`;
    p.classList.add('success');
};