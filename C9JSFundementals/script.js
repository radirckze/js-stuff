function substitute() {
    var myValue = document.getElementById("myTextBox").value;
    if (myValue.length == 0) {
        alert("Please enter a value in the text box");
        return;
    }
    else {
        document.getElementById("textCopy").innerHTML = myValue;
        //copyValue.innerHTML = myValue
    }
}


function checkValueType() {
    var typeCheckValue = document.getElementById("checkTypeValue").value;
    if (typeCheckValue == null || typeCheckValue.length == 0) {
        alert("invlid or null");
    }
    // else if (!isNaN(typeCheckValue)) {
    //     alert("It is a valid number");
    // }
    else {
        alert("Type is " + typeof typeCheckValue);
    }
}

function calc(stringExp) {
    if (stringExp == null ||  typeof(stringExp) != "string" || stringExp.length == 0) {
        return "please type a valid expression";
    }
    else {
        var pieces = stringExp.split(" ");
        if (pieces.length == 3 && !
            (isNaN(pieces[0] || isNaN(pieces[2]))) 
        ) {
            if (pieces[1] == "+" ) {
                return parseFloat(pieces[0]) + parseFloat(pieces[2]);
            }
            else if (pieces[1] == "-" ) {
                return parseFloat(pieces[0]) - parseFloat(pieces[2]);
            }
            else {
                return "I can only handle  the + and - operators at this time";
            }
        }
        else {
            return "I can only handle X +/- Y at this time."; 
        }
    }
}

// unlimited input / 

