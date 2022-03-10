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

console.log(fact(6));

function fact(n) {
    if (n == 1)
        return 1;
    else
        return n * fact(n - 1); ///fact ir tikai nosaukums. Funcija iet pa apli ar "else" kamēr sasniedz pirmo if, kur n=1
}

let doge = {};
doge.sound = "wow";
doge.glasses = true;
console.log(doge);