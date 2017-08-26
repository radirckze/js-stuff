

// do not polute the global namepace -  create a local namesapce for all 
//variables for this file

var CJ9F = {};
CJ9F.description = "CJ9F Fundementals";

$(document).ready( function() {
    //startup code goes here
    //var numPs = $('p').length;
    //alert("this works. This document has " + numPs  + " paragraphs");
    //$('p').addClass('highlight');
    //$('.chosen').addClass('highlight');
    // $('#gameImage').click(function() {
    //     alert("image clicked");

    $("#ullist").append("<li onclick=\"makeChosen(this)\"><a href=\"#\">five</a></li>");

    // });
    $('#success').hide();
    $('#startover').addClass('hoverOut');
    //$('#testForm').on('onsubmit', submitTestForm()); //is invoked on .ready but should not.
  //$('#testForm').on('submit', submitTestForm()); //is invoked on .ready but should not.
});


//shortcuts
// $() is short for JQuery() 
// $(function() {...}); //a shortcut to the above
// $('p') returns all paragraph elements


//This also works 
//$(document).ready(namedFunc());
function namedFunc() {
    alert("calling named function works too");
}

// $(document).ready(function() {
//     $("#subtitle").text("Yah! if you see this jquery changed subtitle");
// });

// I cannot make this work with .ready
var literalFunc = function() {
    alert("this works");
}

//Ataching something to the JQuery namespace. Note: does not attach to global namespace.
$.listBox = {
    show: function() { },
    hide: function() { }
};

//to slect elements use:
function countClasses() {
    var classCount = $('.classname');
    return classCount;
}


// $(document).ready(function() {
//     $("#title").text("Yah, its changed");
//     $('#firstp').html("<p><i>jquery updated paragraph 1</i></p>");
// });

function makeChosen(elem) {
    //$('li').removeClass('highlight');
    $('li').siblings().removeClass('highlight');
    $(elem).addClass('highlight');
   
}

function updateScore() {
    $('#success').show('slow').fadeOut(1000);
    var newScore = parseInt($('#score').text()) +1;
    $('#score').text(newScore);
    
}

//events taking anonymous functons
$('#startover').hover(function() {
    $('#score').text(0);
    $('#startover').addClass('hoverIn').removeClass('hoverOut');
}, function() {
    $('#startover').removeClass('hoverIn').addClass('hoverOut');
});

//calling REST APIs

//Do not use this. Use the $.ajax method instead.
$(function() {
    $('#githubGet').click(function() {
        $.getJSON('https://api.github.com/users/radirckze', function(data) {
            var items = [];
            $.each(data, function(key, val) {
                items.push('<li id="' + key + '">' + val + '</li>');
            });

            $('<ul/>', {
                'class': 'interest-list',
                html: items.join('')
            }).appendTo('github');

        } );

    });

});

function getGithubProfile() {
    $.ajax({
        url: 'https://api.github.com/users/radirckze',
        dataType: 'json',
        success: function(data) {
            var items = [];
            $.each(data, function(key, val) {
                items.push('<li id="' + key + '">' + val + '</li>');
            });

            $('<ul/>', {
                'class': 'interest-list',
                html: items.join('')
            }).appendTo('github');
        },
        // statusCode: {
        //     404: function() {
        //         alert("received 404");
        //     }
        // },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Exception occurred: " + errorThrown);
        }
    });
}

function submitTestForm() {
    var formData = $('#testForm').serialize();
    $.ajax({
        url: "",
        type: "POST",
        dataType: "json",
        data: formData,
        success: function(data) {
            alert("Form submit success: " + data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Form submit error: " + textStatus + " : "  + errorThrown);
        }

    });
}








