/*
1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по
            Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту,
            Tc – температура по Цельсию
*/
'use strict';
function tempTranslate() {

    let celcius = prompt('Enter temperature in Celcius');
    
    alert(` ${celcius} deg Celcius equals ${(9 / 5) * celcius + 32} deg Farenheit`);
};


function variableExchange() {
    let p = document.getElementById('result_2');
    let a = 10, b = 5;
    a += b;
    b = a - b;
    a = a - b;

    p.innerHTML = `a = ${a}, b = ${b}`;
    p.classList.add('success');
};

function variablePlay() {
    let p = document.getElementById('result_1');
    let admin = '';
    let name = 'Василий';
    admin = name;

    p.innerHTML = admin;
    p.classList.add('success');
};