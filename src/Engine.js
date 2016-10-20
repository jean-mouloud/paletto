'use strict';


var Engine = function () {

    // private attributes and methods

    // public methods
    var board = new Array(6);
    var player1 = new Joueur();
    var player2 = new Joueur();

    var current_player = player1;

    
    


    this.getPlayer1 = function(){
        return player1;
    };

    this.getPlayer2 = function(){
        return player2;
    };
    this.getCurrentPlayer = function(){
        return current_player;
    };
    this.getBoard = function(){
        return board;
    };

    this.play = function(x,y){

        if (board[x][y]!=EMPTY) {
            player1.incrementNumber(this.text_code(board[x][y]));
            board[x][y] = EMPTY;
                if (current_player == player1) {
                    current_player = player2;
                }
                else
                    current_player = player1;
        }
    };


    this.color_code = function(color) {
        if (color == 0)
            return COLOR_BLACK;
        else if (color == 1)
            return COLOR_BLUE;
        else if (color == 2)
            return COLOR_GREEN;
        else if (color == 3)
            return COLOR_RED;
        else if (color == 4)
            return COLOR_YELLOW;
        else if (color == 5)
            return COLOR_WHITE;
        else
            return EMPTY;
    };

    this.text_code = function(color) {
        if (color == COLOR_BLACK)
            return 0;
        else if (color == COLOR_BLUE)
            return 1;
        else if (color == COLOR_GREEN)
            return 2;
        else if (color == COLOR_RED)
            return 3;
        else if (color == COLOR_YELLOW)
            return 4;
        else if (color == COLOR_WHITE)
            return 5;
        else
            return 0;
    };



    this.init = function(){
        for (var i = 0; i < 6; i++) {
            board[i] = new Array(6);
        }

        board[0]= [COLOR_BLACK, COLOR_YELLOW, COLOR_BLUE, COLOR_RED, COLOR_WHITE, COLOR_YELLOW];
        board[1]= [COLOR_GREEN, COLOR_WHITE, COLOR_YELLOW, COLOR_BLACK, COLOR_GREEN, COLOR_BLUE];
        board[2]= [COLOR_WHITE, COLOR_GREEN, COLOR_BLUE, COLOR_RED, COLOR_YELLOW, COLOR_BLACK];
        board[3]= [COLOR_BLUE, COLOR_RED, COLOR_WHITE, COLOR_GREEN, COLOR_BLACK, COLOR_RED];
        board[4]= [COLOR_RED, COLOR_YELLOW, COLOR_BLACK, COLOR_BLUE, COLOR_YELLOW, COLOR_GREEN];
        board[5]= [COLOR_WHITE, COLOR_BLUE, COLOR_RED, COLOR_WHITE, COLOR_GREEN, COLOR_BLACK];
    };

    this.charToCoords = function(coords){
        var x = coords.charCodeAt(0)- "a".charCodeAt(0);
        var y = coords.charCodeAt(1)- "1".charCodeAt(0);
        return [x,y];
    };
    
    this.CoinsCount = function(){
        var count = 0;
        for (var i = 0; i < 6; i++) {
            for (var j = 0; j < 6; j++) {
                if(board[i][j]!=EMPTY)
                    count++;
            }
        }
        return count;
    }
};


/*
 //prendre en compte -1 text_code
 function init_random() {
 var color_check = new Array(0,0,0,0,0,0);
 var oldColor = 0;
 for (var i = 0; i < 6; i++) {
 board[i] = new Array(6);

 for (var j = 0; j < 6; j++){
 if(i >= 1) {
 var oldArrayColor = text_code(board[i - 1][j]);
 }
 do {
 var randomColor = Math.floor(Math.random() * 6) + 1;
 }while((randomColor==oldColor) || (randomColor==oldArrayColor) || (color_check[randomColor-1] ==6))
 color_check[randomColor-1]++;
 board[i][j]= color_code(randomColor);
 oldColor = randomColor;
 }
 }
 console.log(board);
 };
 */