'use strict';

//Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).

function variablePlay() {
    let p = document.getElementById('result');
    let admin = '';
    let name = 'Василий';
    admin = name;

    p.innerHTML = admin;
};