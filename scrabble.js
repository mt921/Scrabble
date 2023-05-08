const Scrabble = Object.create(null);

Scrabble.createGame = function () {
    return {
        "currentBoard" : [
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
        "player1Score" : 9,
        "player2Score" : 0,
        "hand1" : ["A","B","C","D","E","F","G"],
        "hand2" : ["A","B","C","D","E","F","G"],
        "current_bag" : Scrabble.create_new_bag(),
        "current_orientation" : ["n",0],
        "current_move" : [],
        "move_started" : false,
        "history": []
    }
};

export default Object.freeze(Scrabble)