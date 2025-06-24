// let name = 'rishi';
// console.log(name.charAt(0))
// console.log(name.length)
// console.log(name.includes("man"))
// console.log(name.endsWith("shi"))
// console.log(name.startsWith("Ri"))
// console.log(name.indexOf("s"))


// function endsWith(str, substr){
//     for(let i=substr.length-1 , j = str.length-1; i>=0 && j>=0; i--,j--){
//         if(str.charAt(j)!==substr.charAt(i)){
//             return false
//         }
//     }
//     return true
// }

// console.log(endsWith("rishi","hi"))
// console.log(endsWith("hello world its party time", "ytime"));

// let name = '   rishi    ';
// console.log(name.length)
// console.log(name.trim().length)

let x = "a.b..c..d."
// console.log(x.split("."))

// function split(str,splits){
//     let arr = []
//     for(let i=0 ; i<str.length ; i++){
//         if(str.charAt(i) !== splits){
//             arr.push(str.charAt(i))
//         }
//     }
//     return arr
// }
// console.log(split("a.b..c..d..","."))



console.log(x.split(".").reverse().join(""))
