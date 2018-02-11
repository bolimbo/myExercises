"use strict";
//
// console.log("hello from external JS");
//
// alert("Welcome to my site");
//
// var question = prompt("what is you name?");
//
//
//
// if (question == null || question == '' ) {
//     alert ("null is not name");
//     alert("have a great day")
// }
//    else if (confirm(question + " are you sure ?")) {
//        alert(question + " is beautiful name")
//    }
//
//        else{
//            alert("bye")
//        }


       //increment function

       function increment(x) {
    return x + 1;
       }

       console.log(increment(24));

function sayHello(name){
    prompt(name);
    return alert("hello" + name)
}

sayHello();
