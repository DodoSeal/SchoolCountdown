const counter = document.getElementById('counter');
const subheader = document.getElementById('subheader');
const allowNotificationsButton = document.getElementById('allow-notifications');

if (!"Notification" in window) allowNotificationsButton.style.display = "none";

allowNotificationsButton.addEventListener('click', (e) => {
    Notification.requestPermission().then((result) => {
        if (result !== "granted") {
            if (result == "denied") alert("You previously denied notifications, please reset the setting then try again.");
            return;
        };
    });

    if (Notification.permission == "granted") {
        let n = new Notification("School Countdown", { body: "Testing 123" });
    };
});

function count() {
    let now = Date.now();
    let schoolEnd = 1749241500000;
    let difference = schoolEnd - now;

    if (now >= schoolEnd) {
        counter.style.display = "none";
        subheader.innerText = "School has Ended!";
        subheader.style.fontSize = "5rem";

        // Left Confetti
        confetti({
            particleCount: 100,
            spread: 100,
            angle: 135,
            origin: {
                y: -.2,
                x: 0.4
            }
        });

        // Center Confetti
        confetti({
            particleCount: 100,
            spread: 100,
            angle: 90,
            origin: {
                y: 0
            }
        });

        // Right Confetti
        confetti({
            particleCount: 100,
            spread: 100,
            angle: 45,
            origin: {
                y: -.2,
                x: 0.6
            }
        });
        return;
    };

    let days = `<span style="color: #fb2c36;">${Math.floor(difference / (1000 * 60 * 60 * 24))}d</span>`;
    let hours = `<span style="color: #ff6900;">${Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}h</span>`;
    let minutes = `<span style="color: #f0b100;">${Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))}m</span>`;
    let seconds = `<span style="color: #22c55e;">${Math.floor((difference % (1000 * 60)) / 1000)}s</span>`;

    counter.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
};

count();

setInterval(count, 1000);