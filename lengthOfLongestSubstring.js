function lengthOfLongestSubstring(s) {
  let charSet = new Set();
  let left = 0;
  let maxLength = 0;

  for (let right = 0; right < s.length; right++) {
    // If character already exists, shrink the window
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }

    // Add the current character to the set
    charSet.add(s[right]);

    // Update the maximum length
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

// Examples
console.log(lengthOfLongestSubstring("abcabcbb")); // ➞ 3
console.log(lengthOfLongestSubstring("bbbbb"));    // ➞ 1
console.log(lengthOfLongestSubstring("pwwkew"));   // ➞ 3
console.log(lengthOfLongestSubstring(""));         // ➞ 0
