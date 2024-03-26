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
            console.log(getBoardArray());
        } else {
            this.textContent = TOKEN2;
            switchPlayer(1);
            console.log(getBoardArray());
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


function getBoardArray() {
    let board$ = document.querySelector('#board');
    let trs$ = board$.querySelectorAll('tr');
    let boardArray = [];
    for (let tr$ of trs$) {
        let tds$ =tr$.querySelectorAll('td');
        let row = [];
        for(let td$ of tds$) {
            row.push(td$.textContent);
        }
        boardArray.push(row);
    }

    return boardArray;
};


function checkWin() {
    if(boardArray[0][0] == boardArray[0][1] && boardArray[0][0] == boardArray [0][2] && boardArray[0][0]){
        return true;
    } else if (boardArray[1][0] == boardArray[1][1] && boardArray[1][0] == boardArray [1][2] && boardArray[1][0]){
        return true;
    } else if (boardArray[2][0] == boardArray[2][1] && boardArray[2][0] == boardArray [2][2] && boardArray[2][0]){
        return true;
    } else if (boardArray[0][0] == boardArray[1][0] && boardArray[0][0] == boardArray [2][0] && boardArray[0][0]){
        return true;
    } else if (boardArray[0][1] == boardArray[1][1] && boardArray[0][1] == boardArray [2][1] && boardArray[0][1]){
        return true;
    } else if (boardArray[0][2] == boardArray[1][2] && boardArray[0][2] == boardArray [2][2] && boardArray[0][2]){
        return true;
    } else if (boardArray[0][0] == boardArray[1][1] && boardArray[0][0] == boardArray [2][2] && boardArray[0][0]){
        return true;
    } else if (boardArray[0][2] == boardArray[1][1] && boardArray[0][2] == boardArray [2][0] && boardArray[0][2]){
        return true;
    }
};

