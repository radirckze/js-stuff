
"use strict";
//use strict must be at the begining of a script or function.

console.log("Running the JavaScript language basics file");

// Basics ----------------------------------------------------------------------

/* Also comments */

/* Variable declarations: var identifier [value];
 * Name can contain alpha-numeric, _, $. Name cannot begin with a number. 
 */


var age = 5; 
var name = "micky";
var someText = "ony possible to mix types in a dynamic typed ....", someNumber = 11; 

var undefinedVar; //A variable declared without a value will have the value undefined.
console.log("For var undefinedVar, value of undefinedVar is %s", undefinedVar);
console.log("is undefinedVar == null? %s", undefined==null);
console.log("is undefinedVar === null? %s", undefined===null);
console.log();

// [Unexpected behavior]
var reDeclation = "first declaration";
var reDeclation; // redeclaration. It does not loose its value so value="first declaration"

var val = "5" + 5 + 5; //val = "555" (this is as expectd.)
var val = 5 + 5 + "5"; //val = "105"

console.log("5%2 = %i (as expected)" + 5%2)
//== equal to; === is equal value, equal type.
console.log("5==5? %s; 5===5 %s; string5==5? %s; string5===5", 5==5, 5===5, "5"==5, "5"===5);

//JavaScript bitwise operators are &, |, ~ (not), ^(XOR), <<, >>
//JavaScript bitwise operations work on 32 bit (signed) numers.
console.log("5 & 1 (101 & 001) is %s (i.e., 001)", 5&1);
console.log("5 | 1 (101 | 001) is %s (i.e 101)", 5|1);
console.log("~5 (~00000000000000000000000000000101) is %s ", ~5);
console.log();

//for javascript precedence see 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Javascript scope -----------------------------------------------------------

// Note: when you declare a varable with var it is function scoped. You can declare a 
// variable without a var, in which case it is global scoped.

var globalScope = "global scope"; // added to DOM as well

(function() {
    //globalScopeToo = "global scople too";  // cannot do this in strict mode
    var localScope = "local scope";
    console.log("globl scope inside of function %s", globalScope);
   // console.log("global scope too inside of function %s", globalScopeToo);
    console.log("local scope inside of function %s", localScope);
    
})();

console.log("globl scope outside of function %s", globalScope);
//console.log("global scope too outside of function %s", globalScopeToo);
try {
    console.log("local scope outside of function %s", localScope);
}
catch (ex) {
    console.log("local scope cannot be accessed out side of funtion");
}

//JavaScript data types

//primitive types: string, number, boolean
//typeof can return: string, number, boolean, object, function, undefined.
//Note, JS has only one type of number

console.log("the typeof null is %s (yeah, really!)", typeof null);
console.log("2 / 0 in javascript is %s (cool!)", 2/0);
console.log("Is 2/0 == 3/0? %s (... so infinity==infinity)", 2/0 == 3/0);
console.log();

//Arrays are written with [], e.g., ["sleepy", "dopey", ...]
//Objects are written with {id=1, firstName="sleepy"}

// functions ------------------------------------------------------------------
function todaysDate() {
   // return Date(Date.now());
   var today = new Date();
   return today.getMonth()+1 + "." + today.getDate() + "." + today.getFullYear();
}

console.log("Today's date is %s", todaysDate());

// using the arguments to pass in indeterminate arguments
function add() {
    var sum = 0;
    for(i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }

    return sum;
}

console.log("Calling function add(1, 2) = %s", add(1,2) ); 
console.log("Calling function add(1, 2, 3, 4, 5,) = %s", add(1,2,3,4,5) );

//Fnction literal - a self invoking expression. See below
var funcVariable = function(a, b)  {return a + b};

console.log("using a function as a variable ... funcVariable(2,5) returns: %s ",
    funcVariable(2, 5)); 
console.log();

//Anonymous functions
(function() {
    return ("Anonymous fn call with %s arguments", arguments.length);
});

//this returns 5
(function() {
    return ("Anonymous fn call with %s arguments", arguments.length);
})(1,2,3,4,5); 

var result = (function() {
    return ("Anonymous fn called with " + arguments.length + " arguments.");
})(1,2,3,4,5); 

console.log(result);

//Note* function parameters are call by value for primitives, and reference for ...

//JavaScript objects ----------------------------------------------------------
//creating objectu using an object literal
var person = { firstName:"Jon", lastName:"Doe" };

//complext object
var complexObject = {
    name: "Jon Doe",
    address: {
        street: "the street address",
        zip: 90000
    },
    pets: [
        {name:"somename", SSN:1234567890},
        {name:"somename2", SSN:1234567890},
    ]
}

console.log("first pet's name is %s", complexObject.pets[0].name);

//creating an object using the new keyword
var newPerson = new Object();
newPerson.firstName="Jon";
newPerson.lastName="Doe";

// JS objects do not have a .equals method so this is false
console.log("Is person==newPerson? %s. Is person===newPerson? %s", 
    person==newPerson, person===newPerson);

