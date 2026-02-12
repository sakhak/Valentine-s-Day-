// Photo slider
let current = 0;
const images = document.querySelectorAll(".gallery img");

// Surprise text
const herName = "Molika";

function nextPhoto() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

// Floating hearts (background)
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// Heart burst effect (surprise)
function heartBurst() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = Math.random() > 0.5 ? "💖" : "💘";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 30 + 18 + "px";
    heart.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }
}

// Typewriter effect
function typeText(el, text, speed = 35) {
  el.textContent = "";
  let i = 0;
  const timer = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(timer);
  }, speed);
}

// Open Heart surprise
function openHeart() {
  document.getElementById("overlay").classList.remove("hidden");
  heartBurst();

  const title = document.getElementById("surpriseTitle");
  const text = document.getElementById("surpriseText");

  title.textContent = `Molika 💖`;

  const msg = `From the first moment I met you,
my heart started choosing you.

You are my favorite person,
my peace, my happiness,
and my forever love ❤️

Happy Valentine’s Day, ${herName} 🌹`;

  typeText(text, msg, 28);
}

// Close overlay
function closeHeart() {
  document.getElementById("overlay").classList.add("hidden");
}
