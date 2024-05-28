let counter = document.getElementById('counter');

function count() {
    let now = Date.now();
    let schoolEnd = 1717189200000;
    let difference = schoolEnd - now;

    if (now == schoolEnd) {
        counter.innerText = "0 DAYS!";
        return;
    };

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    counter.innerText = `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
};

count();

setInterval(count, 1000);