//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

/* Игра полностью переписана, т.к. мне захотелось поменять структуру хранения данных и оптимизировать выдачу вопросов. */

//Инициализация. State хранит текущий путь игрока, чтобы правильно выдавать следующий инстанс. i - счетчик итераций. 

function gameStart() {
    let state = '0';
    let warning = ' \n (Наберите -1 для выхода из игры)\n ';
    let i = 1;
    let ok = false;

    do {
        //проверка на отказ от игры
        if (state === '-1') {
            alert('Вы вышли из игры');
            break;
        }
        //вызов вопроса
        state = askQuestion(state);
        i++;
    } while (state.length <= 4)

    function askQuestion(state) {
        ok = false;
        //проверка на окончание пути
        if (state.length === 4) {
            console.log(`iteration ${i}, results`);
            let obj = sources.find((item) => item.id === parseInt(state));
            alert(`Игра окончена. ${obj.q}`);
            return state += 5;
        }
        console.log(`iteration ${i}, state ${state}`);
        let obj = sources.find((item) => item.id === parseInt(state));
        //запрос ответа и проверка на соответствие параметрам
        do {
            let input = +prompt(`${obj.q} Варианты: ${obj.a1} ${obj.a2} ${warning}`);
            if (input === -1) {
                return state = '-1';
            }
            ok = checkChoices(input, obj.opt);
            //регистрация ответов для будущей проверки
            if (ok) {
                obj.res = input;
                obj.used = i;
                return state += input;
            }
        } while (!ok);
    }

    function checkChoices(input, opt) {
        if (isNaN(input) || !isFinite(input)) {
            alert('Принимаются только цифры');
            return false;
        } else if (input < 1 || input > opt) {
            alert('Ваше число выходит из допустимого диапазона');
            return false;
        }
        return true;
    }

    function whatAnswer() {
        ok = false;
        if ((parseInt(state) === -1)) {
            return
        }
        do {
            let num = +prompt('Введите номер хода для проверки (от 1 до 3)');
            ok = checkChoices(num, 3);
            let obj = sources.find((item) => item.used === num);
            alert(`На ходу ${num} на вопрос ${obj.q} вы ответили ${obj.res}`);
        } while (!ok);
    }

    whatAnswer();
}