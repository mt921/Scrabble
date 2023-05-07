const Scrabble = Object.create(null);

Scrabble.createGame = function () {
    return {
        "currentBoard" : [],
        "player1Score" : 9,
        "player2Score" : 0,
        "hand1" : [],
        "hand2" : [],
        "current_bag" : Scrabble.create_new_bag(),
        "current_orientation" : ["n",0],
        "current_move" : [],
        "move_started" : false,
        "history": []
    }
};

Scrabble.apple = 10;

export default Object.freeze(Scrabble)