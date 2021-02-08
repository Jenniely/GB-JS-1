/* Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
если a и b положительные, вывести их разность;
если а и b отрицательные, вывести их произведение;
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом. */

function numbersPlay() {
    let result = document.getElementById('result_2-1');
    let a = ((Math.random() < 0.5) ? -1 : 1)*Math.floor(Math.random() * (1000 - 1)) + 1;
    let b = ((Math.random() < 0.5) ? -1 : 1)*Math.floor(Math.random() * (1000 - 1)) + 1;
    let res = 0;
    let operation = '';

    if (a >= 0 && b >= 0) {
        res = a - b;
        operation = 'разность';
    } else if (a < 0 && b < 0) {
        res = a * b;
        operation = 'произведение';
    } else {
        res = a + b;
        operation = 'сумма';
    }

    result.innerHTML = `${operation} чисел ${a} и ${b} равняется ${res}`;
}

/* Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15. */

function showNumbersWithSwitch() {

    let a = Math.floor(Math.random() * Math.floor(15));
    let arrOfNum = [];
    let result = document.getElementById('result_2-2');

    switch(a) {
        case 0: 
        arrOfNum.push(0);

        case 1: 
        arrOfNum.push(1);

        case 2: 
        arrOfNum.push(2);

        case 3: 
        arrOfNum.push(3);

        case 4: 
        arrOfNum.push(4);

        case 5: 
        arrOfNum.push(5);

        case 6: 
        arrOfNum.push(6);

        case 7: 
        arrOfNum.push(7);

        case 8: 
        arrOfNum.push(8);

        case 9: 
        arrOfNum.push(9);

        case 10: 
        arrOfNum.push(10);

        case 11: 
        arrOfNum.push(11);

        case 12: 
        arrOfNum.push(12);

        case 13: 
        arrOfNum.push(13);

        case 14: 
        arrOfNum.push(14);

        case 15: 
        arrOfNum.push(15);
    }
    
    result.innerHTML = arrOfNum.toString();

}

/* Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

function sumTwo(a,b) {
    return a + b;
}

function substractTwo(a,b) {
    return a - b;
}

function multiplyTwo(a,b) {
    return a * b;
}

function diviseTwo(a,b) {
    return a / b;
}

/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). */

function mathOperation(operation, a, b) {

    switch(operation) {

        case 'sum': 
        return sumTwo(a,b);

        case 'substract': 
        return substractTwo(a,b);

        case 'multiply': 
        return multiplyTwo(a,b);

        case 'divise': 
        return  diviseTwo(a,b);
    }
}

function callOperation(operation) {
    let result = document.getElementById('result_2-3');
    let a = ((Math.random() < 0.5) ? -1 : 1)*Math.floor(Math.random() * (1000 - 1)) + 1;
    let b = ((Math.random() < 0.5) ? -1 : 1)*Math.floor(Math.random() * (1000 - 1)) + 1;
    result.innerHTML = `${operation} result for ${a} and ${b} equals ${mathOperation(operation, a, b)}`
}

/* *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень. */

function power(val, pow) {

    if(pow === 1) {
        return val;
    } else {
        return val * power(val, pow -1 );
    }
}

function callPower() {

    let result = document.getElementById('result_2-4');
    let val = Math.floor(Math.random() * (100 - 1)) + 1;
    let pow = Math.floor(Math.random() * (10 - 1)) + 1;
    result.innerHTML = `${val} to the power of ${pow} equals ${ power(val, pow)}`;
}