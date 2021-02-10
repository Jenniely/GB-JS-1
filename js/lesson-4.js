/* Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект. */

function numToObj() {
    let obj = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
    };
    let num = Math.floor(Math.random() * 999);
    if (num > 999) {
        console.log('Number is too big');
        return {};
    };
    console.log(`Number is ${num}`);
    let arr = num.toString().split('').map(Number).reverse();
    obj['единицы'] = arr[0];
    if (arr[1]) {
        obj['десятки'] = arr[1];
    };
    if (arr[2]) {
        obj['сотни'] = arr[2];
    };
    return obj;
}

function callNumToObj() {
    let res = document.getElementById('result-4-1');
    res.innerHTML = 'see console';
    console.log(numToObj());
}
