// Question
// Design an algorithm in raw JavaScript to solve the "Meeting Room Scheduling Problem", a complex problem involving scheduling multiple meeting requests in a single meeting room. Each meeting request consists of a start time and an end time. The objective is to find the maximum number of non-overlapping meetings that can be scheduled.

// Constraints:

// Input: An array of meeting objects with start and end properties, e.g., [{start: 1, end: 3}, {start: 2, end: 4}, {start: 3, end: 5}].
// Output: An array of meetings representing the optimal schedule.


// Answer
// javascript
function scheduleMeetings(meetings) {
    // Step 1: Sort meetings by their end time
    meetings.sort((a, b) => a.end - b.end);

    // Step 2: Initialize variables
    const scheduled = []; // To store the selected meetings
    let lastEndTime = 0;  // Tracks the end time of the last selected meeting

    // Step 3: Iterate through the sorted meetings
    for (const meeting of meetings) {
        // Step 4: Check if the meeting can be scheduled
        if (meeting.start >= lastEndTime) {
            scheduled.push(meeting); // Add the meeting to the schedule
            lastEndTime = meeting.end; // Update the last end time
        }
    }

    return scheduled; // Return the optimal schedule
}

// Example Input
const meetings = [
    { start: 1, end: 3 },
    { start: 2, end: 4 },
    { start: 3, end: 5 },
    { start: 6, end: 8 },
    { start: 7, end: 9 }
];

// Calling the function
const optimalSchedule = scheduleMeetings(meetings);

// Output the result
console.log("Optimal Meeting Schedule:", optimalSchedule);


// Sorting by End Time:
// Meetings are sorted based on their end time. This ensures that we always consider the earliest finishing meetings first, which maximizes the remaining time for other meetings.
// Iterating and Selecting Meetings:
// For each meeting in the sorted array:
// If its start time is greater than or equal to the lastEndTime, it's added to the schedule.
// Update lastEndTime to the current meeting's end time.

// Greedy Approach:
// This algorithm uses a greedy strategy by always picking the meeting that ends earliest while maintaining non-overlapping conditions.
// Time Complexity
// Sorting: 
// 𝑂
// (
// 𝑛
// log
// ⁡
// 𝑛
// )
// O(nlogn), where 
// 𝑛
// n is the number of meetings.
// Iteration: 
// 𝑂
// (
// 𝑛
// )
// O(n).
// Overall Complexity: 
// 𝑂
// (
// 𝑛
// log
// ⁡
// 𝑛
// )
// O(nlogn).
// Output for Example Input
// plaintext
// Copy code
// Optimal Meeting Schedule: [
//   { start: 1, end: 3 },
//   { start: 3, end: 5 },
//   { start: 6, end: 8 }
// ]
