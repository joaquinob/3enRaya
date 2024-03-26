const EMPTY_TKN = '-';
const TOKEN1 = 'X';
const TOKEN2 = 'O';
let currentPlayer;

function init(){
    cleanBoard();
    printBoard();
    switchPlayer(1);
    
};

function printBoard() {
    const NUMBER_OF_ROWS = 3;
    const NUMBER_OF_COLS = 3;

    let board$ = document.querySelector('#board');

    for (let i = 0; i < NUMBER_OF_ROWS; i++) {
        let tr$ = document.createElement('tr');
        for (let j = 0; j < NUMBER_OF_COLS; j++) {
            let td$ = document.createElement('td');
            td$.textContent = EMPTY_TKN;
            td$.addEventListener('click', placeToken);
            tr$.appendChild(td$);
        };
        board$.appendChild(tr$);
    };

};

let replay$ = document.querySelector('#replay');
replay$.addEventListener('click', init);


init();



function placeToken() {
    if(this.textContent === EMPTY_TKN) {
        if(currentPlayer === 1) {
            this.textContent = TOKEN1;
            switchPlayer(2);
        } else {
            this.textContent = TOKEN2;
            switchPlayer(1);
        };
    };
};

function switchPlayer(newPlayer) {
    currentPlayer = newPlayer
    let title$ = document.querySelector('#currentPlayer');
    title$.textContent = 'Jugador: ' + currentPlayer;
};

function cleanBoard() {
    let board$ = document.querySelector('#board');
    board$.innerHTML = '';
};

function arrayBloq() {
    let board$ = document.querySelector('#board');
    let trs$ = board$.querySelectorAll('tr');
    let boardArray = [];
    
    for (let tr$ of trs$) {
        let tds$ = tr$.querySelectorAll('td');
        let row = [];
        
    }
}