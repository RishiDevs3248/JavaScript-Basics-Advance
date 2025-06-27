// ------------------------------------------------------------------------------------------------------
// Ways to create an objects


// // method 1 - Object literals
// console.log("method 1 - Object literals")
// const car = {
//     car : "BMW",
//     model : "M5 Compitition",
//     modelPic : `⠀hello`,
//     color : "Grey",
//     start : function(){
//         console.log("engine start")
//     }
// }
// console.log(car.car)
// console.log(car.model)
// console.log(car.color)
// console.log(car.modelPic)
// console.log(car.start())

// console.log("------------------------------------------------------------------------------------------------------")

// // method 2 - Object constructor
// console.log('method 2 - Object constructor')
// const porchse = new Object();
// porchse.model="911"
// porchse.version = "GT3 RS"
// porchse.xyz = function(){
//     return (`porsche`)
// }


// console.log(porchse)
// console.log(porchse.xyz())

// console.log("------------------------------------------------------------------------------------------------------")

// // method 3 - constructor function
// console.log("method 3 - constructor function")
// function AstonMartin (name,color){
//     this.name = name;
//     this.color  = color;
//     this.model = `....`,
//     this.EngineRev = function(){
//         console.log(`${this.name} Engine Revs Sound :  Whooooooooooooooooooooooooooooooooom Whooooooooooooooooooooooooooooooooom`)
//     }
// }
// let obj = new AstonMartin("Lambo","Navy green")
// console.log(obj.name)
// console.log(obj.color)
// console.log(obj.model)
// console.log(obj.EngineRev())


















// //------------------------------------------------------------------------------------------------------
// Restart from basics 
// let person = {
//     id : 101,
//     fname : "rishi",
//     lname : "Alabnur",
//     greet : ()=>{
//         return "Hello"
//     }
// }

// console.log(person)
// console.log(person.id) // allow accessing the exact key value pair
// console.log(person["id"]) // allow accessing the key:value pair for different data-types , or also for using variables


// add a key:value pair
// person.email = "rishi@gmail.com"
// console.log(person)

// call a method 
// console.log(person.greet())


// to get all the keys , values , and key:value
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))





// ------------------------------------------------------------------------------------------------------
// destructuring 
// method 1 - Array destructuring 
// let arr = [100,200,300,400]
// let one = arr[0]
// let two = arr[0]
// let three = arr[0]
// let four = arr[0]

// let [one,two,three,four] = arr;
// console.log(one,two,three,four)

// let [one,two,,four] = arr;
// console.log(one,two,four)

// let [one,two,three,four,five = "1000"] = arr; // default values in destructuring
// console.log(one,two,three,four,five)


// method 2 - Object destructuring 
// let person = {
//     id : 101,
//     fname : "rishi",
//     lname : "Alabnur",
//     greet : ()=>{
//         return "Hello"
//     }
// }

// let id = person.id;
// let fname = person.fname;
// let lname = person.lname;

// let {id,fname,lname} = person //here your variable name should be same as the keys in object
// console.log(id,fname,lname)

// let {id,fname:firstName,lname} = person // rename your keys as you want using key:newname
// console.log(id,firstName,lname)

// person.place = "Pune"
// let {id,fname,lname,place = "Munbai"} = person // default values in destructuring
// console.log(id,fname,lname,place)







// ------------------------------------------------------------------------------------------------------
// spread operator (...)

// let arr1 = [2,4,6]
// let arr2 = arr1   // arr2 is just a reference to arr1 , and 
// arr1[0] = 100
// console.log(arr1)
// console.log(arr2)


// let arr2 = [...arr1];
// arr1[0] = 100
// console.log(arr1)
// console.log(arr2)

// let arr3 = [...arr1,10,20,30,40]
// console.log(arr3)

//concatinating two arr's
// let a = [1,2,3]
// let b = [4,5,6]
// let c = [...a,...b]
// console.log(c)

//concatinating two objs
// let s = {
//     a : 1,
//     b: 2
// }
// let r = {
//     b: 6,
//     c:7
// }
// let z = {...s,...r} //concatinating obj , bur here b is double so it overwrites it 
// console.log(z)







// ------------------------------------------------------------------------------------------------------
// rest operator (...)

// function sum (a,b){
//     return a+b
// }
// function sum (a,b,c){
//     return a+b+c
// }
// function sum (a,b,c,d){
//     return a+b+c+d
// }
// --> here the no of inputs depends on the user , and you cannot write every function
// console.log(sum(1,2,3,4,5,6,7,8,9,0))

// usig rest operator 
// function sum (...numbers){
//     let x = 0 
//     for(let i=0 ; i<numbers.length ; i++){
//         x+=numbers[i];
//     }
//     return x;
// }
// console.log(sum(1,2,3,4,4,5,5,6,6,7,8,9))


// let arr = [1000,1,2,3,4,5,6,0]
// let [first , ...rest] = arr;
// console.log(first)
// console.log(rest)

// let obj = {
//     id : 101,
//     fname : "rishi",
//     lname : "Alabnur",
//     greet : ()=>{
//         return "Hello"
//     }
// }

// let {fname,...allRestObjProperties} = obj;
// console.log(fname)
// console.log(allRestObjProperties)







// ------------------------------------------------------------------------------------------------------
//map // idea of map

// let m1 = new Map();
// m1.set("name","rishi");
// m1.set("age",20);
// m1.set("place","pune");

// console.log(m1)
// console.log(m1.get("age"))

// console.log(m1.has("age"))
// console.log(m1.has("email"))

// traversing
// console.log("--------------for--------------")
// for(let [key,value] of m1){
//     console.log(key ," : ",value)
// }
// console.log("------------forEach------------")
// m1.forEach((value,keys)=>{ // in forEach you always get value first
//     console.log(keys ," : ",value)
// })

// console.log(m1.keys())
// console.log(m1.values())
// console.log(m1.entries())






// ------------------------------------------------------------------------------------------------------
// JSON : Basic idea of json

// // difference between JSON & Js Object
// // JSON is a text-based data format, while a JavaScript object is a data structure within JavaScript
// // JSON requires double quotes around keys, while JavaScript objects do not. 
// // JSON is used for data exchange between systems, while JavaScript objects are used within JavaScript code for data manipulation

// // this is an obj
// let user = {
//     name : "rishi",
//     age : 20,
//     emial : "rishi@gmail.com"
// }

// let x = JSON.stringify(user) // converting Object into JSON
// console.log(x)

// console.log(JSON.parse(x)) // converting JSON into Object