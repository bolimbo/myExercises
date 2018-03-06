"use strict";





var input;


do{
    input = prompt("enter a number between 1 and 50")
} while (input > 50 || input  < 1 || input % 2 === 0);
console.log("number to skip" + input);

for (var i = 1; i <= 50; i++){
    if(i % 2  === 0){
        continue
    }if(i == input){
        console.log("yikes skipping " + i)
        continue
    }
    console.log("here an odd number" + i )
}

