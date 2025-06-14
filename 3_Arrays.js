let arr = [1, 2, 3, 4, 5, 6];

// array basics 

// printing Array - method 1
// console.log(arr)
// printing Array - method 2
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// printing Array - method 2
// for (const element of arr) {
//     console.log(element)
// }



// ------------------------------------------------------------------------------------------------------
//problem - 9 : filter no grater than 5


// ------------------------------------------------------------------------------------------------------
//problem - 10 : double each elements in array
// let arr2 =[]
// for(let i=0; i<arr.length ; i++){
//     arr2.push(arr[i]*2);
// }
// console.log(arr2)


// ------------------------------------------------------------------------------------------------------
// problem - 11 : print all ele using for each
// arr.forEach((ele)=>{
//     console.log(ele)
// })


// ------------------------------------------------------------------------------------------------------
// problem 12 - double each element using map
// let newArr = arr.map((ele)=>{
//     return ele*2
// })
// console.log(newArr)


// ------------------------------------------------------------------------------------------------------
// problem 13 - print only even numbers using filters
// function even (arr){
//     let newarr = arr.filter((element)=>{
//         return element%2==0
//     })
//     return newarr
// }
// console.log(even(arr))


// ------------------------------------------------------------------------------------------------------
// problem 14 - Add Hi before each name using map
// function addHi(arr) {
//     let newaee = arr.map((ele) => {
//         return "hi " + ele;
//     })
//     console.log(newaee)
// }
// addHi(arr)


// ------------------------------------------------------------------------------------------------------
// problem 15 - count +ve no using for each
// function countPositive() {
//     let count = 0;
//     arr.forEach((ele) => {
//         if (ele > 0) {
//             count++
//         }
//     })
//     console.log(count)
// }
// countPositive(arr)


// ------------------------------------------------------------------------------------------------------
// problem 16 - convert all string to UpperCase using map
// let arr2= ["a","b","c","d"];

// function toUpperCase(arr){   
//     let newarr = arr.map((ele)=>{
//         return ele.toUpperCase();
//     })
//     console.log(newarr)
// }

// toUpperCase(arr2)


// ------------------------------------------------------------------------------------------------------
// problem 17 - find all ele greater than 50 using filter
// let arr2 = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// function findGreaterThan50(arr) {
//     let newarr = arr.filter((ele) => {
//         return ele > 50
//     })
//     console.log(newarr)
// }
// findGreaterThan50(arr2)


// ------------------------------------------------------------------------------------------------------
// problem 18 - print each ele with each index using foreach
// arr.forEach((ele,idx)=>{
//     console.log(`arr[${idx}] : ${ele}`)
// })


// ------------------------------------------------------------------------------------------------------
// problem 19 - Add 10 to each no using map
// function Add10(arr) {
//     let newarr = arr.map((ele) => {
//         return ele + 10
//     })
//     console.log(newarr)
// }
// Add10(arr);

