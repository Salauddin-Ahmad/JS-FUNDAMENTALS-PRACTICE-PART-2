function binaryGap(n) {
  // Convert the number to its binary representation
  const binary = n.toString(2);

  // Split the binary string by '1' to isolate gaps of zeros
  const gaps = binary.split('1');

  // Remove the last element if the binary ends in zeros
  if (binary.endsWith('0')) gaps.pop();

  // Find the longest gap by checking the lengths of zero segments
  const longestGap = gaps.reduce((max, gap) => Math.max(max, gap.length), 0);

  return longestGap;
}

// Examples
console.log(binaryGap(9));    // ➞ 2 (binary: "1001")
console.log(binaryGap(529));  // ➞ 4 (binary: "1000010001")
console.log(binaryGap(20));   // ➞ 1 (binary: "10100")
console.log(binaryGap(15));   // ➞ 0 (binary: "1111")
console.log(binaryGap(32));   // ➞ 0 (binary: "100000")
