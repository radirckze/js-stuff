"using strict"

var JQS = {};

$(document).ready(function() {

    JQS = JQS || {};

    accordian();

    slidePanel();

    startNewsTicker();

    
});

// accordian functions ....

function accordian() {
    //accordain example 
    // $("#accordian p:not(:first)").hide(); //shwo the first
    $(".accordian p").hide(); //shwo the first
    
        $(".accordian h4").click(function() {
        
            $(this).next().slideToggle(500).siblings("p:visible").slideUp();
        });
};

// slide panel functions .....

function slidePanel() {
    $(".slide-panel button").click(function() {
        $(this).parent(".slide-panel").find(".text-area").slideToggle(500);
        //$(this).find(".text-area").slideToggle(500);
    });
};

// revolving new ticker functions 

function startNewsTicker() {
    JQS.moveNewsTickerFn = setInterval(moveNewsSticker, 2000);
    $(".news-ticker").hover(function() {
        pauseNewsTicker();
    },
    function() {
        JQS.moveNewsTickerFn = setInterval(moveNewsSticker, 2000);
    });
}

function moveNewsSticker() {
    $(".news-ticker p:first").slideUp(function() {
        $(this).appendTo($(this).parent()).slideDown();
    });
};

function pauseNewsTicker() {
    clearInterval(JQS.moveNewsTickerFn);
}

