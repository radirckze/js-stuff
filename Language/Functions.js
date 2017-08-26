function constructFullName(firstName) {
    function fullName(lastName)  {
       // return "FullName is " + firstName + " " + lastName;
       return "FullName is " + firstName + " " + lastName;
    }
    return fullName;
}

var fullName = constructFullName("Ravi");
console.log(fullName("Dirckze"));
console.log(fullName("Bala"));

function myVariable(strValue) {
    var myValue = strValue;
    
     return {
        get: function() {return myValue;},
        set: function(strValue) {myValue = strValue;}
    }
}

var myVariable = myVariable("initial value");
console.log("MyVariable initial value is " + myVariable.get());
myVariable.set("update value");
console.log("MyVariable value after updating is " + myVariable.get());


//this returns 5
(function() {
    console.log("Anonymous fn called with %s arguments", arguments.length);
})(1,2,3,4,5); 

function add() {
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log("Calling function add(1, 2) = %s", add(1,2) ); 
console.log("Calling function add(1, 2, 3, 4, 5,) = %s", add(1,2,3,4,5) );

(function() {
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log("Anonymous function call - The sum of the values is : " + sum);
})(1,2,3,4,5,6,7);
