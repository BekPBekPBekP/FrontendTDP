"use.strict";

const counter = document.getElementById("counter");

const minusOne = () => {
    counter.value = parseInt(counter.value) -1;
}

const minusFive = () => {
    counter.value = parseInt(counter.value) -5;
}

const reset = () => {
    counter.value = "0";

}

const plusOne = () => {
    counter.value = parseInt(counter.value) +1;
}

const plusFive = () => {
    counter.value = parseInt(counter.value) +5;
}
