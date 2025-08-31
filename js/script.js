// Animate the gold sphere along the SVG path in a loop for smooth effect
const sphere = document.getElementById("gold-sphere");
const path = document.querySelector(".tube-path");
const pathLength = path.getTotalLength();

let startTime = null;
const duration = 8000; // 8 seconds per loop

function animateSphere(timestamp) {
  if (!startTime) startTime = timestamp;
  const elapsed = (timestamp - startTime) % duration;
  const progress = elapsed / duration;

  // Get point along path based on progress
  const point = path.getPointAtLength(progress * pathLength);

  // Move the sphere to the point, center align
  sphere.style.transform = `translate3d(${point.x - 20}px, ${
    point.y - 20
  }px, 0)`;

  requestAnimationFrame(animateSphere);
}

requestAnimationFrame(animateSphere);

// Add slight shadow flicker effect on the ball for liveliness
let flickerDirection = 1;
let flickerOpacity = 0.45;

setInterval(() => {
  flickerOpacity += 0.01 * flickerDirection;
  if (flickerOpacity >= 0.6 || flickerOpacity <= 0.35) flickerDirection *= -1;
  sphere.style.boxShadow = `0 0 12px rgba(255, 234, 68, ${flickerOpacity}), inset 0 4px 6px rgba(255, 249, 170, ${flickerOpacity})`;
}, 70);

// Header background change on scroll
const header = document.querySelector("header.header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const logo = document.getElementById("logo");
const nav = document.getElementById("mainNav");

logo.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    nav.classList.toggle("mobile-active");
  }
});

document.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    if (!nav.contains(e.target) && !logo.contains(e.target)) {
      nav.classList.remove("mobile-active");
    }
  }
});
