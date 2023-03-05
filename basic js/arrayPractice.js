/**
 * 
 * @param {*} arr an array that contains multiple arrays
 * @param {*} elem 
 * @returns a new array that removes arrays containing the elem inside the given array
 */
function filteredArray(arr, elem) {
    let newArr = [];

    for (let a of arr) {
        if (a.indexOf(elem) < 0) {
            newArr.push(a);
        }
    }

    return newArr;
}