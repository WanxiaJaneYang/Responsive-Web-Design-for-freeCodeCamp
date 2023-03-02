const user = { name: 'John Doe', age: 34 };

/*
equivalent statement:
const name = user.name;
const age = user.age;
*/
const { name, age } = user;

// assign a new variable name using destructuring
const { name: newName, age: newAge } = user;
//"John Doe"
console.log(newName)

//assign new variable names in nested objects
const users = {
    user1: {
        name: "Jane",
        age: "4"
    },
    user2: {
        name: "Jean",
        age: 5
    }
}
const { user2: { name: changedName, age: changedAge } } = users;

//destructure with arrays
const [a, b] = [1, 2, 3, 4, 5];
//a=1, b=2
console.log(a, b);

//a=1,b=2
[b, a] = [a, b]
console.log(a, b)