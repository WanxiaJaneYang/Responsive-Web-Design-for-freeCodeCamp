//create a parent class Animal
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

//create a child class Dog
function Dog() { }

// set the prototype of dog as the instance of the prototype of Animal
Dog.prototype = Object.create(Animal.prototype)
let beagle = new Dog();
beagle.eat()