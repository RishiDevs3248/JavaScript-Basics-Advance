// ------------------------------------------------------------------------------------------------------
// 1. selection sort

// function selectionSort(arr){
    // let n = arr.length;
    // for(let i=0 ; i<n-1 ; i++){
    //     let min  =i ;
    //     for( let j = i; j < n; j++){
    //         if(arr[min] > arr[j]){
    //             min = j;
    //         }
    //     }
    //     let temp = arr[min]
    //     arr[min] = arr[i]
    //     arr[i] = temp
    // }
//     console.log(arr)
// }
// let arr = [2,4,5,3,5,2,37,97,0]
// selectionSort(arr)





// ------------------------------------------------------------------------------------------------------
// 2. bubble sort


// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         let isSwapped = false
//         for (let j = 0; j < n-i; j++) {
//             if (arr[j] > arr[j+1]) {
//                 // let temp = arr[j]
//                 // arr[j] = arr[j+1]
//                 // arr[j+1] = temp
//                 [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//                 isSwapped = true
//             }
//         }
//         if( isSwapped == false){
//             break;
//         }
//     }
//     console.log(arr)
// }
// let arr = [2, 4, 5, 3, 5, 2, 37, 97, 0]
// bubbleSort(arr)

