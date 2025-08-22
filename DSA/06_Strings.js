let name = 'rishi';
// console.log("charAt : "+name.charAt(0))
// console.log("length : "+name.length)
// console.log("includes : "+name.includes("man"))
// console.log("endsWith : "+name.endsWith("shi"))
// console.log("startsWith : "+name.startsWith("Ri"))
// console.log("indexOf : "+name.indexOf("s"))


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


//------------------------------------------------------------------------------------------------------
// Strings from basics

// let str = "rishi";

// console.log(str[0])
// console.log(str.charAt(0))

// console.log(str.length)

// for(let i=0 ; i<str.length ; i++){
//     console.log(str[i])
// }

// for(let ch of str){
//     console.log(ch)
// }


// console.log(str.toUpperCase())
// console.log(str.toLowerCase())


// console.log(str.indexOf("i"))
// console.log(str.lastIndexOf("i"))

// console.log(str.replace("i","I")) // just replace first found 
// console.log(str.replaceAll("i","I"))


// console.log(str.slice(0,3))


// console.log(str.charCodeAt(0))


// console.log(str.includes("i"))
// console.log(str.startsWith("r"))
// console.log(str.endsWith("i"))


// let trimstr = "       eldjcnm.      "
// console.log(trimstr)
// console.log(trimstr.trim())


// ------------------------------------------------------------------------------------------------------
// problem 1 - count vowels

// let str = "qwertyuiopasdfghjklxcvbnm";
// let str = "";
// str = str.toLowerCase()

// let count = 0
// for(let i=0 ; i < str.length ; i++){
//     if(str[i] == "a" || str[i] == "e" ||str[i] == "i" ||str[i] == "o" ||str[i] == "u" ){
//         count++
//     }
// }

// console.log(count)

// let pattern = /[aeiou]/ig
// console.log((str.match(pattern) || []).length)
// console.log(str.match(pattern))
// ------------------------------------------------------------------------------------------------------
// problem 2 - reverse s string

// console.log(str.split("").reverse().join(""))

// let rev = ""
// for(let i=str.length-1 ; i>=0 ; i-- ){
//     rev += str[i]
// }
// console.log(rev)


// ------------------------------------------------------------------------------------------------------
// problem 3 - is palindrome

// let str = "coooooooooooooc";
// if(str == str.split("").reverse().join("")){
//     console.log(true)
// }else{
//     console.log(false)
// }



// ------------------------------------------------------------------------------------------------------
// problem 4 - replace all space with "_"

// let str = "a sd fcmk lkweldw mcewlk cwqlk"
// console.log(str.replaceAll(" ","_"))


// ------------------------------------------------------------------------------------------------------
// problem 4 - count words in a sentence

// let str = "a sd fcmk lkweldw mcewlk cwqlk"
// console.log(str.split(" ").length)



