"use strict";
// ------------------------------------------------
// let hasDriversLicense = false;
// const passtest = true;

// if (passtest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// ------------------------------------------------
// ----------------------functions-----------------
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

// ------------------------------------------------
// ----------------------functions-----------------
// ------------------------------------------------



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



// const friends = ["Michael", "Steven", "Peter"];
// const newLength = friends.push('Jay'); // holds length inside this variable and pushes jay at the and 

// console.log(friends)
// console.log(newLength)

// const poppedFriend = friends.pop(); // removes last element and returns it
// console.log(poppedFriend)
// console.log(friends)
// friends.unshift('John'); // adds element at the beginning
// console.log(friends);

// friends.shift(); // removes first element
// console.log(friends)

// // find index of an element
// const indexOfSteve = friends.indexOf('Steven');
// const indexOfBob = friends.indexOf('Bob');
// friends[friends.length - 1] = 'Grider';
// console.log(indexOfSteve, indexOfBob);


// console.log(friends.includes('Steven')) // checks the array has it or not true false
// console.log(friends.includes('Grider'))
// console.log(friends.includes('Bob'))


// if (friends.includes('Grider')){
//   console.log('Grider is your friend')
// }

// ----------------------------------------------------
// ----------------------Arrays Sorting----------------
// ----------------------------------------------------


// no matter wha's the numbers order

// const numbers = [3, 1, 5, 2, 4];
// numbers.sort((a, b) => a - b); // sorts in ascending order
// console.log(numbers);

// const numbersReverse = [3, 1, 5, 2, 4];

// numbersReverse.sort((a, b) => b - a); // sorts in descending order

// console.log(numbersReverse);


// const nums = [70, 71.1, 71.4, 71.3, 67, 68, 65, 72];


// nums.sort((a, b) => a - b); // (-) = ascending 1,2,3
// console.log(nums);

// nums.sort((a, b) => b - a); // Sorts in descending order
// console.log(nums);


// ----------------------------------------------------
// ---------------------ARRAYS ENDED-------------------
// ----------------------------------------------------



// ----------------------------------------------------
// -----------------------OBJECT-----------------------
// ----------------------------------------------------


// const jonasArray = [
//   'Jonas',
//   'Moga',
//   2024 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];


// const jonas =  {
//   firstName: 'Jonas',
//   lastName: 'Moga',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// }

// console.log(jonas.lastName)
// console.log(jonas['lastName'])

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey])
// console.log(jonas['last' + nameKey])


// const interestedIn = prompt('What do want to know about Jonas? Choose between firstName , lastName, age, job, and friends');

// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong requset! Choose betweeen firstname, lastName, age, job, and friends')
// }


// jonas.location = 'Portugal'; // adds new prop with . operator notation

// jonas['twitter'] = '@jonasman' // adds new prop with [] notation
// console.log(jonas)

// // ----------------------------------------------------
// // --------------------OBJECT ENDED--------------------
// // ----------------------------------------------------

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


// const jonas =  {
//   firstName: 'Jonas',
//   lastName: 'Moga',
//   birhtYear: 1998,
//   age: 2024 - 1998,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,
  
  // calcAge: function(birhtYear) {
  //   return 2024 - birhtYear
  // }
  // calcAge: function() {
  //   console.log(this)
  //   return 2024 - this.birhtYear
  // }

//   calcAge: function() {
//     this.age = 2024 - this.birhtYear; 
//     return this.age;
//   },
//   getSummary: function() {
//     return `${this.firstName} is a ${this.calcAge} year old ${this.job}. He has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// }

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas['calcAge'](1991)); // ways to call calcAge from  jonas object



