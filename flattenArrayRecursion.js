// 🧩 Step-by-Step Guide to Build flatten()
// ✅ Step 1: Understand the problem
// Input: A nested array like [1, [2, [3, 4], 5]]
// Output: A flat array like [1, 2, 3, 4, 5]
// Tool: We’ll use recursion to keep digging into nested arrays.

// ✅ Step 2: Create a function that takes an array
// js
// Copy
// Edit
// function flatten(arr) {
//   let result = [];
// }
// This result will hold all flat numbers eventually.

// ✅ Step 3: Loop through the array
// You want to check each element one by one:

// js
// Copy
// Edit
// for (let item of arr) {
//   // handle item
// }
// ✅ Step 4: Check if the item is an array
// We use:

// js
// Copy
// Edit
// Array.isArray(item)
// If true → recurse
// If false → just push the item

// ✅ Step 5: Apply recursive logic
// js
// Copy
// Edit
// if (Array.isArray(item)) {
//   result = result.concat(flatten(item)); // recursive step
// } else {
//   result.push(item); // base case
// }
// ✅ Step 6: Return the final result
// After the loop finishes:

// js
// Copy
// Edit
// return result;
// Now let’s put it all together 👇

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // recursive
    } else {
      result.push(item); // base case
    }
  }

  return result;
}

// Example tests
console.log(flatten([1, [2, [3, 4], 5]]));         // [1, 2, 3, 4, 5]
console.log(flatten([1, [2], [[3]], [[[4]]]]));   // [1, 2, 3, 4]
console.log(flatten([]));                         // []






