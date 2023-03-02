class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }
}


var studentA = new Student("Dam", 3);

//Student{_name:'Dam', age:3}
console.log(studentA)