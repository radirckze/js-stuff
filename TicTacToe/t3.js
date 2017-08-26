"using strict";

var T3 = {};

$(document).ready(function() {
    //alert("js loaded");
    T3 = T3 || {};
    T3.player = 1;
    T3.playerChar = 'X';
    initBoard();   
    $("#result").hide();

    $('.square').mouseenter(function() {
        $(this).css("background-color", "silver");
    });
    $(".square").mouseleave(function() {
        $(this).css("background-color", "white");
    });

    

    // // The above can be combined and written as ...
    // $('.square').mouseenter(function() {
    //     $(this).css("background-color", "silver");
    // }).mouseleave(function() {
    //     $(this).css("background-color", "white");
    // });

    //Also can use $("#square").hover(function(){}, function(){})
    

});

function squarePicked(elem) {
    var pos = $(elem).attr('pos');
    //pos = parseInt(pos);
    if (T3.board[pos] != null) {
        alert("Click an empty space");
        return;
    }
    else {
        var theChar = 'X';
        if (T3.player %2 == 0) {
            theChar = 'O';
        }
        $(elem).text(theChar);
        T3.board[pos] = theChar;
        T3.player = (T3.player == 1) ? 2 : 1;
    }

    var status = checkGameStatus();
    switch (status) {
        case 'X' : 
            //alert("X won!");
            $("#result").text("X won!");
            $("#result").show('slow').fadeOut(2000);
            break;
        case 'O' : 
            //alert("O won!");
            $("#result").text("O won!");
            $("#result").show('slow').fadeOut(2000);
            break;
        case 'S' :
            //alert("Game over!");
            $("#result").text("Game Over!");
            $("#result").show('slow').fadeOut(2000);
            break;
        default:
            return;
    }
}

function initBoard() {
    T3.board = [];
    for(i=0; i<9; i++) {
        T3.board[1] = null;
    }
    T3.player = 1;
    $('.square').text("");
}

// C = OK to contiue, S - stalemate, X - X won, O - O won
function checkGameStatus() {
    if (T3.board[0] && T3.board[0] === T3.board[1] && T3.board[1] === T3.board[2]) {
        return T3.board[0];
    }
    else if (T3.board[3] && T3.board[3] === T3.board[4] && T3.board[4] === T3.board[5]) {
        return T3.board[3];
    }
    else if (T3.board[6] && T3.board[6] === T3.board[7] && T3.board[7] === T3.board[8]) {
        return T3.board[6];
    }
    else if (T3.board[0]  && T3.board[0] === T3.board[3] && T3.board[3] === T3.board[6]) {
        return T3.board[0];
    }
    else if (T3.board[1] && T3.board[1] === T3.board[4] && T3.board[4] === T3.board[7]) {
        return T3.board[1];
    }
    else if (T3.board[2] && T3.board[2] === T3.board[5] && T3.board[5] === T3.board[8]) {
        return T3.board[2];
    }
    else if (T3.board[0] && T3.board[0] === T3.board[4] && T3.board[4] === T3.board[8]) {
        return T3.board[0];
    }
    else if (T3.board[2] && T3.board[2] === T3.board[4] && T3.board[4] === T3.board[6]) {
        return T3.board[2];
    }

    var temp1 = T3.board.length;

    for (i = 0; i < T3.board.length; i++) {
        if (T3.board[i] == null) {
            return 'C';
        }
    }

    return 'S';
}

