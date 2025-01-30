function isAnagram(str1, str2) {
    const formatString = (str) => 
        str.toLowerCase().replace(/\s/g, "").split("").sort().join("");

    return formatString(str1) === formatString(str2);
}

// Test cases
console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("Dormitory", "Dirty room")); // true
console.log(isAnagram("School master", "The classroom")); // true
