// Create the clock container
const body = document.body;
body.style.margin = "0";
body.style.height = "100vh";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.backgroundColor = "black";

// Create the clock element
const clock = document.createElement("div");
clock.style.fontFamily = "Arial, sans-serif";
clock.style.fontSize = "5rem";
clock.style.color = "#0ff";
clock.style.textShadow = "0 0 10px #0ff, 0 0 20px #0ff, 0 0 40px #00f, 0 0 80px #00f";
body.appendChild(clock);

// Function to update the clock
function updateClock() {
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    
    clock.textContent = `${hours}:${minutes}:${seconds}`;
}

// Update every second
setInterval(updateClock, 1000);
updateClock(); // Initial call
