/**
 * we must initialized when declare a variable with const
 * const object is actually mutable
 */

//however, "const arr;" is a invalid statement
const arr = [1, 2, 3]
//change to [0,2,3]; " arr=[0,2,3];" is invalid
arr[0] = 0
console.log(arr)

//another example
const car = {
    color: "red",
    price: 200
}
car.color = "white";
console.log(car);
