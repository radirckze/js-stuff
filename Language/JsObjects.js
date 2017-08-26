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
        return this.make + " " + this.model;
    } 
}

var car1 = new car("Honda", "Civic");
var carOne = new car("Honda", "Civic");
var car2 = new car("Honda", "Accord");

console.log("Car 1 description is: " + car1.description());
console.log("testing JS default equality - is car1 === carOne: %s", 
car1 === carOne);


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