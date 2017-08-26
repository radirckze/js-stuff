// Static typing ......................
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
console.log();
console.log("TypeScript language basics ....");
var gCharacterName = "Goofy";
var gLikes;
// functions ..........................
function setLikes4Gofy(numLikes) {
    gLikes = numLikes;
}
setLikes4Gofy(500);
console.log("The number of likes for Goofy is: " + gLikes);
//Classes .............................
var Character = (function () {
    //a straightforward constructor
    function Character(theName, theLikes) {
        this.name = theName;
        this.likes = theLikes;
    }
    //a method
    Character.prototype.toString = function () {
        return "Name: " + this.name + ", Likes: " + this.likes;
    };
    return Character;
}());
//inheritence
var funnyCharacter = (function (_super) {
    __extends(funnyCharacter, _super);
    //a straightforward constructor
    function funnyCharacter(theName, theLikes) {
        _super.call(this, theName, theLikes);
    }
    return funnyCharacter;
}(Character));
//Arraays .............................
var characters;
//var characters2: Array<Character>;
characters = [new Character("Mowgli", 500), new Character("Baloo", 600),
    new Character("Kink Louie", 300), new Character("Baghreera", 400)];
// characters = [{name:"Mowgli", likes:500}, {name:"Baloo", likes:600}, 
//              {name:"King Louie", likes:300}, {name:"Bagheera", likes:400}];
function printCharacters(characters) {
    console.log();
    console.log("Array of characters (... testing arrays, classes and interfaces)");
    for (var _i = 0, characters_1 = characters; _i < characters_1.length; _i++) {
        var character = characters_1[_i];
        console.log("Name: " + character.name + ", Likes: " + character.likes);
    }
    console.log();
}
printCharacters(characters);
//Generics ............................
// Modules ............................
