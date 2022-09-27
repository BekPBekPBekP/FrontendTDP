'use.strict'

console.log("Hello world!");

const text = "this is a message";

console.log(text);

console.info(text);

console.dir(text);

console.warn(text);

console.error(text);

console.log("Rebekah");
console.log("Palethorpe");
console.log("Manchester");
console.log("Sagittarius");


let myCar = "Ford";
let myModel = "Focus";
console.log("my fave car is: " + myCar + " and the model is: " + myModel);

console.log("My name is Peep %c and I like choc.","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding 10px");

let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"Javascript"};

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));


let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = `4000 - 2348 = ${4000 - 2348}`;

console.log(` The total bill is £${totalMoney} the remaining amount to be paid is £${totalLeftToPay}`);

console.log("Hi");

for(let i = 0; i < 3; i++) {
    console.log(`i = ${i}`);
}

