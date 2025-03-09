document.addEventListener("DOMContentLoaded", function () {
  const words = [
      "Web Developer",
      "Software Developer",
      "Web Designer",
      "Photographer",
      "YouTuber",
  ];
  const typingElement = document.getElementById("typing");
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  function type() {
      const currentWord = words[wordIndex];
      const speed = isDeleting ? 100 : 200;
      typingElement.textContent = currentWord.substring(0, charIndex);
      charIndex += isDeleting ? -1 : 1;
      if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(type, 500);
      } else {
          setTimeout(type, speed);
      }
  }
  type();
  // Mobile Menu Toggle
  const mobileMenuIcon = document.querySelector(".fa-solid");
  const navbar = document.querySelector(".navbar");
  mobileMenuIcon.addEventListener("click", () => {
      navbar.classList.toggle("open");
  });
  // Contact Form
  document.getElementById("contactForm").addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      if (name && email && message) {
          alert(`Thank you, ${name}. Your message has been sent!`);
          this.reset();
      } else {
          alert("Please fill in all fields.");
      }
  });
});