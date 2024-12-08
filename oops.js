//Objects- these are the building blocks of OOPS in js and are collection of key-value pairs(properties and methods)
const person={
    name:"tanya",
    age:22,
    greet:function(){
        console.log(`hi my name is ${this.name}`);
    },
};
person.greet();
//Classes are blueprints of an Object. A class can have many Objects because the class is a template while Objects are instances of the class or the concrete implementation. 
// Defining class using es6
class Vehicle {
	constructor(name, maker, engine) {
		this.name = name;
		this.maker = maker;
		this.engine = engine;
	}
	getDetails() {
		return (`The name of the bike is ${this.name}.`)
	}
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name); // Hayabusa
console.log(bike2.maker); // Kawasaki
console.log(bike1.getDetails());
//Inheritance- allows a child class to inherit properties and methods from a parent class.
class Animal{
    constructor(name){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}
class Dog extends Animal{
    //dog class inherits name property and eat() method from animal class
    bark(){
        console.log(`${this.name} is barking`);
    }
    //add its own bark fn
}
const myDog=new Dog("Buddy");
//when we will create an obj of dog class it can use methods from both parent and its own class

myDog.bark();
myDog.eat();
//POLYMORPHISM
// Polymorphism in JavaScript means the same function without different signatures is called many times...
//poly means many and morphism means transforming 1 form into another
//it works in 2 ways method overriding and method overloading
//ABSTRACTION in js refers to the hiding complex implementation details and showing only the essential features/functionalities of an object.
//Encapsulation in JavaScript is an Object-Oriented Programming (OOP) concept that bundles data (properties) and methods (functions) that manipulate the data into a single unit (usually a class). It restricts direct access to some of an object's components and can only be accessed via public methods.
//