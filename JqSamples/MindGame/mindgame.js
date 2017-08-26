"using strict"

var MGSTATE = {};

$(document).ready(function () {

    MGSTATE = MGSTATE || {};

    initImagesArray();
    resetGameBoard();
    $('#reset').click(function(){
        resetGameBoard();
    });

    $('#test').click(function(){
        $("#51").show('fast').delay(2000).hide('fast');

    });


});

function initImagesArray() {
    MGSTATE.imagesArray = [];
    for(i=0; i<24; i++) {
        MGSTATE.imagesArray[i] = "images/img" + (i+1) + ".png";
    }

    // $.each( MGSTATE.imagesArray, function(index, value) {
    //     $('body').append(
    //         '<img src="' + value + '" alt="" height="50" width="50">'
    //     );
    // })
}

function resetGameBoard() {
    $(".mind-game .board").empty();
    MGSTATE.boardPieces = [];
    var theTable = $(".mind-game .board").append("<table></table>");
    for (i = 0; i < 6; i++) {
        var theRow= $(theTable).append("<tr id=\"" + "rowId"+i + "\"></tr>");
        for (j = 0; j <6; j++) {
            $(theRow).append("<td id=\"" + "tileId"+(i*6 +j) + "\" class=\"tile\"></tr>");
            //<td><img src="H.gif" alt="" border=3 height=100 width=100></img></td>
            // $(theRow).append('<td id="' + 'tileId' + j + '" class="tile">' + 
            // '<img src="' + MGSTATE.imagesArray[Math.ceil((i*6+j)/2)] + '" alt="" border=3 height=50 width=50>' +
            // '</img></tr>');
        }
    }

    hideBoardPieces();
    processTileClick();
    MGSTATE.openTile = null;
}



function hideBoardPieces() {
    //alert ("number of game board pieces: " + $("#gameBoard td").length);
    var tiles = $("#gameBoard td");
    var numPairs = tiles.length/2;

    for (i=0; i<numPairs; i++) {
        var imgPath = MGSTATE.imagesArray[i];
        // $(tiles[i]).append('<img src="' + imgPath + '" ' +
        //     'id=' + '"' + i + '" ' +
        //     '" alt="" border=3 height=50 width=50 ' + 
        //     'style="display: none;"></img>');
        // $(tiles[numPairs + i]).append('<img src="' + imgPath + '" ' +
        //     'id=' + '"' + i + '" ' +
        //     '" alt="" border=3 height=50 width=50 ' + 
        //     'style="display: none;"></img>');
        $(tiles[i]).append('<img src="' + imgPath + '" ' +
            'alt="" border=3 height=50 width=50 ' + 
            'style="display: none" '+
            '></img>');
        $(tiles[numPairs + i]).append('<img src="' + imgPath + '" ' +
            'alt="" border=3 height=50 width=50 ' + 
            'style="display: none" '+
            '></img>');
    }

    //randomize. 
    for(i=0; i<numPairs; i++) {
        var rand = Math.floor(Math.random() *(numPairs) + numPairs);
        //switch
        var tempImg = $(tiles[i]).children('img:first').attr("src");
        //$(tiles[i]).children('img:first').replaceWith($(tiles[rand]).children('img:first'));
        $(tiles[i]).children('img:first').attr("src", $(tiles[rand]).children('img:first').attr("src"));
        $(tiles[rand]).children('img:first').attr("src", tempImg);
    }
    
}

function processTileClick() {

    $(".tile").click(function() {
        //$(this).css("background-color", "silver");
        if (MGSTATE.openTile) {
            if ($(this).attr('id') === $(MGSTATE.openTile).attr('id') ) {
                $(this).children('img:first').css("display", "none");
                MGSTATE.openTile = null;
            }
            else if ($(this).children('img:first').attr('src') 
                    === $(MGSTATE.openTile).children('img:first').attr('src')) {
                //its a match
                $(this).children('img:first').css("display", "block");
                $(this).off('click');
                $(MGSTATE.openTile).off('click');
                MGSTATE.openTile = null;
            }
            else {
                //no match
                $(this).children('img:first').show('fast').delay(1000).hide('fast');
            }
        }
        else {
            $(this).children('img:first').css("display", "block");
            MGSTATE.openTile = $(this);
        }
    });
}
