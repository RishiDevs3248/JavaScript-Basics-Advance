// // ------------------------------------------------------------------------------------------------------
// // Ways to create an objects


// // method 1 - Object literals
// console.log("method 1 - Object literals")
// const car = {
//     car : "BMW",
//     model : "M5 Compitition",
//     modelPic : 
//     `⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡤⢤⣶⣶⣶⣶⣶⣒⣒⣀⣺⣿⣿⠿⢶⣶⣶⣶⣦⣤⣤⣤⣄⣀⣀⣀⣀⡀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⠴⠚⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠛⠒⠲⠦⢤⣉⠙⣿⣿⣿⣟⢿⣿⠿⠿⠿⢿⣿
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣶⣷⡦⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠈⠛⢿⣿⡀⠀⠀⠀⠻
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⠤⢴⣿⣉⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠇⠀⠀⠀⠀⠙⣿⣄⡀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⡶⠞⠛⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠓⠒⠒⠢⠤⠤⣄⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⠀⢠⠤⠤⠤⣤⣾⠀⠙⢦⡀
// ⠀⠀⠀⠀⠀⠀⠀⠀⣠⠴⣾⣛⣩⢴⣿⠿⠶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠙⠒⠒⠒⠤⠤⢤⣤⣾⢿⣴⢏⣀⣀⣤⡼⠻⡆⠀⠈⢷
// ⠀⠀⠀⠀⠀⢀⣴⠋⠁⠀⠀⠀⠀⠙⠓⠲⠤⠬⠷⠀⠀⢀⣀⣀⣀⣀⣀⣀⣀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⠤⡞⠉⠀⠀⠹⡟⠀⠀⠀⠀⠀⢱⠀⢠⣼
// ⠀⠀⠀⣀⡴⠋⠈⢙⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠛⠢⠤⢄⣀⣠⠴⠛⣋⣠⠴⠒⠉⠉⢉⣲⠶⠀⣀⡠⠤⠒⠊⠉⠁⠀⠀⠀⠠⠀⡂⠐⢹⠂⠀⠀⠀⠀⣼⢰⣿⣿
// ⡀⣠⣼⠏⠀⠀⣰⠟⠦⢤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⠒⠒⠒⠋⣉⠤⠒⠋⠁⠀⠀⠀⠀⡀⠠⠀⠈⠀⠁⠀⠀⠀⢸⠀⠀⠀⠀⢀⣯⣼⣿⣿
// ⡟⠋⠹⢤⣠⠞⠁⠀⠀⠀⠀⠈⠉⠐⠲⠤⢄⣀⡀⠀⠀⠀⠀⣀⠤⠤⠤⠤⠤⣄⣀⣀⠀⢀⡠⠖⠋⠀⠀⠀⠄⡠⢐⠤⠀⠂⠀⣀⣀⡀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢸⣿⣿⣿⣿
// ⢻⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⢒⡶⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⢦⠀⠀⠀⠈⠈⠀⠀⠀⠀⢀⣴⣿⡿⣿⡝⣆⠀⠀⠀⠴⣽⠤⠞⣠⣵⠿⣻⣿⣿⠈
// ⢿⣿⣿⠶⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⠇⠀⠀⠀⠀⣀⣀⣤⣤⣾⣿⢿⡆⢸⣧⢹⠀⠄⣪⣶⣿⣴⠟⢋⣥⠴⢻⣿⠏⠀
// ⢸⣿⣿⡇⠀⠘⣿⣶⣦⣤⣀⡀⠀⠀⠀⠀⠀⠀⠈⠑⠲⠤⢤⣀⣀⡀⠀⠀⠀⠀⠀⠀⣀⣀⣞⣀⣠⣤⣾⣿⣿⣿⣿⣿⣿⢻⢸⣿⣾⣿⣾⣤⣾⣿⠿⢋⡡⠞⠉⠉⠉⠉⠀⠀⠀
// ⣼⡟⣿⡇⠀⠀⢹⣄⠈⠙⠒⠯⣽⣶⢶⣤⣤⣄⣀⣀⠀⠀⠀⠀⠈⠙⠻⠿⠿⠿⠿⠿⠿⠛⠛⠛⢉⣉⣽⠶⣿⠟⣿⣿⣧⣿⣾⣿⣿⡇⢹⡿⠋⣡⠖⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⣇⠳⣼⣧⠴⠛⠉⠉⠉⠒⣦⣤⣀⡀⠀⠀⠉⠙⢦⠀⠉⠉⢙⣷⣶⠒⠒⠒⠶⡶⠶⠶⢶⣤⠖⠚⠉⠁⠀⣰⣷⠾⣿⢿⢥⣼⣾⣿⣿⠃⣸⣠⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠈⠳⣌⣿⢦⣄⠀⢀⣴⣿⣿⣷⣿⡯⣗⠲⠤⣀⡈⣇⠀⠀⠻⡄⠈⣷⠀⠀⠀⡿⠒⠶⠾⢿⠀⠀⠀⢠⣾⡏⠁⣸⡇⢸⡸⢠⡌⢡⣿⠴⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠈⠙⠳⢿⣙⠺⢽⣿⣮⣿⣿⠗⠋⠀⠀⠀⠉⡿⠀⠀⣀⣹⣿⣯⣤⣶⣚⣛⣒⣛⣓⣿⠀⠀⠀⢽⣿⣶⣶⡏⢧⣼⣷⡿⢁⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠈⠙⠢⢬⣙⠛⠧⢤⣀⣀⠀⢀⣴⠃⠀⢀⣹⢦⣤⣉⣉⣯⣍⣹⣿⣿⣿⡃⣀⡤⠴⠛⠋⠁⠀⡇⠘⣜⣏⣠⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⠦⢤⣈⡉⠉⠙⠛⠛⠛⠲⠤⠤⠤⠴⣶⣶⣿⣿⢿⡿⣯⠀⠀⠀⠀⠀⢀⣠⡟⠤⠿⠟⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀
// ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠙⠒⠲⠤⢤⣄⣀⣀⣀⣤⣈⣤⣤⠤⣴⣿⣥⠤⠴⠒⠚⠋⠉⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`,
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
//     return (`                                    888              
//                                     888              
//                                     888              
// 88888b.  .d88b. 888d888.d8888b  .d8888b88888b.  .d88b.  
// 888 "88bd88""88b888P"  88K     d88P"   888 "88bd8P  Y8b 
// 888  888888  888888    "Y8888b.888     888  88888888888 
// 888 d88PY88..88P888         X88Y88b.   888  888Y8b.     
// 88888P"  "Y88P" 888     88888P' "Y8888P888  888 "Y8888  
// 888                                                     
// 888                                                     
// 888 
// `)
// }


