// function getSum(a, b) {
//     return a + b;
// }


// function getSum() {
//     return arguments[0] + arguments[1];
// }
// console.log(getSum(3, 8));

// showSum(3, 9);

// function showSum(a, b) {
//     console.log(a + b);
//     console.log(arguments[1]);
// }

// let showSum = function showSum(a, b) {

//     console.log(a + b);
//     console.log(arguments[1]);
// }
// console.log(typeof showSum);
// showSum(4, 7);

// console.log(fact(6));

// function fact(n) {
//     if (n == 1)
//         return 1;
//     else
//         return n * fact(n - 1); ///fact ir tikai nosaukums. Funcija iet pa apli ar "else" kamēr sasniedz pirmo if, kur n=1
// }

// let doge = {};
// doge.sound = "wow";
// doge.glasses = true;
// console.log(doge);

// function person(name, lastname) {
//     let pers = {}
//     pers.name = name;
//     pers.lastname = lastname;
//     return pers;
// }

// let myPerson = person("First Name", "Last Name");
// console.log(myPerson);

// function person(name, lastname) { //constructor
//     this.name = name;
//     this.lastname = lastname;
// }
// let myPerson = new person("ieva", "hortenzija");
// console.log(myPerson);

// let mainSecElement = this.document.getElementById("mainSecElement") //pievienot tekstu, ko ievada lietotajs. Vel to dara ar "createTextNode" (zemāk)
// while (true) {
//     let userInput = prompt("Enter text");
//     if (userInput === null)
//         break;

//     let elementPar = document.createElement("p");
//     elementPar.textContent = userInput;
//     mainSecElement.appendChild(elementPar);
// }

// while (true) {
//     let userInput = prompt("Enter text");
//     if (userInput === null)
//         break;

//     let elementPar = document.createElement("p");
//     elementPar.textContent = userInput;
//     mainSecElement.appendChild(elementPar);
// }

// setTimeout(function() { //uzlikt paziņojumu pēc 5 sek
//     alert("5 seconds have passed")
// }, 5000);

let click = 0
let counter = document.getElementById("counter");

function init() {
    click++;
    counter.innerHTML = "you now have " + click + " cookies";
}

function timer() {
    setTimeout(function() { //uzlikt paziņojumu pēc 5 sek
        alert("Time's up!")
    }, 5000)
};