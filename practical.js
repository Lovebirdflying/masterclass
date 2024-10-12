
// using prototype of Reduced array created by me, it called array.soft

const soft = require('./arraysoft');

let age = [56, 89, 13, 34];

let sum = age.soft((a, b) => a + b, 0
)


console.log({_ArraySoft: sum})


/*
Function programming promotes writing clean, modular, and reusable code. By utilizing first-class functions, pure functions, immutability, and higher-order functions, you can create more predictable and maintainable applications.
We Key concepts which are:
First-Class Functions

1. Pure Functions
2. Immutability
3. Higher-Order Functions
4. Recursion
*/

//pure always gives the same result for the same inputs and has no side effects (it doesn’t change anything outside the function).

function multi(a, b){

    return a * b
}

var outcome = multi(3, 3)

console.log({_PureFunctionResult: outcome})

// First Class Function: it's first class citizens, it means they can be passed as an argument, returned by other functions, or assigned to variables.

const h = function(name){
    return `Hi, ${name}`
};

console.log("Function passed as variable:", h(`yebe`))


// Function passed as an Argument example: it is particularly useful for creating callbacks and handling asynchronous operations


function processData(data, callback){

    const result = data * 4;
    callback(result)
}

function showResult(result){
    console.log(`Function Pass as an argument Result:${result}`)
}

processData(7, showResult);


// Immutability: Instead of modifying arrays, you create new ones. For instance, using the spread operator to create a new array:

const showarr = [1, 2, 3, 4,5];

const newShowarr =[...showarr, 6];

console.log("immutability :",{_showarr: showarr}, {_newShowarr:newShowarr})

// Higher other function can accept other functions as arguments. Array map method is an example of  higher-order function

const numeric = [ 12, 8, 50, 7];

const doubled = numeric.map(num => num * 2)
console.log({_HigherFunctionMapMethod: doubled})

// Recursive can be used to process data. it a process of function repetitive call itself, factorial can be example

function factorial(n){
    if(n === 0){
        return 1
    }

    return n * factorial ( n - 1)
}

var output = factorial(6)

console.log({_RecursiveFunctin: output })