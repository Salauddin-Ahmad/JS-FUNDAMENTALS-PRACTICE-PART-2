function countTrue(arr: boolean[]): number {
    return arr.filter(value => value).length;
}

// Examples
console.log(countTrue([true, false, false, true, false])); // ➞ 2
console.log(countTrue([false, false, false, false]));      // ➞ 0
console.log(countTrue([]));                                // ➞ 0
