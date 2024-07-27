"use strict";
// ------------------------------------------------
let hasDriversLicense = false;
const passtest = true;

if (passtest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

// ------------------------------------------------

// ------------------------------------------------
// functions
// ------------------------------------------------

// function logger() {
//     console.log('My name is Salauddin')
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges){
// console.log(apples, oranges);

// const juice = `Juice with ${apples} apples ${oranges} oranges`
// return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const appleOrangeJuicee = fruitProcessor(2, 4);
// console.log(appleOrangeJuicee);

// // function without return is undefined inside varibale
// function hello(){
//     const str = 'hello'
// }

// const h = hello();
// console.log(h)

// // ---------------------------------------------------
// // ---------------------------------------------------

// // function declration
// // it allows to invoke it before initialization via hoisting
// const age1 = calcAge(1991);
// console.log(age1)
// function calcAge(birhtYear) {
//     return 2037 - birhtYear;
// }

// // function expression
// const calcAge2 = function (birhtYear){
//     return 2037 - birhtYear;
// }
// const age2 = calcAge2(1991);

// //  Arrow Function
// const calcAge3 = birhtYear => 2037 - birhtYear;
// const age3 = calcAge3(1991);
// console.log(age3)

// // retirement calculator
// const yearsUntilRetirement = (birhtYear, firrstName) => {
// const age = 2037 - birhtYear;
// const retirement = 65 - age;
// // return retirement;
// return `${firrstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1991, 'mokondo'))
// console.log(yearsUntilRetirement(2001, 'Abal'))

// ---------------------------------------------------
// ---------------------------------------------------

// functions calling other funtions
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// const fruitProcessor = function (apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of oranges`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3))

// ---------------------------------------------------
// ----------------------Arrays-----------------------
// ---------------------------------------------------

// const years = new Array(1, 2, 3, 4, 5);

// const friends = ["Michael", "Steven", "Peter"];

// console.log(friends.length - 1);

// friends[friends.length] = "John"; // inserts john into array
// friends[friends.length - 1] = "Jane"; // mutates last array element
// console.log(friends);
// friends[0] = "Mike"; // mutates first array element
// console.log(friends);

// const fName = "jon";
// const age = [{ age: 27 }];
// const personData = [fName, "Doe", age, "Developer", friends];
// console.log(personData);

// // excercize

// const calcAge = function (birhtYear) {
//   return 2037 - birhtYear;
// };

// const years = [1990, 1967, 2002, 2018];
// console.log(calcAge(years));

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages)



const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push('Jay'); // holds length inside this variable and pushes jay at the and 

console.log(friends)
console.log(newLength)

const poppedFriend = friends.pop(); // removes last element and returns it
console.log(poppedFriend)
console.log(friends)
friends.unshift('John'); // adds element at the beginning
console.log(friends);

friends.shift(); // removes first element
console.log(friends)

// find index of an element
const indexOfSteve = friends.indexOf('Steven');
const indexOfBob = friends.indexOf('Bob');
friends[friends.length - 1] = 'Grider';
console.log(indexOfSteve, indexOfBob);


console.log(friends.includes('Steven')) // checks the array has it or not true false
console.log(friends.includes('Grider'))
console.log(friends.includes('Bob'))


if (friends.includes('Grider')){
  console.log('Grider is your friend')
}

// ----------------------------------------------------
// ----------------------Arrays Sorting----------------
// ----------------------------------------------------


// no matter wha's the numbers order

const numbers = [3, 1, 5, 2, 4];
numbers.sort((a, b) => a - b); // sorts in ascending order
console.log(numbers);

const numbersReverse = [3, 1, 5, 2, 4];

numbersReverse.sort((a, b) => b - a); // sorts in descending order

console.log(numbersReverse);


const nums = [70, 71.1, 71.4, 71.3, 67, 68, 65, 72];


nums.sort((a, b) => a - b); // (-) = ascending 1,2,3
console.log(nums);

nums.sort((a, b) => b - a); // Sorts in descending order
console.log(nums);

