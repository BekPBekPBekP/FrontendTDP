"use.strict";


let firstNumber = 0;
let operator = "";
let result = document.getElementById("counter");

let savedValue = 0;

const Key7 = () => {
    counter.value = 7;
}

const Key8 = () => {
    counter.value = 8;
}

const Key9 = () => {
    counter.value = 9;
}


const Key4 = () => {
    counter.value =  4;
}

const Key5 = () => {
    counter.value = 5;
}

const Key6 = () => {
    counter.value = 6;
}

const Key1 = () => {
    counter.value = 1;
}

const Key3 = () => {
    counter.value = 3;
}

const Key2 = () => {
    counter.value = 2;
}

const reset = () => {
    counter.value ="";
    savedValue = 0;
}

let add = () => {
    savedValue = parseInt(result.value) + parseInt(savedValue);
    console.log(result.value, "cv");
    console.log(savedValue, "sv");
}

let equals = () => {
    savedValue = parseInt(result.value);
    console.log(result.value, "cv");
    console.log(savedValue, "sv");
}