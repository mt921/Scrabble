import Scrabble from "./scrabble.js";

let gameState = Scrabble.createGame();
const cancel = document.getElementById("cancel");

//placeholder values
let ply = false;

cancel.onclick = function () {
  gameState = Scrabble.cancelMove(gameState);
  updateHand();
  updateGrid();
  updateHistory();
};

function updateGrid() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let gridCell = document.getElementById([i, j]);
      gridCell.textContent = `${gameState["board"][i][j]}`;
      if (gameState["board"][i][j] === 0) {
        gridCell.classList.add("empty");
        gridCell.classList.remove("tile-locked");
        gridCell.classList.remove("tile-unlocked");
      } else if (
        gameState["board"][i][j] !== 0 &&
        gameState.lockedBoard[i][j]
      ) {
        gridCell.classList.add("tile-locked");
        gridCell.classList.remove("tile-unlocked");
        gridCell.classList.remove("empty");
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
    handCell.textContent = `${gameState["hand1"][i]}`;
    // handCell.textContent = "hey";
    if (gameState["hand1"][i] === "") {
      handCell.classList.add("empty");
    } else {
      handCell.classList.remove("empty");
    }
  }
}

function updateHistory() {
  document.getElementById("history").innerHTML = gameState["move"];
}

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
      gridCell.textContent = `${gameState["board"][i][j]}`;
      if (gameState["board"][i][j] === 0) {
        gridCell.classList.add("empty");
        gridCell.classList.remove("tile-locked");
        gridCell.classList.remove("tile-unlocked");
      }
      if (gameState["board"][i][j] !== 0) {
        gridCell.classList.add("tile-locked");
        gridCell.classList.remove("empty");
        gridCell.classList.remove("tile-unlocked");
      }
      rowW.appendChild(gridCell);
      //user interaction (clicking functionality)
      gridCell.onclick = function () {
        if (ply !== false && gameState["board"][i][j] === 0) {
          gameState["board"][i][j] = ply[0];
          gameState["move"].push([ply, [i, j]]);
          ply = false;
          updateGrid();
          updateHistory();
        }
        //return a tile from the board to its original location in the hand
        else if (
          ply === false &&
          gameState.lockedBoard[i][j] !== true //the tile is not locked to board
        ) {
          gameState["board"][i][j] = 0;
          gameState["hand1"][ply[1]] = ply[0];
          ply = false;
          updateGrid();
          updateHand();
          updateHistory();
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
    handCell.textContent = `${gameState["hand1"][m]}`;
    handRow.appendChild(handCell);
    //user interaction (clicking functionality)
    handCell.onclick = function () {
      if (!ply && gameState["hand1"][m] != "") {
        ply = [gameState["hand1"][m], [m]];
        gameState["hand1"][m] = "";
        handCell.textContent = `${gameState["hand1"][m]}`;
        handCell.classList.add("empty");
      }
    };
  }
}

makeHand();
makeGrid();
