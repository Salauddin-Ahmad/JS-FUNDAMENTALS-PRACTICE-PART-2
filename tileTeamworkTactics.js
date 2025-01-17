function possibleBonus(a, b) {
  // Check if the friend's position is within 1 to 6 tiles forward
  return b > a && b - a <= 6;
}

// Examples
console.log(possibleBonus(3, 7)); // ➞ true
console.log(possibleBonus(1, 9)); // ➞ false
console.log(possibleBonus(5, 3)); // ➞ false
