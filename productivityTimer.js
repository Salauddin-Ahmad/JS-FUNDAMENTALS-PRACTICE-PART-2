class ProductivityTimer {
    constructor(workDuration = 25, breakDuration = 5) {
        this.workDuration = workDuration * 60 * 1000; // Convert minutes to milliseconds
        this.breakDuration = breakDuration * 60 * 1000;
        this.isWorking = true; // Start with work mode
        this.startTimer();
    }

    startTimer() {
        console.log("⏳ Work session started! Stay focused.");
        setTimeout(() => this.triggerBreak(), this.workDuration);
    }

    triggerBreak() {
        console.log("✅ Time for a break! Relax for a bit.");
        this.isWorking = false;
        setTimeout(() => this.resumeWork(), this.breakDuration);
    }

    resumeWork() {
        console.log("🚀 Back to work! Stay productive.");
        this.isWorking = true;
        this.startTimer();
    }
}

// Start the productivity booster
new ProductivityTimer();
