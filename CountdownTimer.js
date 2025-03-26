class CountdownTimer {
    constructor(targetDate) {
        this.targetDate = new Date(targetDate).getTime();
        this.startCountdown();
    }

    startCountdown() {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = this.targetDate - now;

            if (timeLeft <= 0) {
                console.log("🎉 The event has started!");
                clearInterval(interval);
                return;
            }

            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            console.log(`⏳ Time Left: ${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
    }
}

// Example Usage:
const eventDate = "2025-01-01 00:00:00"; // Change this to your event date
new CountdownTimer(eventDate);