// console.log(porchse)
// console.log(porchse.xyz())

// console.log("------------------------------------------------------------------------------------------------------")

// // method 3 - constructor function
// console.log("method 3 - constructor function")
// function AstonMartin (name,color){
//     this.name = name;
//     this.color  = color;
//     this.model = 
//     `⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠻⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢚⣁⣀⡀⠀⠀⠀⠉⠉⠙⠛⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⣴⣶⣦⣤⣤⣀⣀⠀⠀⠀⠀⠉⠉⢛⢛
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠛⠯⠭⣤⢤⠤⠤⠀⢚⣻⣿⡍⢀⣛⣛⣻⠿⣿⣿⡏⢠⣷⣶⣤⣀⠀⠾⣣
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠉⠁⠀⢀⣀⣤⠴⠖⠒⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠘⠚⠻⠗⣲⠁⣨⣟⣛⢿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⣿⣿⡿⠛⠉⠀⠀⠀⠀⠀⠈⠀⠊⠁⠒⠀⠀⠀⠀⠀⢀⣤⡤⠠⠀⠀⠀⠀⠀⡠⠊⣠⣿⣿⣎⣠⡴⢟⢶⣕⠹⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⢀⣼⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⡠⠊⢁⠤⣹⡿⠟⢍⣦⣷⣾⣿⠿⠧⢻⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣟⢋⠥⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠂⡠⠈⠀⢰⣇⣇⣁⡴⠾⢿⣿⣿⡟⠁⠀⠀⠃⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠋⣩⢬⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⡄⠀⠀⠀⠀⠀⠀⡠⡪⠀⣠⣾⣷⡽⡿⡥⠀⠀⠀⣹⡿⠀⠀⠀⠀⢠⣿⣿
// ⣿⣿⣿⣿⣿⣿⢟⣭⣮⣶⡿⢵⣿⣿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⡾⠁⠀⠀⠀⠀⠀⡐⢴⢟⣵⣾⣿⠿⣋⢅⡞⠁⠀⠀⣰⣿⠁⠀⠀⠀⠀⣿⣿⣿
// ⣿⣿⣿⣿⡿⡑⣿⣿⢿⠟⢀⣼⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠋⠀⢀⣀⣤⣆⡈⠀⠀⣸⡿⠟⠫⡰⠟⠛⠈⠀⠀⠀⠈⣽⠏⠀⠀⠀⠀⢸⣿⣿⣿
// ⣿⣿⣿⡿⣼⢷⡿⡱⠃⣠⣿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⣀⣠⣄⣀⣀⣀⣀⣀⣴⢯⡕⢲⣞⡉⢍⡛⠉⠁⡪⠛⠉⠄⠀⠁⠀⠀⠠⢀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣿⣿⣿⣿
// ⣿⣿⡿⢱⣿⡜⣼⣧⣾⣿⣿⣷⣤⣀⠀⠀⢀⣠⣤⣶⣿⡿⠿⢛⡛⢹⣁⣿⠤⠓⡂⢁⣠⣷⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⢀⢄⠤⠐⠁⠀⠀⠀⠀⢀⣤⣾⣿⣿⣿⣿⣿⣿⣿
// ⣿⠟⢀⣿⡟⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢟⣋⣥⣦⣽⣶⣿⡿⠏⣂⣦⣶⣾⠟⠋⠙⠊⠠⣄⣤⣀⡀⠀⢀⡠⠊⡵⠋⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⡦⠸⣿⡿⣿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣯⣵⣾⣿⣿⣿⣿⢿⢫⣡⣴⣾⣿⣿⡟⠁⠀⠀⠀⠀⠀⠸⣿⣿⣿⣷⢖⠅⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⡟⠀⠀⠙⢿⣮⣗⡤⢿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠋⠉⠀⠀⠀⢨⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⠋⠀⠀⠀⣀⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⡇⠀⠀⠀⠀⠙⠻⢿⣿⣾⣿⣿⡿⠟⠋⢁⢀⡀⠀⠤⠤⠤⠀⣢⡿⠉⣻⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⡄⠀⠀⠀⠀⠀⠀⠈⠉⠛⠛⠷⠤⣒⣂⠄⠀⠀⠀⠀⣠⣾⠟⠁⢀⠟⠈⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠿⠟⠛⠛⠉⠀⠀⠀⠀⠀⢀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠊⠀⠀⣀⣤⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
// ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣦⣤⣤⣤⣤⣤⣤⣴⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿`,
//     this.EngineRev = function(){
//         console.log(`${this.name} Engine Revs Sound :  Whooooooooooooooooooooooooooooooooom Whooooooooooooooooooooooooooooooooom`)
//     }
// }
// let obj = new AstonMartin("Lambo","Navy green")
// console.log(obj.name)
// console.log(obj.color)
// console.log(obj.model)
// console.log(obj.EngineRev())



// ------------------------------------------------------------------------------------------------------
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

//call a method 
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
// let arr2 = arr1.   // arr2 is just a reference to arr1 , and 
// arr1[0] = 100
// console.log(arr1)
// console.log(arr2)


// let arr2 = [...arr1];
// arr1[0] = 100
// console.log(arr1)
// console.log(arr2)

// let arr3 = [...arr1,10,20,30,40]
// console.log(arr3)


// ------------------------------------------------------------------------------------------------------
// rest operator (...)