let arr = [
    [1,2,3],
    [3,4,5],
    [5,6,7]
];
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
for(let i=0 ; i<arr.length ; i++){
    for(let j=0 ; j < arr[i].length ; j++){
        console.log(arr[i][j])
    }
}
