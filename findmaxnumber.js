// Problem: Find the Largest Number in an Array
// Step 1:
// You're given an array of numbers:

// js
// Copy
// Edit
// const numbers = [1, 16, 5, 14];
// Step 2:
// Write a function findLargest(arr) that goes through the array and finds the largest number without using built-in methods like Math.max() or sort().

// Step 3:
// Return the largest number and print it using:

// js
// Copy
// Edit
// const largest = findLargest(numbers);
// console.log(largest); // Output should be: 16
// Let me know if you want a similar one for smallest number or a variation!




// Solution:

const numbers = [1, 16, 5, 14]

function findLargest(arr) {
  let max = arr[0];
  for (let num of arr) {
 if (num > max){
  max = num
 }
  }
  return max
}

const largest = findLargest(numbers);
console.log(largest);
