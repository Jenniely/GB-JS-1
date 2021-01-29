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

