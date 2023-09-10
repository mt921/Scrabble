import * as Scrabble from "./scrabble.js";

let gameState = Scrabble.createGameState();
console.log(gameState);

//placeholder values
let tileSelected = false;

//NOTE: YOU COULD CONVERT STATE SO THAT IT LINKS TO THE CSS CLASSES
//THEN YOU CAN ADD THE CLASSES BASED ON THE STATE?

function makeGrid() {
  let gridTbl = document.getElementById("grid");
  for (let i = 0; i < 9; i++) {
    let gridRow = document.createElement("tr");
    gridRow.id = "row" + i;
    gridRow.className = "row";
    gridTbl.appendChild(gridRow);
    let rowW = document.getElementById("row" + i);
    for (let j = 0; j < 9; j++) {
      let gridCell = document.createElement("td");
      gridCell.id = [i, j];
      gridCell.className = "cell";
      //identify the tile value within given board state
      const tile = gameState.board[i][j];
      const gridValue = tile.value;
      const lockedState = tile.lockedState;
      gridCell.textContent = `${gridValue}`;
      if (gridValue === 0) {
        gridCell.classList.add("empty");
        gridCell.classList.remove("tile");
      }
      rowW.appendChild(gridCell);
      //user interaction (clicking functionality)
      gridCell.onclick = function () {
        //if the user is holding a tile allow them to place it
        if (tileSelected !== false && gridValue === 0) {
          gameState.board[i][j] = tileSelected;
          console.log(tileSelected);
          tileSelected = false;
          updateGrid();
        }
        //if the user is not holding a tile allow them to pick up unlocked tiles
        else if (
          tileSelected === false &&
          gameState.board[i][j].lockedState !== true
        ) {
          console.log(tile);
          gameState.hand[tile.originalPosition] = "fixed";
          gameState.board[i][j].value = 0;
          gridCell.textContent = `${gridValue}`;
          tileSelected = false;
          updateHand();
          updateGrid();
        }
      };
    }
  }
}

function makeHand() {
  let handTbl = document.getElementById("hand");
  let handRow = document.createElement("tr");
  handRow.className = "row";
  handTbl.appendChild(handRow);
  for (let m = 0; m < 7; m++) {
    let handCell = document.createElement("td");
    handCell.id = ["h", m];
    handCell.className = "hand-cell";
    const tile = gameState.hand[m];
    handCell.textContent = `${tile.value}`;
    handRow.appendChild(handCell);
    //user interaction (clicking functionality)
    handCell.onclick = function () {
      if (!tileSelected && tile.value != "") {
        tileSelected = tile;
        console.log(tileSelected);
         gameState.hand[m].value = "";
        
        // handCell.textContent = `${gameState.hand[m].value}`;
        // handCell.classList.add("empty");
        updateHand();
      }
    };
  }
}

function updateGrid() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let gridCell = document.getElementById([i, j]);
      const gridValue = gameState.board[i][j].value;
      const lockedState = gameState.board[i][j].lockedState;
      gridCell.textContent = `${gridValue}`;
      if (gridValue === 0) {
        gridCell.classList.add("empty");
        gridCell.classList.remove("tile");
        gridCell.classList.remove("tile-unlocked");
      } else if (gridValue !== 0 && lockedState) {
        gridCell.classList.add("tile-locked");
        gridCell.classList.remove("empty");
        gridCell.classList.remove("tile-unlocked");
      } else {
        gridCell.classList.add("tile-unlocked");
        gridCell.classList.remove("tile-locked");
        gridCell.classList.remove("empty");
      }
    }
  }
}

function updateHand() {
  for (let i = 0; i < 7; i++) {
    let handCell = document.getElementById(["h", i]);
    const handValue = gameState.hand[i].value;
    handCell.textContent = `${handValue}`;
    if (handValue === ""){
        handCell.classList.add("empty");
    } else {
        handCell.classList.remove("empty");
    }
  }
}

makeHand();
makeGrid();
