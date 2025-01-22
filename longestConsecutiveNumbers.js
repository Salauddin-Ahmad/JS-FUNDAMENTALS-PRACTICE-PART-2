function longestConsecutive(nums) {
  if (nums.length === 0) return 0;

  // Use a Set to store unique numbers for O(1) lookups
  const numSet = new Set(nums);
  let longestStreak = 0;

  for (const num of nums) {
    // Check if it's the start of a sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Continue the sequence
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Update the longest streak
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
}

// Examples
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // ➞ 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // ➞ 9
console.log(longestConsecutive([])); // ➞ 0
console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6])); // ➞ 7
