/**
 * Solves the 0/1 Knapsack problem using dynamic programming with memoization.
 * This algorithm finds the maximum value achievable with a knapsack of a given capacity
 * and a set of items where each item has a weight and value.
 * 
 * @param {Array} items - Array of items, where each item is an object { weight: <number>, value: <number> }.
 * @param {number} capacity - The capacity of the knapsack.
 * @param {Object} memo - A memoization cache for previously calculated subproblems.
 * @returns {number} - The maximum value that can be obtained within the knapsack's capacity.
 */
function knapsack(items, capacity, memo = {}) {
    // Check if the current subproblem has been solved before (memoized)
    if (capacity in memo) return memo[capacity];

    // Base case: No capacity means no value can be carried
    if (capacity === 0) return 0;

    let maxValue = 0; // Initialize the maximum value for this subproblem

    // Iterate through all items and try to include/exclude each one
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // If the item can fit into the knapsack (i.e., weight is less than capacity)
        if (item.weight <= capacity) {
            // Option 1: Include the item and solve the subproblem with reduced capacity
            const includedValue = item.value + knapsack(items, capacity - item.weight, memo);

            // Option 2: Exclude the item and solve the subproblem without it
            const excludedValue = knapsack(items, capacity, memo);

            // Take the maximum value from including or excluding the item
            maxValue = Math.max(maxValue, includedValue, excludedValue);
        }
    }

    // Memoize the result for the current subproblem (capacity)
    memo[capacity] = maxValue;
    return maxValue;
}

// Example usage:
const items = [
    { weight: 2, value: 3 },
    { weight: 3, value: 4 },
    { weight: 4, value: 5 },
    { weight: 5, value: 8 }
];

const capacity = 5;
const maxKnapsackValue = knapsack(items, capacity);

console.log("Maximum Value that can be obtained:", maxKnapsackValue);
