function shiftToRight(x, y) {
  // Divide x by 2^y and take the floor of the result
  return Math.floor(x / Math.pow(2, y));
}

// Examples
console.log(shiftToRight(80, 3));    // ➞ 10
console.log(shiftToRight(-24, 2));   // ➞ -6
console.log(shiftToRight(-5, 1));    // ➞ -3
console.log(shiftToRight(4666, 6));  // ➞ 72
console.log(shiftToRight(3777, 6));  // ➞ 59
console.log(shiftToRight(-512, 10)); // ➞ -1
