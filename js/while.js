'use strict';




// var i = 2;
//
// while (i <= 65536) {
//     console.log(i);
//     i *= 2
//
// }
//=================

// function multiplicationTable(x) {
//     for(var i = 1; i <= 10; i++){
//         console.log(x + "x" + i + " = " + (x * i))
//     }
//
// }
// multiplicationTable(9);
//===================
// var n;
//
// for (var i = 1; i <= 10; i++) {
//     n = Math.floor(Math.random() * 200) + 20;
//
//     if (n % 2 === 0) {
//         console.log("its even " + n)
//
//     } else {
//         console.log("its odd " + n)
//     }
// }
//======================
// for(var i = 0; i <= 10; i++){
//     i = i.toString();
//     console.log(i.repeat(i))
// }
//=======================
var input;

do {
    input = prompt("enter an odd number between 1 and 50");
    console.log("skipping number " + input)

} while (input > 50 || input < 1 || input % 2 == 0);


for (var i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        continue
    }
    if (i == input) {
        console.log("yikes skipping number " + i);
        continue
    }
    console.log("here is an odd number" + i)
}