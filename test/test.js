'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
    var e = new Engine();
    var board = e.getBoard();
    var player1 = e.getPlayer1();
    var player2 = e.getPlayer2();
//test que le tableau soit bien initialisé
PalettoTestCase.prototype.testStory1 = function () {

    e.init();

    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){

            if (i>=1)
                assertTrue(board[i][j] != board[i-1][j]);

        }
    }

};

PalettoTestCase.prototype.testStory2 = function () {
    var square = "a6";
    var coords = e.charToCoords(square);
    var color = board[coords[0]][coords[1]];
    e.play(coords[0],coords[1]);
    assertTrue(e.getCurrentPlayer() == player2);
    assertTrue(player1.getNumber(e.text_code(color)) == 1);
};


PalettoTestCase.prototype.testStory3 = function () {
    var square = "a6";
    var coords = e.charToCoords(square);
    var color = board[coords[0]][coords[1]];
    assertTrue(e.getCurrentPlayer() == player2);
    assertTrue(board[coords[0]][coords[1]] == EMPTY);
    assertTrue(e.CoinsCount() == 35);
    assertTrue(player1.getNumber(e.text_code(color)) == 1);
};


