function majorityElement(nums) {
  let candidate = null;
  let count = 0;

  // Find the majority candidate
  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += (num === candidate) ? 1 : -1;
  }

  // Majority element is guaranteed to exist, so we can return the candidate
  return candidate;
}

// Examples
console.log(majorityElement([3, 2, 3])); // ➞ 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // ➞ 2
console.log(majorityElement([1])); // ➞ 1
