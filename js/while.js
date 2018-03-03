// 'use strict';
//
// var i = 2;
//
// while(i < 65536){
//     i = i *  2 ;
//     console.log(i);
//
// }
// =========
// var allCones = Math.floor(Math.random() * 50) + 50
// var order;
//
// console.log("I start my day with " + allCones + " cones");
// do {
//     order = Math.floor(Math.random() * 5) + 1;
//     if (order <= allCones){
//         allCones = allCones - order;
//         console.log("cones sold " + order)
//
//     } else {
//         console.log(" I cannot sell you " + order + " cones. I only have " + allCones + " left")
//     }
//
// } while(allCones > 0){
// console.log("I sold all ice cream cones")
// }
// =========


// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i *= 2
//
// }
//
// var allCones = Math.floor(Math.random() * 50) + 50
// var order;
//
// console.log(" I start my day with these many cones " + allCones);
//
//
// do {
//     order = Math.floor(Math.random() * 5) + 1;
// if (order <= allCones) {
//     allCones = allCones - order;
//     console.log(order + " cones sold")
// } else{
//         console.log("I cannot sell you " + order  + " cones , I only have" + allCones)
//
// }
// }while (allCones > 0){
//     console.log("sold out")
// }

var allCones = Math.floor(Math.random() * 50) + 50
var order;

console.log("I start my day with"+ allCones);

do{
    order = Math.floor(Math.random() * 5) + 1;
    if (order <= allCones){
        allCones = allCones -order;
        console.log(order + " cones sold")
    } else {
        console.log("I cannot sell you" + order  + "  cones , I only have" + allCones)
    }

} while (allCones > 0){
    console.log("sold out")
}


