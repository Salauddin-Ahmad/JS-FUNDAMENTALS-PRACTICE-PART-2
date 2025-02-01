function longestConsecutiveSequence(nums) {
    if (!nums.length) return [];

    const numSet = new Set(nums);
    let longestSeq = [];

    for (let num of numSet) {
        // Check if it's the start of a sequence
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let tempSeq = [];

            while (numSet.has(currentNum)) {
                tempSeq.push(currentNum);
                currentNum++;
            }

            if (tempSeq.length > longestSeq.length) {
                longestSeq = tempSeq;
            }
        }
    }

    return longestSeq;
}

// Test case
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // Output: [1, 2, 3, 4]
