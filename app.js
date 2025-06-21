const roles = [
  "Frontend Development",
  "Web Development",
  "Java Development",
  "Software Development"
];

let roleIndex = 0;
let charIndex = 0;
const roleElement = document.getElementById("dynamic-role");
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const fullText = roles[roleIndex];

  if (isDeleting) {
    currentText = fullText.substring(0, charIndex--);
  } else {
    currentText = fullText.substring(0, charIndex++);
  }

  roleElement.textContent = currentText;

  if (!isDeleting && charIndex === fullText.length) {
    setTimeout(() => (isDeleting = true), 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 50 : 100;
  setTimeout(typeEffect, speed);
}

typeEffect();

// hamburger menu
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}


// Contact form submission
const form = document.querySelector("form");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Thanks for contacting me! I’ll get back to you soon.");
    form.reset();
  } else {
    alert("Oops! Something went wrong. Please try again later.");
  }
});
