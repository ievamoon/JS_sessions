let numberOffBs = parseInt(prompt("please enter number of FZbuzzes needed"));

// let sk = 0;
// let current = 1;
// while (sk < numberOffBs) {
//     // if (current % 3 == 0 current % 5 == 0)
//     if (current % 15 == 0) {
//         console.log(current);
//         sk++;
//     }
//     current++; //go to the next number
// }

let current = 15;
for (let i = 0; i < numberOffBs; i++) {
    current *= 15
    console.log(current)
}