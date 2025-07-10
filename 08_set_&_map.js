// // ------------------------------------------------------------------------------------------------------
// // linear search
// let arr = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9]
// function linearSearch(arr,k) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == k) {
//             return `found at index : ${i}`
//         }
//     }
//     return `Item not found : -1`
// }
// console.log(linearSearch(arr,8))
// console.log(linearSearch(arr,0))





// // ------------------------------------------------------------------------------------------------------
// // Binary search
// let arr=[1,2,3,4,5,6,7,8,9]
// function BinarySearch(arr,x){
//     let s=0, e=arr.length-1;
//     while(s<=e){
//         let mid = Math.floor((s+e)/2)
//         if(arr[mid] == x) return `found at index : ${mid}`
//         else if(arr[mid] < x) s = mid+1
//         else  e = mid-1
//     }
//     return `Item not found : -1`
// }
// console.log(BinarySearch(arr,9))





// // ------------------------------------------------------------------------------------------------------
// // Set 
// let set = new Set ()


// // add()
// set.add(10)
// set.add("hello")
// set.add(false)
// console.log(set)


// // delete()
// set.delete(false)
// console.log(set)


// // has()
// console.log(set.has(10))


// // size()
// console.log(set.size)


// // clear()
// set.clear()
// console.log(set)


// console.log()
// // forOf
// console.log('forOf : -')
// for (const ch of set) {
//     console.log(ch)
// }


// console.log()
// // ForEach
// console.log('forEach : -')
// set.forEach((x)=>{
//     console.log(x)
// })


// ------------------------------------------------------------------------------------------------------
// Map


// const map1 = new Map();


// // set
// map1.set("name", "rishi");
// map1.set("age", 20);
// map1.set("height", "174cm");
// // console.log(map1)


// const arr = [["name", "rishi"],["age", 20],["height", "174cm"]]
// const map2 = new Map(arr);
// console.log(map2)


// // get()
// console.log()
// console.log("----- get -----")
// console.log(map2.get("name"))
// console.log(map2.get("age"))


// // has()
// console.log()
// console.log("----- has -----")
// console.log(map1.has("height"))


// // delete()
// console.log()
// console.log("----- delete -----")
// console.log(map2.delete("height"))
// console.log(map2)


// // clear()
// console.log()
// console.log("----- clear -----")
// map2.clear()
// console.log(map2)


// // size
// console.log()
// console.log("----- size -----")
// console.log(map1.size)


// // traversal 
// // for of
// console.log()
// console.log("----- forOf -----")
// for (const [key,val] of map1) {
//     console.log(`${key} : ${val}`)
// }


// // forEach
// console.log()
// console.log("----- forEach -----")
// map1.forEach((ele,idx)=>{
//     console.log(`${idx} : ${ele}`)
// })


// ------------------------------------------------------------------------------------------------------
// Map Questions -


// ------------------------------------------------------------------------------------------------------
// for of - entries()
// const arr = [["name", "rishi"],["age", 20],["height", "174cm"]]
// const map1 = new Map(arr);
// for (const [key,val] of map1) {
//     console.log(`${key} : ${val}`)
// }


// ------------------------------------------------------------------------------------------------------
// // for of - keys()
// const arr = [["name", "rishi"],["age", 20],["height", "174cm"]]
// const map1 = new Map(arr);
// for (const [key,val] of map1) {
//     console.log(`${key}`)
// }


// ------------------------------------------------------------------------------------------------------
// for of - values()
// const arr = [["name", "rishi"],["age", 20],["height", "174cm"]]
// const map1 = new Map(arr);
// for (const [key,val] of map1) {
//     console.log(`${val}`)
// }





// ------------------------------------------------------------------------------------------------------
// problem 1 - count unique ele in an array
// let arr = [1,2,3,4,5,6,7,2,3,4,5]
// let set = new Set(arr)
// console.log(set.size)





// ------------------------------------------------------------------------------------------------------
// problem 2 - check if array contains duplicate elements
// let arr = [1,2,3,4,5,6,7,2,3,4,5]
// let arr = [1,2,3,4,5,6,7]
// let set = new Set(arr)
// console.log(`contains duplicate elements : ${!(set.size == arr.length)}`)





// ------------------------------------------------------------------------------------------------------
// problem 3 - Character freq using map

// let map = new Map()
// let ch = "qwertyuiopsdfghj"
// for(let i=0 ; i< ch.length ; i++){
//     if(map.has(ch[i])){
//         map.set(ch[i],map.get(ch[i])+1)
//     }else{
//         map.set(ch[i], 1)
//     }
// }
// console.log(map)


// ------------------------------------------------------------------------------------------------------
// problem 4 - find first repeting element
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]
// let set = new Set()
// function chechDup(arr,set) {
//     for (let i = 0; i < arr.length; i++) {
//         if (set.has(arr[i])) {
//             return arr[i]
//         }
//         set.add(arr[i])
//     }
// }
// console.log(chechDup(arr,set))
