////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//!EXERCISE 1
console.log(`
-------------- Exercise 1----------------

`);
function checkNumberOddOrPair(nr) {
  let result;

  if (nr > 0) {
    result = nr % 2 !== 0 ? nr * 2 : nr - 2;
  } else {
    result = nr % 2 !== 0 ? nr * 2 : nr + 2;
  }

  console.log(result);
  return result;
}

checkNumberOddOrPair(-7);
checkNumberOddOrPair(0);
checkNumberOddOrPair(2);
checkNumberOddOrPair(3);
checkNumberOddOrPair(14);
checkNumberOddOrPair(21);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//!EXERCISE 2
//*The purpose  of this function is to check every number if it's prime
console.log(`
-------------- Exercise 2 ----------------

`);

function checkPrime(num) {
  if (num < 2) return false;
  // here i've used the for loop
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

// *The purpose  of this function is to push every prime number in to a array made to store the prime numbers
// *I've used the function above in this function to check every number from array if it's prime
const savePrimes = (arr) => {
  const primeNumbers = [];
  arr.forEach((el) => {
    if (checkPrime(el)) {
      primeNumbers.push(el);
    }
  });
  console.log(primeNumbers);
  return primeNumbers;
};

const testHomework = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const testPersonal = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
];
savePrimes(testHomework);
savePrimes(testPersonal);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//!EXERCISE 3
//*The purpose of this function is store and return the string elements from an array
console.log(`
-------------- Exercise 3 ----------------

`);

const saveStrings = (arr) => {
  const stringElements = [];
  arr.forEach((el) => {
    if (typeof el === "string") {
      stringElements.push(el);
    }
  });
  console.log(stringElements);
  return stringElements;
};

saveStrings([1, "1", "salut", 2, 6, true, "true"]);
saveStrings([1, 2, 3, 4]);
saveStrings(["1", "2", "3", "4"]);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
//!EXERCISE 4
//*The purpose of this function sum the odd numbers from a number given.
console.log(`
-------------- Exercise 4 ----------------

`);
// Method 1 with break and continue
console.log(`Method 1 with for loop and continue`);
function addDigits(arr) {
  //  i've used (" " + num) to transform the number in to a string as a safty check, because the user may introduce a number with "" or just a number
  // i've used .split to separete the number into individual numbers
  const splitArr = ("" + arr).split("");

  // here I took the last number from array
  const lastElement = splitArr.slice(-1);
  let sumNumbersOdd = 0;

  for (const el of splitArr) {
    if (el % 2 == 0) continue;
    if (el % 2 !== 0) sumNumbersOdd += Number(el);

    // here I've checked if we are at the final of the array (may be useless ) but i wanted to use break;
    if (splitArr[splitArr.length - 1] === lastElement) break;
  }

  console.log(sumNumbersOdd);
  return sumNumbersOdd;
}

addDigits(1935359);
addDigits(1523);
addDigits("337");

// Method 2 with map
console.log(`Method 2 with map`);
function addDigitsTwo(num) {
  let sumNumbersOdd = 0;
  // i've used (" " + num) to transform the number in to a string as a safty check, because the user may introduce a number with "" or just a number
  // i've used .split to separete the number into individual numbers
  // i've used to check the odd number and sum them
  const numberSplit = (" " + num).split("").map((el) => {
    if (el % 2 !== 0) {
      sumNumbersOdd += Number(el);
    }
  });
  console.log(sumNumbersOdd);
  return sumNumbersOdd;
}

addDigitsTwo(1523);
addDigitsTwo("337");
addDigitsTwo("6");

// Method 3 with filter and reduce
console.log(`Method 3 with filter and reduce`);
const addDigitsMethodThree = (num) => {
  return (" " + num)
    .split("")
    .filter((el) => el % 2 !== 0)
    .reduce((prev, curr) => {
      return prev + Number(curr);
    }, 0);
};

console.log(addDigitsMethodThree(1523));
console.log(addDigitsMethodThree("1123789"));

//!EXERCISE 5
//*Switch case
console.log(`
-------------- Exercise 5 ----------------

`);

function switchCase(joke) {
  let result;
  switch (joke) {
    case "joke1":
      console.log("How do you comfort a JavaScript bug? a. You console it");
      result = "How do you comfort a JavaScript bug? a. You console it";
      break;
    case "joke2":
    case "joke3":
      console.log(
        "Why was the JavaScript developer sad? a. Because he didn't Node how to Express himself"
      );
      result =
        "Why was the JavaScript developer sad? a. Because he didn't Node how to Express himself";
      break;

    case "joke4":
      console.log(
        `When a JavaScript date has gone bad, "Don't call me, I'll callback you. I promise!`
      );
      result = `When a JavaScript date has gone bad, "Don't call me, I'll callback you. I promise!`;
      break;
    case "joke5":
      console.log(
        "Why did the software company hire drama majors from Starbucks? a. Because they needed JavaScript experts!"
      );
      result =
        "Why did the software company hire drama majors from Starbucks? a. Because they needed JavaScript experts!";
      break;
    default:
      console.log(
        "Try the joke between 1 and 5. The function is not asynchronous, so it is not linked to an API, you are limited to 5 jokes today."
      );
      result =
        "Try the joke between 1 and 5. The function is not asynchronous, so it is not linked to an API, you are limited to five jokes today. Go back to work!";
  }
  return result;
}

switchCase("joke1");
switchCase("joke2");
switchCase("joke3");
switchCase("joke4");
switchCase("joke5");
switchCase("joke6");

export { savePrimes, addDigits, saveStrings, checkNumberOddOrPair, switchCase };
