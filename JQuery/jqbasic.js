var JSB = {};

$(document).ready(function() {
    //do something;
   
});

//exeercises: dynamically color alternate rows or a table. 

// selector examples
function selectorExamples() {
    // select everything
    $("*").css("background-color", "white");
    
    //select element
    $("p").css("color", "blue" ); // will change the text color of all paragrphs.

    //seclect multiple elements. 
    $("p, button").click(function() {alert("Clicked a paragraph");});

    //select element by Id
    $("#identifier").click(function() {alert("Clicked a paragraph");});

    //select element by class
    $(".classname").click(function() {alert("Clicked a paragraph");});

    //seclect using attribute/ (Note an attribute can be class-name as well. )

    //usin the this selector
    $("p").hover(function() {
        $(this).addClass("highlight");  
    },
    function() {
        $(this).removeClass("highlight");

    });
    // ***Note: the above will highlight only the "this" object but it has norhing to do with 
    // the this - its because hover applies to only 1 elment at a time.

    //select by attribute 
    $('[rowtype]').addClass("highlight") // will select all items with <... rowtype=...>
    $('[rowtype=odd]').addClass("highlight") // will select all items <... rowtype="odd"...
    $('[class]').addClass("highlight"); // this is the same as <... class=...>
    // ***Note: there are many conditional selectors, for ex.: ^=, $=, ~=, p:first, li:eq(x), ...
    // some examples
    // $('p:first-child') - selects any P that is the first child
    // $('p:first-of-type') -This is the first child of type
    // $('p: div > span') - spans that are direct child of div

    //form selectors (e.g)
    $(':input').addClass("highlight"); // this is a form based selector.

    //state based selectors (e.g)
    $(':hidden').show(); //:checked, :selected, etc

    //content based selectors
    $(':contains(First)').hide(); //content contains "First". Note, case sensitive
    $('p:contains(First)').hide(); //paragraphs that contain "First". 
    $('p:has(span)').hide(); // a paragraph that has a span 

}

function eventExamples() {
    //System evens (e.g., .ready()) and user events (e.g., .click())

    //MOUSE: click, mouseenter, mouseeeave, ...
    //Key board: keydown, keyup
    //Form events: focus, blur, focusin, focusout, change, select, submit
    
    //Browser events: scroll, resize. (Browser events are attached to window)
    $(window).resize(function() {});

    // event handlers used to attach events: on, off, one, trigger
    // to attached / detach multiple events, for e.g.,
    $('p').on({click: function() {} }, {dblclick: alert("")} );

    // To invoke a click on dynmically added elements, for example, dynamically
    // added li items, delegate the event to the parent, for e.g.,
    $('ul').on("click", "li", function() {$(this).addClass('highlight');} );
}

// jQuery effects
function effectsBasicExmples() {
    // Format: effect(duation, easing, callback); 
    // duration: slow, fast, or time in milli-seconds
    // easing: linear or swing
    // Note: the callback gets called only after the effect is complete!

    // 3 basic effects: hide(), show(), toggle()
    $('p').hide("slow", "linear", alert("")); //

    // fading effects: fadeIn, fadeOut, fadeToggle, fadeTo

    // Sliding effects: slideUp, slideDown, slideToggle

    // Custom amimaton:
    $('div').animate({"height":"+=50px"}, "slow");

}

// DOM manupulation methods
function DomManupulationExamples() {

    $('#labelId').html(); // returns html
    $('#labelId').html("<b>Last Name </b>"); // sets the html

    $('#paraId').text(); // gets (and set) the test
    $('#paraId').val(); // gets (and sets) the value. 
    // Note: above works only for elements that have a value, i.e., input elements

    // Attribute vs propery 
    // <label>First Name:</label><input type="text" value="type fn"></input>
    // Suppose user enters John, then:
    // attribute value = "type fn", the property value = "John"
    $('#inputId').attr(); // gets and sets the attribute value
    $('#inputId').prop(); // gets and sets the property value

    //Additng elements.
    // append, after, prepend, before. 
    $('#paraId').append("..."); // adds as a child
    $('#paraId').after("..."); //adds as a sibling

    //removing elements
    $('#ulId').remove(); //removes the element
    $('#ulId').empty(); //removes it's child elements (i.e., all the li elements)

    // update / modify content. *** Need to review docs for this.
    $('#itemId').replaceWith("...");
    $( "<h2>New heading</h2>" ).replaceAll( ".inner" );

    // updating styles
    $('p').css('color', "green"); //
    $('p').css({'color': "green", "background-color": " grey"}); 
    $('p').addClass('highlight'); //
    $('p').removeClass('highlight');
    $('p').toggleClass('highlight');

    // To get the value of a style use:
    $('#paraId').css('color');

    // DOM travesal methods
    $("paraId").parent().css("background-color", "grey"); // immdediate parent
    $("paraId").parents().css("", ""); // all parent
    $("paraId").parentsUntil("div").css("", ""); // all parent until ...

    $("liId").siblings().css("", ""); // all siblings, previous and next
    $("liId").priv().css("", ""); // get previous
    $("liId").privAll().css("", ""); // get previous
    $("liId").privUntil().css("", ""); // get previous until
    $("liId").next().css("", ""); // get previous
    $("liId").nextAll().css("", ""); // get previous
    $("liId").nextUntil().css("", ""); // get previous until

    $("rowId").children().css("", ""); // returns immediate child elements
    $("body").find("tr").css("", ""); // returns matching (grand) child elements

    // Filtering methods
    $('td').first().css("", ""); //
    // last(), eq(index) //
    $('#row1 td').filter(":even").css("", ""); //
    $('#row1 td').not(":even").css("", ""); //
    $('#row1 td').slice((1)).css("", ""); //
    // slice(start [, end])
    $('td').has('tr').css("", ""); //

}

// jQuery Ajax
function callRestExample(someData) {
    // you can get data direct from the form as well.
    $.ajax({
        url: "",
        method: "GET",
        //processData: true. Default is true.
        //for any data other than JS object processData should be false. 
        data: "", // send JS object or JSON.stringify(JS- object), or ...
        dataType: "json",
        success: function(data, status, jqxhr) {
            //do something with the data
        }, 
        error: function(jqXHR, status, error ) {
            //process error
        },
        complete: function(jqxhr, status) { // executed after success or error

        }
    });
}