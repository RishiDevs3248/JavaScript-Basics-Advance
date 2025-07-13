// def - Recursion is a programming technique where a function calls itself until the base case is hit to solve a problem.

// function function_name(parameters){
//     // step 1 - base case


//     // step 2 - kaan (your work)


//     // step 3 - recursion
// }



// Note -
// when some code is written before recursive function call it gets executed going upward in the call stack
// when some code is written after recursive function call it gets executed going downward in the call stack





// ------------------------------------------------------------------------------------------------------
// problem 1 -  print in decreasing no.
// function decREc(n){
//     if(n  == 0){
//         return;
//     }
//     console.log(n)
//     decREc(n-1)
// }
// decREc(5)




// ------------------------------------------------------------------------------------------------------
// problem 2 - print in incresing no.
// function incRec(n){
//     if(n == 0){
//         return;
//     }
//     incRec(n-1)
//     console.log(n)
// }
// incRec(5)    






// ------------------------------------------------------------------------------------------------------
// problem 3 - print in decreasing and incresing no.
// function Rec(n){
//     if(n == 0){
//         return;
//     }
//     console.log(n)
//     Rec(n-1)
//     console.log(n)
// }
// Rec(5) 





// ------------------------------------------------------------------------------------------------------
// problem 4 - factorial
// function fact(n){
//     if(n<1){
//         return 1;
//     }
//     return n*fact(n-1)
// }
// console.log(fact(5))





// ------------------------------------------------------------------------------------------------------
// problem 5 - x raised to n (power)
// function pow(x,n){
//     if(n<=1){
//         return x;
//     }
//     return x*pow(x,n-1)
// }
// console.log(pow(5,4))





// ------------------------------------------------------------------------------------------------------
// problem 6 - print array 
// function print(arr, n) {
//     if (n == arr.length) {
//         return;
//     }
//     console.log(arr[n])
//     print(arr, n + 1)
// }
// let arr = [1, 2, 3, 4, 5]
// print(arr, 0)





// ------------------------------------------------------------------------------------------------------
// problem 7 - max element in an array
// function maxEle(arr, n) {
//     if (n == arr.length-1) {
//         return arr[arr.length-1];
//     }
//     // return Math.max(maxEle(arr, n + 1), arr[n])
//     if(arr[n] < maxEle(arr, n + 1)){
//         return maxEle(arr, n + 1)
//     }
//     return arr[n] 
// }
// let arr = [5,3,9,7,8]
// console.log(maxEle(arr, 0))


