//this is a recursion function that returns an array
function countdown(n) {
    if (n <= 0) {
        return [];
    } else {
        //for some unknown reason, return countdown（n-1）will not get an array but a number. return arr.unshift(n) will not work either.
        let arr = countdown(n - 1);
        arr.unshift(n)
        return arr;
    }
}

console.log(countdown(2))