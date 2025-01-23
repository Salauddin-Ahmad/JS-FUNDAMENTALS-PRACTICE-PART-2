function trapRainwater(heights) {
  if (heights.length === 0) return 0;

  let left = 0;
  let right = heights.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left <= right) {
    if (heights[left] < heights[right]) {
      if (heights[left] >= leftMax) {
        leftMax = heights[left]; // Update left max
      } else {
        waterTrapped += leftMax - heights[left]; // Calculate trapped water
      }
      left++;
    } else {
      if (heights[right] >= rightMax) {
        rightMax = heights[right]; // Update right max
      } else {
        waterTrapped += rightMax - heights[right]; // Calculate trapped water
      }
      right--;
    }
  }

  return waterTrapped;
}

// Examples
console.log(trapRainwater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // ➞ 6
console.log(trapRainwater([4, 2, 0, 3, 2, 5])); // ➞ 9
console.log(trapRainwater([1, 0, 2, 0, 1])); // ➞ 1
console.log(trapRainwater([3, 0, 1, 0, 2])); // ➞ 5
