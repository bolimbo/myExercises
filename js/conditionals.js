"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */


// function Q () {
//     var conf = confirm("Would you like to enter a number?");
//
//     if (conf) {
//         var numb = parseInt(prompt("please enter a number"));
//
//      if (numb < 0){
//             alert("is negative")
//
//      } if (numb > 0){
//             alert("is positive")
//
//         }if (numb % 2 === 0) {
//             alert("is even");
//             alert(numb * 100)
//
//         } else {
//             alert("is odd");
//             alert(numb * 100)
//         }
//     }
// }
// Q();
// /* ########################################################################## */
// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// var randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// function analyzeColor(colors) {
//     console.log(randomColor);
//     var favColor = "red";
//     if (colors) {
//         if (randomColor === "blue") {
//             console.log("Blue is the color of the sky")
//         } else if (randomColor === "red") {
//             console.log("Strawberries are red")
//         } else if (randomColor === "orange") {
//             console.log("Oranges are orange")
//         } else if (randomColor === "yellow") {
//             console.log("The sun is yellow")
//         } else if (randomColor === "violet") {
//             console.log("My mom's name is Violet")
//         } else if (colors === "green") {
//             console.log("My girlfriend's eyes are green")
//         }
//
//         else {
//             console.log("colors didn't match")
//     }
//         var fav = (randomColor === favColor) ? "the fav matches" : " the fav did not match"
//     }
//     console.log(fav)
// }
// console.log(analyzeColor(colors));
//================================================
//
// switch (randomColor) {
//     case "red":
//         console.log(randomColor + "apples are red");
//         break;
//     case "blue":
//         console.log(randomColor + "the sky is blue");
//         break;
//     case "yellow":
//         console.log(randomColor + "the sun is yellow");
//         break;
//     case "orange":
//         console.log(randomColor + "oranges are orange");
//         break;
//     case "violet":
//         console.log(randomColor + "Violet is my mother's name");
//         break;
//     case "green":
//         console.log(randomColor + "the grass is green");
//         break;
//     default:
//         console.log(randomColor + "I do not know anything about that color")
// }
////================================================

// function analyzeColor(color) {
//     var color = prompt("enter a color")
//     console.log(color);
//         if (color === "blue") {
//             alert("Blue is the color of the sky")
//         } else if (color === "red") {
//             alert("Strawberries are red")
//         } else if (color === "orange") {
//             alert("Oranges are orange")
//         } else if (color === "yellow") {
//             alert("The sun is yellow")
//         } else if (color === "violet") {
//             console.log("My mom's ame is Violet")
//         } else if (color === "green") {
//            alert("My girlfriend's eyes are green")
//         } else if (color === ""){
//         alert("It's empty")
//         }
//
//         else {
//             alert("Don't now about that color")
//         }
//
//
// }
//
// analyzeColor();
//================================================

/*
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 *

 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 *
 * * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.

 */

function calculateTotal(luckyNumber, total) {
   if (luckyNumber == 0) {
   return total;
   }else if (luckyNumber == 1){
       return total - (total * .1)
   } else if (luckyNumber == 2) {
       return total - (total * .25)
   } else if (luckyNumber == 3 ){
       return total - (total - .35)
   } else if(luckyNumber == 4){
       return total- (total * .5)
   } else if (luckyNumber == 5){
       return total - (total * 1)
   } else {
       return total;
   }
}

var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("how much did you spend");
alert("lucky number is " + luckyNumber);
alert("total spent was " + total);
alert("after discount total is " + calculateTotal(luckyNumber, total));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
