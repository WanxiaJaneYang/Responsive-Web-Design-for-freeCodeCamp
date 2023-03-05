function Dog(name) {
    this.name = name;
}

//prototype property is like static field in java, all the instance share the same attribute
Dog.prototype.numLegs = 4;

//we could also write like this to set prototype property/function
Dog.prototype = {
    bark: function () {
        console.log("wang wang wang");
    }
}

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];


for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop)
    } else {
        prototypeProps.push(prop)
    }
}
