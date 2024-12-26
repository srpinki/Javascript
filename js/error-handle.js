"use strict"
/** 
a = "I am a programmer";


function test(num1, num2, num2){
    console.log(num1+num2+num2);
    
}
test(3, 5, 4);
*/

function add (num1, num2) {
    if ( typeof num1 !== "number" || typeof num2 !== "number"){
        return "Enter Number";
    }
    return num1 + num2;
}
let result = add(5, "6");
console.log(result);
