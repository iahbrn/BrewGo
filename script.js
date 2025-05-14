document.querySelector(".sign-in-btn").addEventListener("click", function() {
    alert("Login functionality coming soon!");
});

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
}

const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
event.preventDefault();
form.reset();
alert("Your message has been sent!");
});