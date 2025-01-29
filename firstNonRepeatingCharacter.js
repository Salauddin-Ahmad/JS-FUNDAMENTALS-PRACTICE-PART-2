function firstNonRepeatingChar(str) {
    const charCount = {};

    // Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// Test cases
console.log(firstNonRepeatingChar("javascript")); // "j"
console.log(firstNonRepeatingChar("aabbcc")); // null
console.log(firstNonRepeatingChar("stress")); // "t"
