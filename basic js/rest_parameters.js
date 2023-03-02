//const is safer than var for functions
//rest parameters allows us take a variable number of arguments and apply map(), filter() and reduce() on the parameters array.
const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}