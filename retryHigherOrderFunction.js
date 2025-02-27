// Higher-Order Function: Retry
function withRetry(asyncFunc, retries = 3, delay = 1000) {
  return async function (...args) {
    for (let attempt = 1; attempt <= retries; attempt++) {
      try {
        return await asyncFunc(...args);
      } catch (error) {
        console.warn(`Attempt ${attempt} failed. Retrying...`);
        if (attempt === retries) throw new Error("Max retries reached");
        await new Promise((resolve) => setTimeout(resolve, delay));
      }
    }
  };
}

// Simulated API Call (Fails Randomly)
async function fetchData() {
  if (Math.random() > 0.5) {
    throw new Error("Network Error");
  }
  return "✅ Data fetched successfully!";
}

// Wrap API call with retry mechanism
const fetchDataWithRetry = withRetry(fetchData, 3, 1500);

// Call the function
fetchDataWithRetry()
  .then(console.log)
  .catch(console.error);
