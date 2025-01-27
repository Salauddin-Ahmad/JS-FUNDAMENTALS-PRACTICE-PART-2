function findMissingPositive(nums) {
  const n = nums.length;

  // Step 1: Place each number in its correct index (1-based indexing).
  for (let i = 0; i < n; i++) {
    while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
      const correctIndex = nums[i] - 1;
      [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]]; // Swap
    }
  }

  // Step 2: Find the first index where the value is incorrect.
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // Step 3: If all numbers are in the correct position, return n + 1.
  return n + 1;
}

// Examples
console.log(findMissingPositive([1, 2, 0])); // ➞ 3
console.log(findMissingPositive([3, 4, -1, 1])); // ➞ 2
console.log(findMissingPositive
