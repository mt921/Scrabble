board = [
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

hand1 = ["A","B","C","D","E","F","G"];
hand2 = ["A","B","C","D","E","F","G"];
player1Score = 10;
player2Score = 5;

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
            rowW.appendChild(gridCell);
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
        handCell.id = [0,m];
        handCell.className="cell";
        handCell.textContent=`${hand1[m]}`;
        handRow.appendChild(handCell);
    }
}

makeHand();
makeGrid();