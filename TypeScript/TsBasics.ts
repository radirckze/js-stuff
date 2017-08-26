// Static typing ......................

console.log();
console.log("TypeScript language basics ....");

var gCharacterName : string = "Goofy";
var gLikes : number;

// functions ..........................

function setLikes4Gofy(numLikes : number) : void {
    gLikes = numLikes;
}


setLikes4Gofy(500);
console.log("The number of likes for Goofy is: " + gLikes);

//Interfaces ..........................

interface ICharacter {
    name : string;
    likes: number;

    toString() : string;
}

//Classes .............................

class Character implements ICharacter {
    name : string;
    likes: number;

    //a straightforward constructor
    constructor(theName : string, theLikes : number) {
        this.name = theName;
        this.likes = theLikes;
    }

    //a method
    toString() : string {
        return "Name: " + this.name + ", Likes: " + this.likes;
    }
}

//inheritence
class funnyCharacter extends Character {

    //a straightforward constructor
    constructor(theName : string, theLikes : number) {
        super(theName, theLikes);
    }
}

//Arraays .............................

var characters: ICharacter[];
//var characters2: Array<Character>;

characters = [new Character("Mowgli", 500), new Character("Baloo", 600), 
    new Character("Kink Louie", 300), new Character("Baghreera", 400)];
// characters = [{name:"Mowgli", likes:500}, {name:"Baloo", likes:600}, 
//              {name:"King Louie", likes:300}, {name:"Bagheera", likes:400}];


function printCharacters(characters : Array<ICharacter>) : void {
    console.log();
    console.log("Array of characters (... testing arrays, classes and interfaces)")
    for (let character of characters) {
        console.log("Name: " + character.name + ", Likes: " + character.likes);
    } 
    console.log();
}

printCharacters(characters);

//Generics ............................



// Modules ............................

