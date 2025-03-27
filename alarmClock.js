class AlarmClock {
    constructor(alarmTime, message) {
        this.alarmTime = new Date(alarmTime).getTime();
        this.message = message;
        this.checkAlarm();
    }

    checkAlarm() {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            if (now >= this.alarmTime) {
                console.log(`⏰ Alarm! ${this.message}`);
                clearInterval(interval);
            } else {
                const timeLeft = Math.floor((this.alarmTime - now) / 1000);
                console.log(`⏳ Alarm in ${timeLeft} seconds...`);
            }
        }, 1000);
    }
}

// Example Usage:
const alarmTime = new Date(new Date().getTime() + 10 * 1000); // 10 seconds from now
new AlarmClock(alarmTime, "Time to take a break! 🚀");
