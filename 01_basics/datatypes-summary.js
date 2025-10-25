//  Primitive

/* primitive are call by value means whole copy 
 of it is shared and changes also done on the copy
*/

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

//symbol is used to make any value unique

//javascript is dynamcally typed language

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)   //output : false  (because symbol make value unique)

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "priyaj",
    age: 23,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof anotherId);

//non primitive data types usally are objects 

// https://262.ecma-international.org/5.1/#sec-11.4.3


// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  => object function
//        Object  =>  object