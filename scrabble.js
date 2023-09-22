class Tile {
  constructor(value) {
    this.value = value;
    this.originalPosition = undefined; //original position on the rack
    this.locked = undefined; //whether the tile is locked to board
  }
}

function createBoard(rows, cols) {
  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(new Tile(0));
    }
    board.push(row);
  }
  return board;
}

function createRack() {
  const rack = [];
  for (let i = 0; i < 7; i++) {
    let tile = new Tile(1+i);
    tile.originalPosition = i;
    rack.push(tile);

  }
  return rack;
}

export function createGameState() {
  return {
    board: createBoard(9, 9),
    rack: createRack(),
    hand: undefined
  };
}