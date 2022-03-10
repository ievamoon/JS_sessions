"use strict";
const MY_TOP_CONSTANT = 234;
const YEAR = 2022;

console.log("Here is the information for console"); ///here is the comment
console.error("two");
console.warn("three");
// console.clear();
let a;
let b = 33;
a = b;
a = "here is the string";

c = 45;
var c;

var myText = "te ir teksts1";

{
    var myText = "te ir teksts 2"
}
console.log(myText);

let myTextL = "here is the text 1"; {
    let myTextL = "here is the text 2";
    console.log(myTextL);
}

const CVAR = "MyConst var"; //named only using uppercase
console.log(CVAR);
CVAR = "4343";

// const CVAR2; For CONST te bus error jo you must assign value when declaring constant. Later not possible to assign

// CVAR2 = "32";
// console.log(CVAR2);