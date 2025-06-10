// Traditional functions 

// function function_name(parameters){
//      body
// }

// function_name(arguments)

function sum3(a,b){
    return a+b;
}



// function expression

// method 1 = anonymous function
let sum = function (a,b){
    return a+b;
}
sum(4,5)

// method 2 = arrow function
let sum2 = (a,b)=>{
    return a+b;
}
sum2(4,6)


// if you only have a single parameter you don't need to give "()" brackets , and if you only have a return fun in your body you dont give "{}" brackets and don't need to write the return keyword

let example = a => a+10;

