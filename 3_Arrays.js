let arr = [1, 2, 3, 4, 5, 6];

// array basics 

// printing Array - method 1
// console.log(arr)
// printing Array - method 2
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }
// printing Array - method 3
// for (const element of arr) {
//     console.log(element)
// }

// array operations
// let arr = [2, 4, 6, 8];

// inserting an elem
// inserting at the end
// let x = arr.push(100);
// console.log(arr);
// console.log(x);

// inserting at the start
// arr.unshift(100);
// console.log(arr);



// removing an element
// removing from end
// let x = arr.pop();
// console.log(arr);
// console.log(x);

// removing from start
// arr.shift();
// console.log(arr);




// arr.splice(starting index, no. of elems to be removed, elem to insert)

// removing from middle
// let arr = [2, 4, 6, 8];
// let x = arr.splice(2, 1);
// console.log(arr);
// console.log(x);

// inserting in between
// arr.splice(2, 0, 100);
// console.log(arr);



// finding index of an element
// console.log(arr.indexOf(6));



// reversing an array
// arr.reverse();
// console.log(arr);

// sorting an array
// let a = [3, 1, 5, 7, 6, 9, 4];
// a.sort();
// console.log(a);

// concat
// let a1 = [1, 2, 3];
// let a2 = [4, 5, 6];
// let newArr = a1.concat(a2);
// console.log(a1);
// console.log(a2);
// console.log(newArr);





// higher order functions
// takes function as an argument (callback fun) OR
// returns a function

// let arr = [2, 4, 6, 8];

// forEach()
// arr.forEach((elem) => {
//     console.log(elem*2);
//     // arr[0] = 100;
// })

// console.log(arr);

// it does not modify original array
// it returns undefined



// map()
// let newArr = arr.map((elem) => {
//     return elem * 2;
// });
// console.log(arr);
// console.log(newArr);

// it returns new transformed array
// it does not modify original array



// filter()
// let a = [5, 8, 2, 3, 11, 7];
// let filteredArr = a.filter((elem) => {
//     return elem > 5;
// });

// console.log(filteredArr);





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

