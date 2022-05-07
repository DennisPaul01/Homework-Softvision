import {
  checkNumberOddOrPair,
  savePrimes,
  addDigits,
  switchCase,
} from "./functions.js";

// DOM
const resultTable = document.querySelector(".form-display-result");
// Input labels
const inputOne = document.getElementById("exercise-one");
const inputTwo = document.getElementById("exercise-two");
const inputThree = document.getElementById("exercise-three");
const inputFour = document.getElementById("exercise-four");
const inputFive = document.getElementById("exercise-five");
// Cta's
const ctaOne = document.querySelector(".exercise-cta-one");
const ctaTwo = document.querySelector(".exercise-cta-two");
const ctaThree = document.querySelector(".exercise-cta-three");
const ctaFour = document.querySelector(".exercise-cta-four");
const ctaFive = document.querySelector(".exercise-cta-five");

// EVENTS
ctaOne.addEventListener("click", () => {
  resultTable.textContent = `${checkNumberOddOrPair(Number(inputOne.value))}`;
});

ctaTwo.addEventListener("click", () => {
  const valueInput = inputTwo.value.split(",").filter((el) => !isNaN(el));
  resultTable.textContent = `${savePrimes(valueInput)}`;
});

ctaThree.addEventListener("click", () => {
  const regex = /('|"|‘)\w+('|"|’)/g;
  const valueInput = inputThree.value
    .split(",")
    .map((el) => el.match(regex))
    .filter((el) => el !== null)
    .flat();
  resultTable.textContent = `Stringurile sunt: [${valueInput}]`;
});

ctaFour.addEventListener("click", () => {
  resultTable.textContent = `${addDigits(Number(inputFour.value))}`;
});

ctaFive.addEventListener("click", () => {
  console.log(inputFive.value);
  resultTable.textContent = `${switchCase(inputFive.value)}`;
});
