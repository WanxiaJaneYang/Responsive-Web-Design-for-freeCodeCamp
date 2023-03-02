class Student {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }

    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name
    }
}

var pgStudentA = new Student("Dan", 3, "male");
console.log(pgStudentA)