//Evaluate these:
//#1
[2] === [2]
// False

{} === {} 
// False

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;
// Because of Pass by Reference, object2 and object 3 are the same object as object1.  Therefore, when changing object1, the values in object2 and object3 also change.
// While the value of a in object4 is the same value as object1, they are different objects.


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
    constructor (name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor (name, type, color) {
        super (name, type, color);
    }
    sound() {
        console.log(`Mooooo! My name is ${this.name}. I am a ${this.color} ${this.type}.`); // Got stuck on this line before adding "this."
    }
}

const cow = new Mammal(name, type, color);
