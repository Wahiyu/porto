// Modal project image
function openModal(src) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Typing animation
const skills = ["Graphic Design", "UI/UX", "Photography", "Branding", "Illustration"];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const typewriter = document.getElementById("typewriter");

function typeEffect() {
  const current = skills[index];
  if (isDeleting) {
    typewriter.textContent = current.substring(0, charIndex--);
  } else {
    typewriter.textContent = current.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index = (index + 1) % skills.length;
    setTimeout(typeEffect, 500);
  } else {
    setTimeout(typeEffect, speed);
  }
}

typeEffect();
