// Lexical Scoping (also called Static Scoping)

// Definition: -
// In JavaScript, lexical scope means that the scope of a variable is defined by its position in the source code. Nested functions have access to variables declared in their outer (parent) functions.

// How it works:-
// The function's scope is determined at the time of writing the code, not when the function is executed.



// function outer(){
//     let count = 0
//     return function inner(){
//         count++;
//         console.log(count)
//     }
// }

// let x = outer()
// x()






// Closure

// Definition:
// A closure is created when a function "remembers" its lexical scope even when it is executed outside of that scope.

// In short:
// Closure = Function + Lexical Environment (variables it had access to when it was created)



function outer(){
    let count = 0
    return function inner(){
        count++;
        console.log(count)
    }
}

let x = outer()
x()//closure
x()
x()
x()
x()
