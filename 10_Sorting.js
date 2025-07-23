// ------------------------------------------------------------------------------------------------------
// 1. selection sort

// dry run - 
// Eg.:  7, 5, 2, 9, 8
//  2, 5, 7, 9, 8    // pass 1
//   ^
//  2, 5, 7, 9, 8    // pass 2
//   ^  ^
//  2, 5, 7, 9, 8    // pass 3
//   ^  ^  ^
//  2, 5, 7, 8, 9    // pass 4
//   ^  ^  ^  ^

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

// dry run - 
//   7, 5, 9, 2, 8   --|
//   5, 7, 9, 2, 8     |
//   5, 7, 9, 2, 8     |     pass 1 - (9 has been pushed to the last)
//   5, 7, 2, 9, 8     |
//   5, 7, 2, 8, 9   --|     

//   5, 7, 2, 8, 9   --|
//   5, 7, 2, 8, 9     |     pass 2 - (8, 9 are on the right position)
//   5, 2, 7, 8, 9     |
//   5, 2, 7, 8, 9   --|     

//   5, 2, 7, 8, 9   --|
//   2, 5, 7, 8, 9     |     pass 3 - (7, 8, 9 are on the right position)
//   2, 5, 7, 8, 9   --|     

//   2, 5, 7, 8, 9   --|     pass 4 - (5, 7, 8, 9 are on the right position)

//   2, 5, 7, 8, 9   --|     Output 

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




// ------------------------------------------------------------------------------------------------------
// 3. Insertion sort 

// dry run - 
// 12 43 21 53 17 8
// 12 21 43 53 17 8
// 12 17 21 43 53 8
//  8 12 17 21 43 53


// function InsertionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++) {
//         let j = i;
//         while (j > 0 && arr[j - 1] > arr[j]) {
//             [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
//             j--;
//         }
//         console.log(arr.join(" "))
//     }
//     // console.log(arr)
// }
// let arr = [2, 4, 5, 3, 5, 2, 37, 97, 0]
// InsertionSort(arr)




// ------------------------------------------------------------------------------------------------------
// 4. Merge sort 

// dry run - 
//  step 1 - divide
// 
//       [4,2,3,1]
//         /   \
//      [4,2]  [3,1]
//      / \     / \
//    [4] [2]  [3] [1]

//  step 2 - sort & merge
// 
//    [4] [2]  [3] [1]
//     \   /    \   /
//     [2,4]    [1,3]
//        \      /
//       [1,2,3,4]


// function MergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     // step 1 - divide
//     let mid = Math.floor(arr.length / 2)
//     let left = arr.slice(0, mid)
//     let right = arr.slice(mid)

//     // step 2 - Sort and merge
//     return merge(MergeSort(left), MergeSort(right))
// }

// function merge(left, right) {
//     let res = []
//     let i = 0, j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             res.push(left[i]);
//             i++;
//         } else {
//             res.push(right[j]);
//             j++;
//         }
//     }
//     while (i < left.length) {
//         res.push(left[i]);
//         i++;
//     }
//     while (j < right.length) {
//         res.push(right[j]);
//         j++;
//     }

//     return res
// }

// let arr = [2, 4, 5, 3, 5, 2, 37, 97, 0]
// console.log(MergeSort(arr))


// ------------------------------------------------------------------------------------------------------
// 5. Quick sort

// 1.pick a pivot : choose one ele from the array (can be any ele)
// 2.partition : arragge ele so that 
//  - all ele are smaller than the pivot go its left
//  - all ele are greater than the pivot go its right
// 3.recursively sort: apply quick sort to the left & rigth parts until whole array is sorted


// dry run - 
// [38, 27, 43, 3, 9, 82, 10]

// 1. first call
// pivot = 10
// left : [3, 9]
// right : [38, 27, 43, 82]
// result : [...qs([3, 9]), 10, ...qs([38, 27, 43, 82])]

// 2. second call
// pivot = 9
// left : [3]
// right : []
// result : [3, 9]

// 3. third call
// pivot = 82
// left : [38, 27, 43]
// right : []
// result : [...qs([38, 27, 43]), 82]

// 4. fourth call
// pivot = 43
// left : [38, 27]
// right : []
// result : [...qs([38, 27]), 43]

// 5. fifth call
// pivot = 27
// left : []
// right : [38]
// result : [27, ...qs([38])]

// RESULT : [3, 9, 10, 27, 38, 43, 82]




// function QuickSort(arr){
//     if(arr.length <= 1){
//         return arr;
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []

//     for(let i=0 ; i <arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }

//     return [...QuickSort(left),pivot,...QuickSort(right)]
// }


// let arr = [2, 4, 5, 3, 5, 2, 37, 97, 0]
// console.log(QuickSort(arr))




