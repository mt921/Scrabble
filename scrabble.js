const Scrabble = Object.create(null);

Scrabble.addLetters = function(bag,letter,num) {
};

Scrabble.createBag = function(){};

Scrabble.createGame = function () {
    return {
        board : [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,"S","T","A","R","T",0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
        ],
        player1Score : 9,
        player2Score : 0,
        hand1 : ["A","B","C","D","E","F","G"],
        hand2 : ["A","B","C","D","E","F","G"],
        bag : ["A","B","C","D","E","F","G"],
        move : [],
        move_started : false,
        history: []
    }
};

Scrabble.updateHand = function (gameState) {
    //if either player has less than 7 letters update hand
    if (gameState["hand1"].length < 7) {

    }
    if (gameState["hand2"].length < 7) {

    }
};

Scrabble.removeBlanks = function(gameState){
    let currentHand = gameState["hand1"];
    let currentGameState = Object.assign({}, gameState);
    const newHand = currentHand.filter(tile => tile != "");
    currentGameState["hand1"] = newHand;
    return currentGameState;
}

Scrabble.cancelMove = function(gameState) {
    let currentHand = gameState["hand1"];
    let newGameState = Object.assign({}, gameState);
    originalMove = gameState["move"];
    originalMove.forEach(element => currentHand.push(element));
    newGameState["hand1"] = currentHand;
    newGameState["move"] = [];
    return newGameState;
}

Scrabble.checkMove = function(gameState) {
    //check whether a move can be commited to the permanent board

    //1 - check connections (there cannot be any gaps)

    //2 - calculate number of words

    //3 - validate words using dictionary

};

export default Object.freeze(Scrabble)