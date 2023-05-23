import Scrabble from "./scrabble.js";

let gameState = Scrabble.createGame();

//placeholder values
let tileSelected = false;

function updateGrid() {
    for(let i=0;i<9;i++){
        for(let j=0; j<9;j++){
            let gridCell = document.getElementById([i,j]);
            gridCell.textContent = `${gameState["board"][i][j]}`;
            if (gameState["board"][i][j] === 0) {
                gridCell.classList.add("empty");
                gridCell.classList.remove("tile");
            }
            if (gameState["board"][i][j] !== 0) {
                gridCell.classList.add("tile");
                gridCell.classList.remove("empty");
            }
        }
    }
}

function updateHistory() {
    document.getElementById("history"
    ).innerHTML = gameState["move"];
};

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
            gridCell.textContent = `${gameState["board"][i][j]}`;
            if (gameState["board"][i][j] === 0) {
                gridCell.classList.add("empty");
                gridCell.classList.remove("tile");
            }
            if (gameState["board"][i][j] !== 0) {
                gridCell.classList.add("tile");
                gridCell.classList.remove("empty");
            }
            rowW.appendChild(gridCell);
            //user interaction (clicking functionality)
            gridCell.onclick = function() {
                if (tileSelected !==false && gameState["board"][i][j]===0) {
                    gameState["board"][i][j]=tileSelected;
                    gameState["move"].push([tileSelected, [i,j]]);
                    tileSelected = false;
                    updateGrid();
                    updateHistory();
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
        handCell.textContent=`${gameState["hand1"][m]}`;
        handRow.appendChild(handCell);
        //user interaction (clicking functionality)
        handCell.onclick = function() {
            if (!tileSelected && gameState["hand1"][m] !="") {
                tileSelected = gameState["hand1"][m];
                gameState["hand1"][m]="";
                handCell.textContent=`${gameState["hand1"][m]}`;
                handCell.classList.add("empty");
            }
        }
    }
}

makeHand();
makeGrid();