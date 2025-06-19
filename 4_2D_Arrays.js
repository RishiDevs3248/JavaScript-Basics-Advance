// let arr = [
//     [1, 2, 3],
//     [3, 4, 5],
//     [5, 6, 7]
// ];


// //Accessing inner arrays
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])


// //Accessing inner arrays elements
// console.log(arr[0][0])
// console.log(arr[1][0])
// console.log(arr[2][0])


//Accessing inner arrays elements using loop
// for(let i=0 ; i<arr.length ; i++){
//     console.log(arr[i])
// }


//Accessing inner arrays elements using loop
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }


//Accessing inner arrays elements using forOf loop
// for(let elem of arr){
//     for(let x of elem){
//         console.log(x)
//     }
// }


let data = [[10, 20], [30, 40], [50, 60]]
// ------------------------------------------------------------------------------------------------------
// problem 1 - access 40
// console.log(data[1][1])


// ------------------------------------------------------------------------------------------------------
// problem 2 - change value of 30 to 95
// data[1][0] = 95
// console.log(data)


// ------------------------------------------------------------------------------------------------------
// problem 3 - print all value row by row
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         process.stdout.write(`${data[i][j]} `);
//     }
//     console.log()
// }


// ------------------------------------------------------------------------------------------------------
// problem 4 - count total no of elem in 2d array
// let count = 0 
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         count++
//     }
// }
// console.log(count)

// or 

// let count = 0 
// for (let i = 0; i < data.length; i++) {
//     count += data[i].length
// }
// console.log(count)


// ------------------------------------------------------------------------------------------------------
// problem 5 - Sum of all ele 
// let sum = 0 
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         sum += data[i][j]
//     }
// }
// console.log(sum)


// ------------------------------------------------------------------------------------------------------
// problem 6 - flatten the nested array

// let farr = []
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         farr.push(data[i][j])
//     }
// }
// console.log(farr)

//or 

// console.log(data.flat())


// ------------------------------------------------------------------------------------------------------
// problem 7 - get first elem of each inner array
// for (let i = 0; i < data.length; i++) {
//     console.log(data[i][0])
// }


// ------------------------------------------------------------------------------------------------------
// problem 8 - convert all even no to 0
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         if(data[i][j]%2 == 0){
//             data[i][j] = 0
//         }
//     }
// }
// console.log(data)


// ------------------------------------------------------------------------------------------------------
// problem 9 - count all odd elem
// let count = 0 
// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data[i].length; j++) {
//         if(data[i][j]%2 == 1){
//             count++
//         }
//     }
// }
// console.log(count)


// ------------------------------------------------------------------------------------------------------
// problem 10 - add a new inner array
// data.push([1,2,3,4,5,6,7,8])
// console.log(data)


// revision class

// ------------------------------------------------------------------------------------------------------
// Factorial of any given number n is represented as n! = n * n-1 * n-2 .....* 1.

// let n = 10;

// let fact = 1 ;
// for(let i=1 ; i<n ; i++){
//     fact *= i ;
// }
// console.log(fact)


// console.log([]+[]) --> empty string
