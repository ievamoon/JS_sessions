// let answer = this.confirm("Do you want to continue?");
// console.log(answer);

// answer = this.prompt("How are you?", "Good!");
// console.log(answer);

// // this.open("https://www.google.com");

// answer = this.prompt("Which page do you want to open?").replace("http://", " ").replace("https://", "");
// console.log(answer);
// this.open("https://" + answer);

let d = new Date();

this.alert(`Today is ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`);

let age = parseInt(this.prompt("What is your age?")); //the age will be the number, that's why parseInt
if (age > 17) {
    this.alert("please come in")
} else {
    this.alert("you need to wait a few years")
}