var person2 = {
    firstName:"Jon", 
    lastName:"Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log("Person2.fullName is %s", person2.fullName());

//you can also access iterate over the object properties
console.log("printing object properties using iteration ...")
for (i in person2) {
    console.log(person2[i]);
}

// creting an object using object construcor
function car(make, model) {
    this.make = make;
    this.model = model;
    this.description = function() {
        return this.make + " : " + this.model;
    } 
}

var car1 = new car("Honda", "Civic");
var carOne = new car("Honda", "Civic");
var car2 = new car("Honda", "Accord");

car.prototype.equals = function(other) {
    if (typeof this === typeof other 
        && this.make === other.make 
        && this.model === other.model) {
            return true;
        }
        
    return false;
}

console.log("testing prototype function addtion. Is car1.equals(carOne): %s", 
            car1.equals(carOne));
console.log("testing prototype function addtion. Is car1.equals(person): %s", 
            car1.equals(person));


//Note, using a function to define the object allows you to define the (proto)type

/*You can update the prototype by using the prototype property as follows:
 * ....prototype.attrName = "defaul" or ....prototype.FullName = function() { ...}
 */


var jondoe1 = new PersonClass("Jon", "Doe");
var jondoe2 = new PersonClass("Jon", "Doe");

console.log("Person class jondoe instance fullName is %s", jondoe1.fullName());

console.log("Is jondoe1==jondoe2? %s. Is jondoe1===jondoe2? %s", 
    person==newPerson, person===newPerson);

//[question] how do you override the defaul equals, hash and other methods on object.

//inheritance example
function Employee(firstName, lastName, empId) {
    PersonClass.call(firstName, lastName);

    this.empId = empId;
}


//Note, JS supports multiple inheritance. 

// scope rules ----------------------------------------------------------------
//Note, in JS the global scope is the *entire* JS environment (window or tab). 

var declaredGlobal; //has global scople
function testScope() {
    var declaredLocal; //has local scople
    undeclaredLocal;   //Note, this has *global* scope as its undeclared. this
                       //iill fail in strict mode

}

//JS Events -------------------------------------------------------------------
//format : <element event="some JavaScript"> 
//eg, the follolwing replaces the inner html with Dat() when button is clicked.
//<button onclick="displayDate()">The time is?</button> where displayDate() is ...

//String functions and properties
var strFunctions = "string functions";
strFunctions.length;
console.log("string.indexOf(\"fun\") returned %s", strFunctions.indexOf("fun"));
console.log("the string.big() returned %s", strFunctions.big());
console.log();

// JS Math functions
console.log("Math.pow(8, 2)=%s, Math.round(4.6)=%s, Mach.ceil(5.1)=%s", 
    Math.pow(8,2), Math.round(4.6), Math.ceil(5.1));
//Note, Math.random() returns a number between 0 (inclusive) and 1 (exclusive)
console.log("A random number in the ranb of 0 and 10 is %s", 
    Math.floor(Math.random() * 11) );

function myRadnomGenerator(min, max) {
    return Math.floow(Math.random() * (max - min)) + min;
}

console.log();

//Arrays ----------------------------------------------------------------------
//array declaration
var myArray1 = new Array(); //discouraged
var myArray2 = []; //preferred pattern.
myArray2.push(new PersonClass("Jon", "Doe"));

console.log("The type of array is: %s (... arrays are objects)", typeof(myArray2)); 

//for LIFO use pop() and push()
//for FIFO use shift() and push()

myArray2.splice(1, 0, new PersonClass("Jane", "Doe"));
// add elements starting at 1, remove 0, and the new element(s)
// Note, use splice(x,y) to remove elements without leaving holes.
//other useful methods are sort(), and reverse()

var intArray = [3, 6, 4, 8, 25, 9];
console.log("The array is: %s", intArray);
intArray.sort();
console.log("The array after the default sort is: %s", intArray);
intArray.sort(function(a, b) {return a - b}); //sorts using the given function
console.log("The array after the custom sort is: %s", intArray);

for (i in intArray) {
    //do someting.
}

// associative arrays
var intArry = [];
intArray["one"] = 1;
intArry["two"] = 2;

console.log("Associative arrarys: the value of intArry[\"two\"] is %s", intArray["two"]);

console.log();

//Control structures ----------------------------------------------------------
var myrand = Math.floor(Math.random() * 10);
if (myrand < 3.3) {

} else if (myrand < 6.6) {

} else {

}

var numInEnglish;
switch (myrand) {
    case 0:    //Note, this is a strict comparison, i.e., myrand === 0.
        numInEnglish = "zero";
        break;
    case 1:
        numInEnglish = "one";
        break;
    default:
        numInEnglish = "greater than one";
}

for (var i = 0; i < 10; i++) {
    //do someting
}

//Note, below we just check for myArray2 as null, undefined, ... etc, teturn false.
var j = 0;
if (myArray2 && myArray2.length > 0) {
    for (var x in myArray2) {
        console.log("myArray[%s] is %s", j, myArray2[j++].fullName());
    }
}

while (false) {
    //Note, can use the break and continue statements as well.
}

do {

}
while (false);

//JS Regular expressions ------------------------------------------------------

//var regExp = /the-expression/modifier; //for eg:
var regexp = /cali/i; //find cali/case-insensitive
console.log("result of find /for/i in string California is: %s", 
    "California".search(/for/i));

console.log();

//JS Error handling -----------------------------------------------------------

try {
    throw "throw a string";
    //throw 5;
}
catch (err) {
    console.log("caught error %s", err);
}
finally {

}

console.log();

//JS Error object has 2 properties: name and message
//standard names: RangeError, ReferenceError, SyntaxError, TypeError, URIError

// Style guild and best practice notes ----------------------------------------

/* Note***, JS "hoists" declarations, that is moves all declarations to the top
 * of the current scope. But, be aware, it does *not* hoist the assignment..
 * As a result, some consider declaring variables at the top a best practice.
 */

//Note*** JS numbes are floating point so decimal arithmatic is *not* precise.

console.log("floating point 0.1 + 0.2 is %s", 0.1 + 0.2);
console.log("floating point (0.1 *10 + 0.2 *10) / 10 is %s", 
    (0.1 * 10 + 0.2 *10) / 10);



//boookmark: https://www.w3schools.com/js/js_scope.asp



