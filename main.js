function makeGrid() {
    let tbl = document.getElementById("pixelCanvas");
    for(let i=0;i<11;i++){
        let myRow = document.createElement("tr");
        myRow.id = "row" + i;
        tbl.appendChild(myRow);
        let rowW = document.getElementById("row"+i);
        for(let j=0; j<11;j++){
            let myCell = document.createElement("td");
            rowW.appendChild(myCell);
        }
    }
}

makeGrid();

// const grid_columns = 8;
// const grid_rows = 8;

// //placeholder values
// let current_ply = 1;
// let tile_selected = false;

// let current_board = [
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,"A",0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0],
// ];

// document.documentElement.style.setProperty("--grid-rows", grid_rows);
// document.documentElement.style.setProperty("--grid-columns", grid_columns);

// const grid = document.getElementById("grid");

// //making the grid
// R.range(0, grid_rows).forEach(function (row_index) {
//     const row = document.createElement("div");
//     row.className = "row";
//     R.range(0, grid_columns).forEach(function (column_index) {
//         const cell = document.createElement("div");
//         cell.className = "cell";
//         cell.textContent = `${current_board[row_index][column_index]}`;
//         cell.onclick = function () {
//             if (tile_selected === true) {
//                 cell.textContent = `${current_ply}`;
//                 cell.classList.add("tile");
//                 tile_selected = false;
//             }
//         };
//         row.append(cell);
//     });
//     grid.append(row);
// });