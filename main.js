import Scrabble from "./scrabble.js";

const board = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,"S","T","A","R","T",0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
  ];

const hand1 = ["A","B","C","D","E","F","G"];
const hand2 = ["A","B","C","D","E","F","G"];
const player1Score = 10;
const player2Score = 5;

//placeholder values
let tileSelected = false;

function updateGrid() {
    for(let i=0;i<9;i++){
        for(let j=0; j<9;j++){
            let gridCell = document.getElementById([i,j]);
            gridCell.textContent = `${board[i][j]}`;
            if (board[i][j] === 0) {
                gridCell.classList.add("empty");
                gridCell.classList.remove("tile");
            }
            if (board[i][j] !== 0) {
                gridCell.classList.add("tile");
                gridCell.classList.remove("empty");
            }
        }
    }
}

function makeGrid() {
    let gridTbl = document.getElementById("grid");
    for(let i=0;i<9;i++){
        let gridRow = document.createElement("tr");
        gridRow.id = "row" + i;
        gridRow.className = "row"
        gridTbl.appendChild(gridRow);
        let rowW = document.getElementById("row"+i);
        for(let j=0; j<9;j++){
            let gridCell = document.createElement("td");
            gridCell.id = [i,j]
            gridCell.className ="cell"
            gridCell.textContent = `${board[i][j]}`;
            if (board[i][j] === 0) {
                gridCell.classList.add("empty");
                gridCell.classList.remove("tile");
            }
            if (board[i][j] !== 0) {
                gridCell.classList.add("tile");
                gridCell.classList.remove("empty");
            }
            rowW.appendChild(gridCell);
            gridCell.onclick = function() {
                if (tileSelected !==false) {
                    board[i][j]=tileSelected;
                    updateGrid();
                }
            }
        }
    }
}

function makeHand() {
    let handTbl = document.getElementById("hand");
    let handRow = document.createElement("tr");
    handRow.className = "row";
    handTbl.appendChild(handRow);
    for(let m=0;m<7;m++){
        let handCell = document.createElement("td");
        handCell.id = ["h",m];
        handCell.className="hand-cell";
        handCell.textContent=`${hand1[m]}`;
        handRow.appendChild(handCell);
        handCell.onclick = function() {
            tileSelected = hand1[m];
            hand1[m]="0";
            handCell.textContent=`${hand1[m]}`;
        }
    }
}

makeHand();
makeGrid();