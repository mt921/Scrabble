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

function makeGrid() {
    let tbl = document.getElementById("grid");
    for(let i=0;i<9;i++){
        let myRow = document.createElement("tr");
        myRow.id = "row" + i;
        myRow.className = "row"
        tbl.appendChild(myRow);
        let rowW = document.getElementById("row"+i);
        for(let j=0; j<9;j++){
            let myCell = document.createElement("td");
            myCell.id = [i,j]
            myCell.className ="cell"
            myCell.textContent = `${board[i][j]}`;
            rowW.appendChild(myCell);
        }
    }
}

makeGrid();