// ----------------------------------------------------
// --------------------LOOPS---------------------------
// ----------------------------------------------------

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++){
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const jonasArray =  [
//    'Jonas',
//    'Moga',
//    1998,
//    2024 - 1998,
//    'teacher',
//    ['Michael', 'Peter', 'Steven'],
//    true
// ]

// const types = []
// for (let i = 0; i < jonasArray.length ; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);

// // filling empty array
// // types[i] = typeof jonasArray[i];
//   types.push
// }
// console.log(types)

// const years = [1991, 2007, 1969, 2000];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// continue and break

// console.log(`-------STRIGS ONLY----------`)
// for (let i = 0; i < jonasArray.length ; i++) {
//   if(typeof jonasArray[i] !== 'string') continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log(`-------BREAK WITH NUMBER--------`)
// for (let i = 0; i < jonasArray.length ; i++) {
//   if(typeof jonasArray[i] === 'number') break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }


const jonas =  [
  'Jonas',
  'Moga',
  1998,
  2024 - 1998,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
]

for(let i = jonas.length - 1; i >= 0; ) {
}






// ----------------------------------------------------
// ------------------LOOPS ENDS------------------------
// ----------------------------------------------------

const {firstName, lastName} = jonas;
console.log(firstName)

// Example data: an object representing a user
const user = {
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: null, // The city is null
    postalCode: undefined // The postalCode is undefined
  }
};

// Access nested properties safely using Optional Chaining
// If 'address' or 'street' doesn't exist, it will return undefined instead of throwing an error
const streetName = user?.address?.street;
console.log(streetName); // Output: "123 Main St"

// Using Nullish Coalescing to provide a default value when the result is null or undefined
// '??' only kicks in if the value is null or undefined, unlike '||' which triggers on any falsy value
const cityName = user?.address?.city ?? "Unknown City";
console.log(cityName); // Output: "Unknown City" (since city is null)

// Using both Optional Chaining and Nullish Coalescing together
const postalCode = user?.address?.postalCode ?? "No Postal Code";
console.log(postalCode); // Output: "No Postal Code" (since postalCode is undefined)


// Extending the Array prototype by adding a 'sum' method
Array.prototype.sum = function() {
  // The 'this' keyword refers to the current array on which the method is called
  return this.reduce((accumulator, currentValue) => {
    return accumulator + currentValue; // Accumulate the sum of elements
  }, 0); // Initial value of accumulator is 0
};

// Example usage:
const arr = [1, 2, 3, 4];

// Now, we can directly call the 'sum' method on any array
console.log(arr.sum()); // Output: 10

//Broken Code
for (var i = 0; i < 3; i++) {
  document.getElementById('btn' + i).addEventListener('click', function() {
    console.log(i); // always prints 3
  });
} 

//Solution 
for (var i = 0; i < 3; i++) {
  // Create an IIFE (Immediately Invoked Function Expression) to capture the current 'i'
  (function(index) {
    document.getElementById('btn' + index).addEventListener('click', function() {
      console.log(index); // Now it prints the correct index (0, 1, or 2)
    });
  })(i); // Pass 'i' as 'index' to the IIFE
}

Input: [-10, 15, -20, 25, -5, 30]
Output: [15, 25, 30]

// Function to filter out positive numbers from the array
function getPositiveNumbers(arr) {
  // Step 1: Use the `filter` method to create a new array with positive numbers
  return arr.filter(function(num) {
    // Step 2: Check if the number is positive
    return num > 0; // Only include numbers greater than 0
  });
}

// Example usage
const numbers = [-10, 15, -20, 25, -5, 30];

// Step 3: Call the function and pass the array of numbers
const positiveNumbers = getPositiveNumbers(numbers);

// Step 4: Log the result (should only contain positive numbers)
console.log(positiveNumbers); // Output: [15, 25, 30]

//new problem

// Fun trick to flatten an array of arrays using reduce
const nestedArray = [[1, 2], [3, 4], [5, 6]];

// Using reduce to "flatten" the nested array
const flattenedArray = nestedArray.reduce((acc, currentArray) => {
  return acc.concat(currentArray);
}, []); // Initial value is an empty array

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5, 6]

// Array.prototype.map()
// Fun trick to remove duplicates from an array using map and a Set
const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];

// Creating a new array with unique values by using a Set
const uniqueArray = [...new Set(arrayWithDuplicates)];

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// provide elements
const man = [];
cars[0]= "Abdur Rahman";
cars[1]= "Riyaz Khan";
cars[2]= "Jumman KL";

//nullish coa explanation 
// Let's say we have a user input
let userInput = null;

// Using OR (||) operator to set a default value
let inputWithOR = userInput || "Default Input";
console.log(inputWithOR); // Output: "Default Input"

// The OR (||) operator considers 0, false, "" as falsy, so it will replace them too
userInput = 0;
inputWithOR = userInput || "Default Input";
console.log(inputWithOR); // Output: "Default Input" (0 is falsy)

// Now, using the Nullish Coalescing (??) operator
let inputWithNullish = userInput ?? "Default Input";
console.log(inputWithNullish); // Output: 0 (because 0 is not null or undefined)

// Another example with undefined
let anotherInput;
let result = anotherInput ?? "No input provided";
console.log(result); // Output: "No input provided"

// But if the variable has a value, it won't use the default
anotherInput = "Hello!";
result = anotherInput ?? "No input provided";
console.log(result); // Output: "Hello!"


// curriying function 
// A normal function that adds three numbers
function addThreeNumbers(a, b, c) {
  return a + b + c;
}

console.log(addThreeNumbers(1, 2, 3)); // Output: 6

// Curried version of the same function
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Calling the curried function step by step
console.log(curriedAdd(1)(2)(3)); // Output: 6

// You can also store intermediate steps
const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
console.log(addOneAndTwo(3)); // Output: 6
