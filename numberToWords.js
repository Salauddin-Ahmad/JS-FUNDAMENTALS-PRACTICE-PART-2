function numberToWords(num) {
    // Arrays to store number words
    const ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
                  "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    if (num === 0) return "zero";

    if (num < 20) return ones[num];

    if (num < 100) return tens[Math.floor(num / 10)] + (num % 10 === 0 ? "" : " " + ones[num % 10]);

    if (num < 1000) return ones[Math.floor(num / 100)] + " hundred" + (num % 100 === 0 ? "" : " " + numberToWords(num % 100));

    return num.toString(); // For simplicity, if the number is 1000 or greater, return as string (this can be extended)
}

// Example usage:
console.log(numberToWords(4));   // Output: "four"
console.log(numberToWords(23));  // Output: "twenty three"
console.log(numberToWords(105)); // Output: "one hundred five"
