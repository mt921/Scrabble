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
        current_orientation : ["n",0],
        current_move : [],
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

Scrabble.updateMove = function(gameState, move) {};

export default Object.freeze(Scrabble)