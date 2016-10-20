/**
 * Created by mhabinka on 11/10/16.
 */

'use strict';

var Joueur = function () {

    var number = new Array(0,0,0,0,0,0);
    
    this.setNumber = function(indice, value){
        if(indice < 6)
            number[indice] = value;
    }

    this.incrementNumber = function(indice){
        number[indice]++;
    }

    this.getNumbers = function(){
        return number;
    }

    this.getNumber = function(indice){
        return number[indice];
    }
}