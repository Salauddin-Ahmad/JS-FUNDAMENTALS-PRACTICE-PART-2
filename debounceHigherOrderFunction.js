// Higher-Order Function: Debounce
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

// Simulated API Call
function fetchSearchResults(query) {
  console.log(`Fetching results for: ${query}`);
}

// Get input field
const searchInput = document.getElementById("search");

// Attach debounce to input event
searchInput.addEventListener("input", debounce((event) => {
  fetchSearchResults(event.target.value);
}, 500));
