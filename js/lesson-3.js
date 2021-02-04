//1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function whileNumPrint() {
    let res = document.getElementById('result-3-1');
    let str = '';
    let i = 0;
    while (i <= 100) {
        if (isPrime(i)) {
            str += i + ' ';
        }
        i++;
    }
    res.innerHTML = str;
}

/* 2. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
                a) Организовать такой массив для хранения товаров в корзине;
                b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

let cart = [{
        name: 'item1',
        price: 100
    },
    {
        name: 'item2',
        price: 200
    },
    {
        name: 'item3',
        price: 300
    },
    {
        name: 'item4',
        price: 400
    }
];

function countBasketPrice() {
    let res = document.getElementById('result-3-2');
    let total = 0;
    for (item of cart) {
        total += item.price;
    }
    res.innerHTML = `Total price: ${total}`;
}

/* 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for(…){ здесь пусто} */

function forNumPrint() {
    let res = document.getElementById('result-3-3');
    let str = '';
    for (i = 0; i <= 9; str += i + ' ', i++) {

    };

    res.innerHTML = str;
}

/* *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5: */
function drawPyramid() {
    let res = document.getElementById('result-3-4');
    let x = '';
    for (i = 0; i < 20; i++) {
        x += 'x';
        console.log(x);
    }
    res.innerHTML = 'see console';
}