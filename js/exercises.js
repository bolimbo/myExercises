// "use strict";
// if/else
// var pizzaPreference = prompt("What kind of pizza do you like?");
//
// if(pizzaPreference === "peperoni") {
//     alert(pizzaPreference + " is my favorite too")
// } else if(pizzaPreference === "cheese"){
//     alert(pizzaPreference  + " is just boring");
// } else {
//     alert(pizzaPreference + " isn't my favorite")
// }

//ternary operator------


// var message = (success) ? "Operation was successful." : "Oops, something went wrong.";


//-----------------

//switch Operator

var pizzaPreference = prompt("What kind of pizza do you like?");

switch(pizzaPreference){
    case "pepperoni":
        alert("I love" + pizzaPreference);
        break;
    case "cheese":
        alert(pizzaPreference + " is just boring");
        break;
    default:
        alert(pizzaPreference + " isn't my favorite but let's order some");
}