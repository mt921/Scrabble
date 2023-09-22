import * as Scrabble from "./scrabble.js";

let gameState = Scrabble.createGameState();
console.log(gameState);

function makeGrid() {
  let gridTbl = document.getElementById("grid");

  for (let x = 0; x < 9; x++) {

    let gridRow = document.createElement("tr");
    gridRow.id = "row" + x;
    gridRow.className = "row";
    gridTbl.appendChild(gridRow);
    let rowW = document.getElementById("row" + x);

    for (let y = 0; y < 9; y++) {
      let gridCell = document.createElement("td");
      gridCell.id = [x, y];
      gridCell.className = "cell";

      //identify the tile value within given board state
      gridCell.textContent = `${gameState.board[x][y].value}`;

      if (gameState.board[x][y].value === 0) {
        gridCell.classList.add("empty");
        gridCell.classList.remove("tile");
      }

      rowW.appendChild(gridCell);

      //user interaction (clicking functionality)
      gridCell.onclick = function () {
        //if the user is holding a tile allow them to place it
        //if a player is holding a tile gameState.hand will be a nested object
        if (gameState.hand !== undefined && gameState.board[x][y].value === 0) {
          gameState.board[x][y] = { ...gameState.hand }; //shallow clone
          gameState.hand = undefined; //empty hand after tile has been placed
          updateGrid(); //update visuals
        }

        //if the user is not holding a tile allow them to pick up unlocked tiles
        else if (
          gameState.hand === undefined &&
          gameState.board[x][y].lockedState === undefined &&
          gameState.board[x][y].value !== 0
        ) {
          gameState.rack[gameState.board[x][y].originalPosition] = {
            ...gameState.board[x][y],
          }; //shallow clone

          gameState.board[x][y].value = 0;
          updateRack();
          updateGrid();
        }
        console.log(gameState);
      };
    }
  }
}

function updateGrid() {
  for (let x = 0; x < 9; x++) {
    for (let y = 0; y < 9; y++) {
      let gridCell = document.getElementById([x, y]);
      const gridValue = gameState.board[x][y].value;
      const locked = gameState.board[x][y].locked;
      gridCell.textContent = `${gridValue}`;
      if (gridValue === 0) {
        gridCell.classList.add("empty");
        gridCell.classList.remove("tile-unlocked");
        gridCell.classList.remove("tile");
      } else if (gridValue !== 0 && locked) {
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

function makeRack() {
  let rackTbl = document.getElementById("rack");
  let rackRow = document.createElement("tr");
  rackRow.className = "row";
  rackTbl.appendChild(rackRow);
  for (let m = 0; m < 7; m++) {
    let rackCell = document.createElement("td");
    rackCell.id = ["h", m];
    rackCell.className = "rack-cell";
    rackCell.textContent = `${gameState.rack[m].value}`;
    rackRow.appendChild(rackCell);
    //user interaction (clicking functionality)

    rackCell.onclick = function () {
      if (gameState.hand === undefined && gameState.rack[m].value != "") {
        gameState.hand = { ...gameState.rack[m] };
        gameState.rack[m].value = "";
        updateRack();
      }
      console.log(gameState);
    };
  }
}

function updateRack() {
  for (let i = 0; i < 7; i++) {
    let rackCell = document.getElementById(["h", i]);
    const rackValue = gameState.rack[i].value;
    rackCell.textContent = `${rackValue}`;
    if (rackValue === "") {
      rackCell.classList.add("empty");
    } else {
      rackCell.classList.remove("empty");
    }
  }
}

makeGrid();
makeRack();