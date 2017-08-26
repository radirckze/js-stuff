var strArray = [];

strArray.push("first");
strArray.push("second");
strArray.push("third");
strArray.push("fourth");
strArray.push("fifth");

//strArray.push(null); //does not cause any problems


console.log("printing initial array");
for (i = 0; i < strArray.length; i++) {
    console.log(strArray[i]);
};

console.log("test pop: popped element is " + strArray.pop());
console.log("test shift: shifted element is " + strArray.shift());
console.log("test unshift(sixth)");
strArray.unshift("sixth");

console.log("printing updated array");
strArray.forEach(function(item) {
    console.log(item);
});


var values = strArray.join(", ");
console.log("The array joined: %s", values);

//lets create a queue

var intArray = [];

for (i=0; i < 5; i++) {
    intArray.push(i);
}

intArray.shift();
intArray.shift();

intArray.forEach(function(item) {
    console.log("item: %s", item);
})

