const herName = "Molika";

/* ---------------- INTRO SURPRISE ---------------- */
const intro = document.getElementById("intro");
const main = document.getElementById("main");
const introType = document.getElementById("introType");
const enterBtn = document.getElementById("enterBtn");
// const skipBtn = document.getElementById("skipBtn");

const introMessage = `Hi ${herName}... 💖
Before you enter…
I want you to feel something special.

Ready?`;

let introTimer = null;

function typewriter(el, text, speed = 28) {
  clearInterval(introTimer);
  el.textContent = "";
  let i = 0;
  introTimer = setInterval(() => {
    el.textContent += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(introTimer);
  }, speed);
}

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

function heartBurst() {
  const symbols = [
    "💖",
    "💘",
    "💗",
    "💓",
    "💞",
    "💕",
    "💝",
    "💟",
    "❤️",
    "🩷",
    "🌹",
    "🌸",
    "🌺",
    "🌷",
    "✨",
    "💫",
    "🌟",
    "⭐",
    "🫶",
    "🥰",
    "😍",
    "💋",
    "🎀",
    "🕊️",
    "💌",
  ];
  for (let i = 0; i < 26; i++) {
    floatHeart(symbols[Math.floor(Math.random() * symbols.length)], 1);
  }
}

// gentle hearts always
setInterval(() => floatHeart("❤️", 1), 650);

// start intro typing
typewriter(introType, introMessage, 26);
heartBurst();

function enterSite() {
  intro.classList.add("introHide");
  heartBurst();

  setTimeout(() => {
    intro.style.display = "none";
    main.classList.remove("hiddenMain");
    main.classList.add("showMain");
  }, 520);
}

enterBtn.addEventListener("click", enterSite);
// skipBtn.addEventListener("click", enterSite);

/* -------------- GALLERY ---------------- */
const imgs = Array.from(document.querySelectorAll("#slides img"));
const dotsWrap = document.getElementById("dots");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
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
function prevSlide() {
  setSlide(idx - 1);
}

nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlide);

function setSlide(i) {
  if (!imgs.length) return;
  imgs[idx].classList.remove("active");
  idx = (i + imgs.length) % imgs.length;
  imgs[idx].classList.add("active");
  makeDots();
}

function nextSlide() {
  setSlide(idx + 1);
}

nextBtn?.addEventListener("click", nextSlide);
shuffleBtn?.addEventListener("click", nextSlide); // ✅ now in order
imgs.forEach((img) => img.addEventListener("click", nextSlide));

makeDots();
setTimeout(() => setSlide(0), 50);

/* -------------- MODAL LOVE MESSAGE ---------------- */
const modal = document.getElementById("modal");
const heartBtn = document.getElementById("heartBtn");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("okBtn");
const moreHearts = document.getElementById("moreHearts");
const typeEl = document.getElementById("typeText");

const message = `I don't need a special day to love you…
but I'm happy today exists.

${herName}, you are my calm in chaos,
my favorite thought,
and my sweetest place to be.

Happy Valentine's Day 💖
I choose you again and again.`;

let typingTimer = null;

function typeLove(text, speed = 22) {
  clearInterval(typingTimer);
  typeEl.textContent = "";
  let i = 0;
  typingTimer = setInterval(() => {
    typeEl.textContent += text[i] || "";
    i++;
    if (i >= text.length) clearInterval(typingTimer);
  }, speed);
}

function openModal() {
  modal.classList.remove("hidden");
  heartBurst();
  typeLove(message, 22);
}
function closeModal() {
  modal.classList.add("hidden");
  clearInterval(typingTimer);
}

heartBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
moreHearts.addEventListener("click", heartBurst);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
