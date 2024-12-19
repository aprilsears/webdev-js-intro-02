// Prevent us from attempting to use variables
// that are not declared
"use strict"

const myName = "April";
console.log(myName)     // Output: "April"
console.log(typeof myName)   // Output: "string"

const one = 1;
console.log(one)                // Output: 1
console.log(typeof one);        // Output: "number"

let isMentor = false;            
console.log(isMentor)           // Output: false
console.log(typeof isMentor)    // Output: "boolean"

const age = 39;
console.log(age);           // Output:39
console.log(typeof age);    // Output: "number"