/* 1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему
            желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
            Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/

function createBoard() {
    let result = document.getElementById('result-5-1');
    result.innerHTML = '';

    let chars = ' ABCDEFGH ';

    let board = document.createElement('ul');
    board.classList.add('board');

    for (i = 0; i < 10; i++) {

        let row = document.createElement('li');
        board.appendChild(row);
        let ulInner = document.createElement('ul');
        row.appendChild(ulInner);

        if (i % 2 === 0) {
            row.classList.add('row-odd');
            createRow('odd', 'even', ulInner);


        } else {
            row.classList.add('row');
            createRow('even', 'odd', ulInner);
        }

    }

    function createRow(ord1, ord2, ul) {
        for (j = 0; j < 10; j++) {

            let check = document.createElement('li');

            if (i > 0 && i < 9) {

                if (j > 0 && j < 9) {
                    j % 2 === 0 ? check.classList.add('check', ord1) : check.classList.add('check', ord2);
                } else {
                    check.innerHTML = 9-i;
                    j === 9 ? check.classList.add('flip', 'check', 'transparent') : check.classList.add('check', 'transparent');
                }


            } else {
                check.classList.add('check');
                check.innerHTML = chars[j];
                i === 9 ? check.classList.add('check') : check.classList.add('check', 'flip');
            }

            ul.appendChild(check);
        }
    }

    result.appendChild(board);
}

function fillBoard() {

    let result = document.getElementById('result-5-1');

    if(!document.querySelector('.board')) {
        result.innerHTML = 'Create the board first';
    }

    let checks = Array.from(document.querySelectorAll('.check'));

    let pieces = {
        whiteQueen: '&#9813;',
        whiteKing: '&#9812;',
        whiteRook: '&#9814;',
        whiteBishop: '&#9815;',
        whiteKnight: '&#9816;',
        whitePawn: '&#9817;',
        blackKing: '&#9818;',
        blackQueen: '&#9819;',
        blackRook: '&#9820;',
        blackBishop: '&#9821;',
        blackKnight: '&#9822;',
        blackPawn: '&#9823;',
    };

    let schema = {};

    for (i = 0; i < 100; i++) {
        
        schema[i] = '';

    }

    for (k = 21; k < 29; k++) {
        schema[k] = pieces.blackPawn;
    }
    for (n = 71; n < 79; n++) {
        schema[n] = pieces.whitePawn;
    }

    schema[11] = pieces.blackRook;
    schema[12] = pieces.blackKnight; 
    schema[13] = pieces.blackBishop;
    schema[14] = pieces.blackQueen; 
    schema[15] = pieces.blackKing; 
    schema[16] = pieces.blackBishop;
    schema[17] = pieces.blackKnight; 
    schema[18] = pieces.blackRook;

    schema[81] = pieces.whiteRook;
    schema[82] = pieces.whiteKnight; 
    schema[83] = pieces.whiteBishop;
    schema[84]  = pieces.whiteQueen; 
    schema[85]  = pieces.whiteKing; 
    schema[86]  = pieces.whiteBishop;
    schema[87]  = pieces.whiteKnight; 
    schema[88]  = pieces.whiteRook;

    for (i=0; i < checks.length; i++) {
        checks[i].innerHTML += schema[i];
    }
}