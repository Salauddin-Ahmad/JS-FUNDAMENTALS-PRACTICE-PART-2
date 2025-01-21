function spiralDiagonalSum(n) {
  let sum = 1; // Start with the center of the spiral
  let currentNumber = 1;

  // Loop through each layer of the spiral
  for (let layer = 1; layer <= (n - 1) / 2; layer++) {
    const step = layer * 2; // The difference between consecutive diagonal numbers in the current layer

    // Add the 4 diagonal numbers of the current layer
    for (let i = 0; i < 4; i++) {
      currentNumber += step;
      sum += currentNumber;
    }
  }

  return sum;
}

// Examples
console.log(spiralDiagonalSum(1));  // ➞ 1
console.log(spiralDiagonalSum(3));  // ➞ 25
console.log(spiralDiagonalSum(5));  // ➞ 101
console.log(spiralDiagonalSum(7));  // ➞ 261
console.log(spiralDiagonalSum(1001)); // ➞ (Handles large spirals efficiently)
