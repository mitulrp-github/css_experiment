const hourHand = document.getElementById('hour');
const minuteHand = document.getElementById('minute');
const secondHand = document.getElementById('second');
const themeToggle = document.getElementById('theme-toggle');
const digitalTime = document.getElementById('digital-time');
const body = document.body;

function setClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Adjust the rotation angles
    const secondsDegrees = ((seconds / 60) * 360) - 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) - 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) - 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    updateDigitalTime(now);
}

function updateDigitalTime(now) {
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    digitalTime.textContent = `${hours}:${minutes}:${seconds}`;
}

function toggleTheme() {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    themeToggle.style.backgroundColor = body.classList.contains('dark-mode') ? 'white' : 'black';
    themeToggle.style.color = body.classList.contains('dark-mode') ? 'black' : 'white';
}

themeToggle.addEventListener('click', toggleTheme);
setInterval(setClock, 1000);
setClock(); // Initial call to set the clock immediately
toggleTheme(); // Initial call to set button colors correctly
