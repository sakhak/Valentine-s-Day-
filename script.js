const herName = "Molika";

// Gallery
const imgs = Array.from(document.querySelectorAll("#slides img"));
const dotsWrap = document.getElementById("dots");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");

let idx = 0;

function makeDots() {
  dotsWrap.innerHTML = "";
  imgs.forEach((_, i) => {
    const d = document.createElement("div");
    d.className = "dot" + (i === idx ? " active" : "");
    d.addEventListener("click", () => setSlide(i));
    dotsWrap.appendChild(d);
  });
}
function setSlide(i) {
  imgs[idx].classList.remove("active");
  idx = (i + imgs.length) % imgs.length;
  imgs[idx].classList.add("active");
  makeDots();
}
function nextSlide() {
  setSlide(idx + 1);
}

nextBtn.addEventListener("click", nextSlide);
shuffleBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * imgs.length);
  setSlide(r);
});

imgs.forEach((img) => img.addEventListener("click", nextSlide));
makeDots();

// Floating hearts (gentle)
function floatHeart(symbol = "❤️", count = 1) {
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = symbol;
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = Math.random() * 18 + 14 + "px";
    h.style.animationDuration = Math.random() * 3 + 4 + "s";
    h.style.opacity = (Math.random() * 0.5 + 0.45).toFixed(2);
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }
}
setInterval(() => floatHeart("❤️", 1), 550);

// Modal surprise
const modal = document.getElementById("modal");
const heartBtn = document.getElementById("heartBtn");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("okBtn");
const moreHearts = document.getElementById("moreHearts");
const typeEl = document.getElementById("typeText");

const message = `I don't need a special day to love you…
but I'm happy today exists.

Molika, you are my calm in chaos,
my favorite thought,
and my sweetest place to be.

Happy Valentine's Day 💖
I choose you again and again.`;

let typingTimer = null;

function typewriter(text, speed = 24) {
  clearInterval(typingTimer);
  typeEl.textContent = "";
  let i = 0;
  typingTimer = setInterval(() => {
    typeEl.textContent += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(typingTimer);
  }, speed);
}

function heartBurst() {
  const symbols = ["💖", "💘", "💗", "❤️", "✨"];
  for (let i = 0; i < 28; i++) {
    const s = symbols[Math.floor(Math.random() * symbols.length)];
    floatHeart(s, 1);
  }
}

function openModal() {
  modal.classList.remove("hidden");
  heartBurst();
  typewriter(message, 22);
}
function closeModal() {
  modal.classList.add("hidden");
  clearInterval(typingTimer);
}

heartBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
moreHearts.addEventListener("click", heartBurst);

// tap outside modal to close
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

// start
setTimeout(() => setSlide(0), 50);
