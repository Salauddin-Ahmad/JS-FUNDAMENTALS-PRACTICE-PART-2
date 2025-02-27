// Higher-Order Function: Throttle
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
}

// Function to handle scrolling
function onScroll() {
  console.log("User is scrolling...");
}

// Attach throttle to scroll event
window.addEventListener("scroll", throttle(onScroll, 1000));
