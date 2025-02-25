function minOperationsToEqualArray(arr) {
    function getPowerOperations(x, target) {
        let count = 0;
        let diff = Math.abs(x - target);
        
        while (diff > 0) {
            let power = 1;
            while (power * 2 <= diff) {
                power *= 2;
            }
            diff -= power;
            count++;
        }
        return count;
    }

    arr.sort((a, b) => a - b);
    let median = arr[Math.floor(arr.length / 2)];
    let totalOperations = 0;

    for (let num of arr) {
        totalOperations += getPowerOperations(num, median);
    }

    return totalOperations;
}

// Example Test Case
let numbers = [7, 15, 3, 12];
console.log(minOperationsToEqualArray(numbers)); // Output: Minimum operations required
