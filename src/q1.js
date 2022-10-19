/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap (x, y) {
    if(isNaN(x) || isNaN(y)) {
        return -1;
    }
    [x, y] = [y, x];
    return [ x, y ]
}

// Task 2: Add code here
let x = 10;
let y = 20;

if(swap(x, y) === -1) {
    console.log("Error: x and y variables must be intergers")
    return
} else {
    [ x, y ] = swap(x, y);
    console.log("After invoking swap function....:")
    console.log(x);
    console.log(y);
}

module.exports = swap;
