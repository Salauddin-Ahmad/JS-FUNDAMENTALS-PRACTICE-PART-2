function knapsack(values: number[], weights: number[], capacity: number): number {
    const n = values.length;

    // Create a 2D array to store solutions to subproblems
    const dp: number[][] = Array(n + 1)
        .fill(0)
        .map(() => Array(capacity + 1).fill(0));

    // Fill the dp table
    for (let i = 1; i <= n; i++) {
        for (let w = 1; w <= capacity; w++) {
            if (weights[i - 1] <= w) {
                // Item can be included, so we take the maximum of:
                // 1. Not including the item
                // 2. Including the item (value[i-1] + dp[i-1][w-weights[i-1]])
                dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
            } else {
                // Item cannot be included, so we carry forward the value without including it
                dp[i][w] = dp[i - 1][w];
            }
        }
    }

    // The result will be in the bottom-right cell of the DP table
    return dp[n][capacity];
}

// Example usage:
const values = [60, 100, 120];
const weights = [10, 20, 30];
const capacity = 50;

console.log(knapsack(values, weights, capacity)); // Output: 220
