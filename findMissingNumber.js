function findMissingNumber(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // Sum of numbers from 0 to n
  const actualSum = nums.reduce((sum, num) => sum + num, 0); // Sum of the array

  return expectedSum - actualSum; // The difference is the missing number
}

// Examples
console.log(findMissingNumber([3, 0, 1])); // ➞ 2
console.log(findMissingNumber([0, 1]));    // ➞ 2
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // ➞ 8
console.log(findMissingNumber([0]));       // ➞ 1
