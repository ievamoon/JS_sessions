let a = 1;
let b = 2121.4544;
// let bigInt = 8479345748398475839485379344098594859849584 n;
let specialNumber = 5E-1;
console.log(specialNumber);
a = 2;
b = 1;
console.log(a + b);

a = 0.2;
b = 0.1;
console.log(a + b);
// console.log((a + b) == 0.3); /we will get False here because JavaScript
console.log((a + b) - 0.3 < Number.EPSILON); //epsilon - the smallest number one can imagine

let myNumber = Number("3456");
myNumber = parseInt("585858899");
myNumber = Number("9985958,964985".replace(",", "."));
console.log(myNumber);